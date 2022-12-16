import React, { useEffect, useState } from 'react';
import DeleteConfirmationModal from '../Shared/DeleteConfirmationModal/DeleteConfirmationModal';
import EditPostContentModal from '../Shared/EditPostContentModal/EditPostContentModal';

import PostData from './PostData';

const AllPost = () => {
    const [spinner, setSpinner] = useState([]);
    const [editPost, setEditPost] = useState(null);
    const [deletePost, setDeletePost] = useState(null);

    const closeModal = () => {
        setDeletePost(null);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/allPost`)
            .then(res => res.json())
            .then(data => {
                console.log(typeof (data))
                // let newdata = Array.from([data])
                if (data) {
                    setSpinner([data]);
                }

            })
    }, [])

    const handleDeletePost = () => {

    }

    return (
        <div className='my-4'>
            <div className="max-w-screen-sm mx-auto p-4 rounded-md bg-gray-50 hadow-lg">
                {
                    spinner?.map((post, index) => <PostData
                        key={index}
                        post={post}
                        setEditPost={setEditPost}
                        setDeletePost={setDeletePost}
                    ></PostData>)
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
        </div>
    );
};

export default AllPost;