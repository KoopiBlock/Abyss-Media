import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../../Client.js'
import './Blogs.css'

import testImage from './Asset 1.png'


function Blogs() {

    const [postData, setPostData] = useState(null)

    useEffect(() => {

        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                "name": author->name,
            }`
        )
            .then((data) => setPostData(data))
            .catch(console.error)

    }, [])

    if (!postData) return (
        <div className='loading'>
            <img src={testImage} alt='Loading...' className='load-image' />
        </div>
    )

    console.log(postData)

    return (
        <div className='blogs'>
            <h1 className='main-title'> Blogs</h1>
            <div className='blogs-container'>

                {postData && postData.map((post, index) => (

                    <div key={index} className='blog-post'>
                        <Link
                            to={'/post/' + post.slug.current}
                            key={post.slug.current}
                            className='blog-link'
                        >
                            <img className='blog-image' src={post.mainImage.asset.url} alt={post.title} />
                            <h1 className='blog-title'>{post.title}</h1>
                            <h2 className='blog-author'>By: {post.name}</h2>
                        </Link>
                    </div>


                ))}

            </div>
        </div>
    )
}

export default Blogs