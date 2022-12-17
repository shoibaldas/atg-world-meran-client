import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteConfirmationModal from '../Shared/DeleteConfirmationModal/DeleteConfirmationModal';
import EditPostContentModal from '../Shared/EditPostContentModal/EditPostContentModal';
import toast from 'react-hot-toast';
import PostData from './PostData';

const AllPost = () => {
    const [spinner, setSpinner] = useState();
    const [editPost, setEditPost] = useState(null);
    const [postData, setPostData] = useState(true);
    const [deletePost, setDeletePost] = useState(null);


    const closeModal = () => {
        setDeletePost(null);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/allPost`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setPostData(false);
                    setSpinner(data?.results);
                }
            })
    }, [spinner])

    if (postData) {
        <div>
            Loading......
        </div>
    }

    const handleDeletePost = (post) => {
        fetch(`http://localhost:5000/api/v1/delete-post/${post._id}`, {
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



    return (
        <div className='my-4'>
            <div className="max-w-screen-sm mx-auto p-4 rounded-md bg-gray-50 hadow-lg">
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

            </div>
        </div >
    );
};

export default AllPost;