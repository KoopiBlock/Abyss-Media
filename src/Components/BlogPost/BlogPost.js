import React from 'react'
import sanityClient from '../../Client.js'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { useState, useEffect } from 'react'
import './BlogPost.css'
import { useParams } from 'react-router-dom'
import testImage from './Asset 1.png'
import Contact from '../Contact/Contact.js'
import Footer from '../Footer/Footer.js'





const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
    return builder.image(source)
}

function BlogPost() {

    const [postData, setPostData] = useState(null)

    const { slug } = useParams()

    useEffect(() => {

        sanityClient.fetch(
            `*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`
        ).then((data) => setPostData(data[0]))
            .catch(console.error)


    }, [slug])

    if (!postData) return (
        <div className='loading'>
            <img src={testImage} alt='Loading...' className='load-image' />
        </div>
    )

    return (
        <div className='post'>

            <div className='post-header'>

                <img src={postData.mainImage.asset.url} alt={postData.title} className="post-image" />
                <h1 className='post-title'>{postData.title}</h1>
                <h2 className='post-author'>By: {postData.name}</h2>
            </div>
            <article className='post-article'>
                <div className='block-div'>
                    <BlockContent
                        blocks={postData.body}
                        projectId='302xinaz'
                        dataset='production'
                    />
                </div>

            </article>
            <Contact />
            <Footer />
        </div>
    )
}

export default BlogPost