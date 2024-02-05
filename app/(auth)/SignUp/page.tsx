import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Import } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import googleIcon from '../../../public/google.svg'
import Image from "next/image";


export default function SignUp() {
    return (
        <div className="mt-24 rounded bg-black/75 py-10 px-10 md:mt-0 md:max-w-sm md:px-14">
            <form className='justify-center'>
                <h1 className='text-3xl font-semibold text-white'>SignUp</h1>
                <div className='space-y-4 mt-5'>
                    <Input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='bg-[#333] placeholder:text-xs placeholder:text-grey-400 w-full inline-block'
                    />
                    <Button
                     type='submit' 
                     variant='destructive' 
                     className='w-full bg-[#e50914]'>
                        Sign-Up
                    </Button>
                </div>
            </form>
            <div className='text-grey-500 texxt-sm mt-2'>
                Alredy Have a Account ? {""}
                <Link className='text-white hover:underline' href='/login'>
                    Sign In now 
                </Link>
             </div>
             <div className='flex w-full justify-center items-center gap-x-3 mt-5'>
                <Button variant='outline' size='icon'>
                    <GitHubLogoIcon className='w-4 h-4' />
                </Button>
                <Button variant='outline' size='icon'>
                    <Image src={googleIcon} alt= 'googleIcon' className='w-6 h-6' />
                </Button>
             </div>
        </div>
    );
}
