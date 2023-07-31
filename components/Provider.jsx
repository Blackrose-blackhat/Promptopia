"use client"
//session Provider is used to call a hook useSession() to see if someone is signed in or not.
import { SessionProvider } from 'next-auth/react'
const Provider = ({ children, session }) => {
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}

export default Provider