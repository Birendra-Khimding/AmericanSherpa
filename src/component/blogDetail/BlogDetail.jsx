// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../blogData/data';
import { Link } from 'react-router-dom';
import './blogDetail.css';
import  { useState,useEffect } from 'react';
import User from '../../images/user.png'


const BlogDetail = () => {
    const [comments, setComments] = useState([]);
    

     // Handling the submission of a new comment
     const handleCommentSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const comment = event.target.elements.comment.value; // Get the comment text from the form
        if (comment) {
            // Add the new comment to the state
            setComments([...comments, { text: comment }]);
            event.target.reset(); // Reset the form
        }
    };

    const { id } = useParams();
    console.log("id",id);
    const blog = blogData.find(blog => blog.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [id]);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    const relatedPosts = blogData.filter(
        b => b.catagory === blog.catagory && b.id !== blog.id
    );


    const renderRelatedPosts = (relatedPosts) => {
        return (
            <div className='relatedPosts'>
                <h3>Related Posts</h3>
                <div className='relatedPostsList'>
                    {relatedPosts.map(post => (
                        <Link to={`/blog/${post.id}`} key={post.id} className='relatedPostItem'>
                            <img src={post.image} alt={post.title} />
                            <div className='relatedPostContent'>
                            <h4>{post.title}</h4>
                            <p>{post.content.slice(0, 20)}...</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    };


    return (
        <>
        <div className='blogContainer'>
        <div className='blogDetail'>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <h4>{blog.date}</h4>
            <img src={blog.image} alt={blog.title} />
            <p>{blog.content}</p>
        </div>

        <div className="relatedContent">
        {relatedPosts.length > 0 ? (
                    renderRelatedPosts(relatedPosts)
                ) : (
                    <p>No related posts found.</p>
                )}
        </div>
        </div>

        <div className='commentsSection'>
                <h3>Comments</h3>
                <form onSubmit={handleCommentSubmit} className='commentForm'>
                    <div className="commentList">
                    <img src={User} alt="" />
                    <textarea name='comment'  placeholder='Write a comment...' rows="3" ></textarea>
                    </div>
                    <div className="commentBtn">
                    <button type='submit'>Comment</button>
                    </div>
                </form>
                <div className='commentsList'>
                    {comments.map((comment, index) => (
                        <div key={index} className='comment'>
                            <img src={User} alt="" />
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BlogDetail;