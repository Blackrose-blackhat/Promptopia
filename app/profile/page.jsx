"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"


const MyProfile = () => {
    const { data: session } = useSession();
    const [posts, setposts] = useState([]);
    const router = useRouter()
    const fetchPosts = async () => {
        const res = await fetch(`/api/users/${session?.user.id}/posts`);

        const data = await res.json();
        setposts(data);
    }
    useEffect(() => {

        if (session?.user.id)
            fetchPosts();

    }, [])

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete the propmpt?");
        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE',
                });

                const filetredPosts = posts.filter((p) => p._id !== post._id);

                setposts(filetredPosts);

            } catch (error) {
                console.error(error);
            }
        }
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