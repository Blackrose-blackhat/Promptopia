"use client";

import { useState, useEffect } from 'react';
import PromptCard from "./PromptCard";
import React from 'react'


const PromptCardList = ({ data, handleTagClick }) => {

    return (

        <div className='mt-16 prompt_layout'>

            {Array.isArray(data) ? (
                data.map((post) => (
                    <PromptCard
                        key={post._id}
                        post={post}
                        handleTagClick={handleTagClick}
                    />
                ))
            ) : <p> No data available in array</p>
            }
        </div>
    )
}


const Feed = () => {

    const [searchText, setsearchText] = useState('');
    const [posts, setposts] = useState([]);
    const handleSearchChange = (e) => {

    }
    const fetchPosts = async () => {
        const res = await fetch("/api/prompt");

        const data = await res.json();
        setposts(data);


    }

    useEffect(() => {

        fetchPosts();

    }, [])


    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type='text'
                    placeholder='Search for tag or a username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input peer'
                >
                </input>
            </form>
            <PromptCardList
                data={posts}
                handleTagClick={() => { }}
            />
        </section>
    )
}

export default Feed