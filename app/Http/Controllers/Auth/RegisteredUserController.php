<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $role = $request->filled('specialisation') ? 'avocat' : 'client';

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'cin' => [
                $role === 'client' ? 'required' : 'nullable',
                'string',
                'max:20',
                'unique:users,cin'
            ],
            'specialisation' => ['nullable', 'string', 'max:255'],
            'phone' => ['required_if:specialisation,!=,', 'nullable', 'string', 'max:20'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->string('password')),
            'cin' => $request->cin,
            'role' => $role,
            'specialisation' => $role === 'avocat' ? $request->specialisation : null,
            'phone' => $role === 'avocat' ? $request->phone : null,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->noContent();
    }
}
