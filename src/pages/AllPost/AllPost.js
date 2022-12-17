import React, { useEffect, useState } from 'react';
import DeleteConfirmationModal from '../Shared/DeleteConfirmationModal/DeleteConfirmationModal';
import EditPostContentModal from '../Shared/EditPostContentModal/EditPostContentModal';
import toast from 'react-hot-toast';
import PostData from './PostData';
import Loading from '../Shared/Loading/Loading';
import Comments from '../Comments/Comments';
import { useLoaderData } from 'react-router-dom';

const AllPost = ({ id }) => {
    const [spinner, setSpinner] = useState();
    const [editPost, setEditPost] = useState(null);
    const [postData, setPostData] = useState(true);
    const [deletePost, setDeletePost] = useState(null);


    const closeModal = () => {
        setDeletePost(null);
    }

    useEffect(() => {
        fetch(`https://atg-world-mern-server.vercel.app/api/v1/allPost`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setPostData(false);
                    setSpinner(data?.results);
                }
            })
    }, [spinner])

    const { contents } = useLoaderData();

    const [reviews, setReviews] = useState();
    const [fill, setFill] = useState([]);
    const [feeds, setFeeds] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/comments`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data?.results)
                if (reviews) {
                    const reviewAll = reviews.filter(rev => rev.postId === contents._id)
                    setFill(reviewAll);
                    setSpinner(false);
                }

            })
    }, [reviews, feeds, contents._id])

    const handleDeletePost = (post) => {
        fetch(`https://atg-world-mern-server.vercel.app/api/v1/delete-post/${post._id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Post deleted successfully`);

                }
            })
    }

    if (postData) {
        return <Loading></Loading>
    }

    return (
        <div className='my-4'>

            {
                spinner?.map(
                    // post => console.log(post)
                    post => <PostData
                        key={post._id}
                        post={post}
                        setEditPost={setEditPost}
                        setDeletePost={setDeletePost}
                    ></PostData>
                )
            }
            {
                editPost &&
                <EditPostContentModal
                    editPost={editPost}
                    setEditPost={setEditPost}
                ></EditPostContentModal>
            }
            {
                deletePost && <DeleteConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete once. It cannot be undone.`}
                    successAction={handleDeletePost}
                    successButtonName="Delete"
                    modalData={deletePost}
                    closeModal={closeModal}
                >
                </DeleteConfirmationModal>
            }
            {
                fill?.map(feed => <Comments key={feed._id} feed={feed}></Comments>)
            }

        </div>

    );
};

export default AllPost;