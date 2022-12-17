import React, { useContext } from 'react';
import { IoSendSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const AddComment = ({ id }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleComment = (event) => {
        event.preventDefault();
        if (user && user?.email) {
            const comment = event.target.commentContent.value;

            const addComment = {
                postId: id,
                commentContent: comment,
                username: user?.username
            }

            fetch(`https://vercel.com/shoibaldas/atg-world-mern-server/api/v1/addComment`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addComment)
            })
                .then(response => response.json())
                .then(data => {
                    toast.success("You commented successfully.");

                    event.target.reset();
                })
                .catch(error => (error.message));
        }
        else {
            navigate('/signin');
        }

    }
    return (
        <div className='py-2'>
            <form onSubmit={handleComment}>
                <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-200">
                    <textarea rows="1" name="commentContent" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 " placeholder="Your comment..."></textarea>

                    <button type="submit" className="inline-flex justify-center p-2 text-green-600 rounded-full cursor-pointer  hover:text-green-700">
                        <IoSendSharp className='text-2xl'></IoSendSharp>
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddComment;