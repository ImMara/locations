"use client"
import React from 'react';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';

function Navbar(props) {

    const {data:session} = useSession();

    return (
        <div className='flex items-center justify-between p-4 shadow-lg'>
            <ul className='flex gap-5 items-center '>
                <Image src="/logo.png" alt="logo" width={50} height={50}/>
                <li>Home</li>
            </ul>
            <div>
                {
                    session?.user? <Image onClick={()=>signOut()} className='rounded-full' src={session.user.image} alt="profile" width={40} height={40}/> : null
                }
            </div>
        </div>
    );
}

export default Navbar;