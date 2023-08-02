"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"


const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setposts] = useState([]);
    const fetchPosts = async () => {
        const res = await fetch(`/api/users/${session?.user.id}/posts`);

        const data = await res.json();
        setposts(data);
    }
    useEffect(() => {

        if (session?.user.id)
            fetchPosts();

    }, [])

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

    return (
        <Profile
            name="My"
            desc="Welocme to your personalised profile"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile