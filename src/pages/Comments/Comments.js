import React from 'react';

const Comments = ({ feed }) => {
    const { comment, username } = feed;
    return (
        <div className="container flex flex-col w-full md:w-9/12 p-6 divide-y rounded-md divide-gray-700 text-gray-700">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src="" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <span className="text-xs text-gray-500">{comment}</span>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
                <p>{username}</p>
            </div>
        </div>
    );
};

export default Comments;