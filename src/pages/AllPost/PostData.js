import React from 'react';
import AddComment from '../Shared/AddComment/AddComment';
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import img from '../../assets/logo/logo.png';

const PostData = ({ post, setEditPost, setDeletePost }) => {
    const { _id, username, email, postContent } = post;

    return (
        <div>
            <div className='my-2 ml-3 flex justify-between items-center'>
                <div className="flex items-center space-x-2">
                    <img className="w-10 bg-black py-4 rounded-full" src={img} alt="" />
                    <h2 className="text-gray-800 font-bold cursor-pointer">{username}</h2>
                    <p>{email}</p>
                </div>
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className='cursor-pointer'><i className="fa-solid fa-ellipsis"></i></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-200  w-40">
                        <li>
                            <label htmlFor="edit-modal" onClick={() => setEditPost(post)} className=''>Edit</label>
                        </li>
                        <li>
                            <label htmlFor="confirmation-modal" onClick={() => setDeletePost(post)} className=''>Delete</label>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="space-y-1 mb-4">
                <div className="space-y-2">
                    <div className="p-2 border-t border-gray-400">
                        <div className="flex items-center space-x-1">
                            <span className='text-orange-600'>{postContent}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between border-t border-b border-gray-400 px-4 py-2'>
                <div className='flex items-center hover:bg-gray-300 hover:text-blue-600 px-3 py-1 cursor-pointer rounded transition duration-200 ease-in'>
                    <AiOutlineLike className='text-2xl'></AiOutlineLike>
                    <span className='mx-1 text-md font-semibold'>Like</span>
                </div>
                <div className='flex items-center hover:bg-gray-300 px-3 py-1 cursor-pointer rounded transition duration-200 ease-in'>
                    <AiOutlineComment className='text-2xl'></AiOutlineComment>
                    <span className='mx-1 text-md font-semibold'>Comment</span>
                </div>
            </div>
            <AddComment></AddComment>
        </div>
    );
};

export default PostData;