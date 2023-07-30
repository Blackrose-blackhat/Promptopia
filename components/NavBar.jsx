"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from
    'next-auth/react';

const NavBar = () => {
    const isLoggedIn = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropDown, settoggleDropDown] = useState(false);

    useEffect(() => {
        const setProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        }
        setProviders();
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    width={30}
                    height={30}
                    src="/assets/images/logo.svg"
                    alt="Promptopia logo"
                    className="object-contain"
                />
                <p className="logo_text"> Promptopia</p>
            </Link>

            {/*Desktop Navigation */}
            <div className="sm:flex hidden">
                {isLoggedIn ? (
                    <div className="flex gap-3 md:gap-5 ">
                        <Link href="/create-prompt"
                            className="black_btn">
                            Create Post
                        </Link>
                        <button type="button" onClick={signOut}
                            className="outline_btn">
                            Sign Out
                        </button>

                        <Link href="/profile">
                            {/*Profile Image */}
                        </Link>

                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))
                        }
                    </>
                )}
            </div>

            {/*Mobile Navigation */}

            <div className="sm:hidden flex relative">
                {isLoggedIn ? (
                    <div className="flex">

                        <Image
                            src="/assets/images/logo.svg"
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            onClick={() => settoggleDropDown((prev) => !prev)}
                        />
                        {toggleDropDown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => settoggleDropDown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => settoggleDropDown(false)}
                                >
                                    Create Prompt
                                </Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="black_btn"
                            >
                                Sign In
                            </button>
                        ))
                        }
                    </>
                )}
            </div>

        </nav>
    )
}

export default NavBar