import React from 'react';

const EditPostContentModal = ({ editPost, setEditPost }) => {

    return (
        <div>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
                <form className="modal-box bg-gray-200 relative">
                    <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Edit your post</h3>
                    <div className='mt-4 grid grid-cols-1 gap-2 place-items-center'>
                        <div className='form-control w-full max-w-xs'>
                            <textarea rows='4' type="text" placeholder="phone" name='phone' required className='text-gray-800 rounded-md py-1 px-2 border border-gray-500' />
                        </div>
                        <button type='submit' className='bg-green-800 text-white p-2 w-full max-w-xs rounded-md' >Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditPostContentModal;