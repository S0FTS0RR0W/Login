"use client"

import { Button } from '@/components/ui/button';

async function HandleSubmit() {
    const result = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
}

export default function loginPage() {
    return (
        <div className="absolute items-center justify-center flex flex-col w-full h-full">
            <h1 className="flex font-mono text-2xl text-shadow-lime-50">
                Login
            </h1>
        
        <form className="rounded-2xl border-white items-center justify-center flex flex-col">
            <input className="" type="username" placeholder="Username" />
            <input className="" type="password" placeholder="Password" />
            <Button onClick={HandleSubmit}>Login</Button>
        </form>
        
        </div>
    )
}