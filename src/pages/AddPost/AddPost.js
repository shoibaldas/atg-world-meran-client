import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcAddImage } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const AddPost = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    // console.log(user._id)
    const {
        register,
        handleSubmit,
        resetField,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            userId: user?._id,
            postContent: "",
            username: user?.username,
            email: user?.email,
        },
    });

    const onSubmit = (data) => {
        console.log(data)
        // const date = new Date().toLocaleDateString();
        // const time = new Date().toLocaleTimeString();
        // const newDateTime = `${date} ${time}`;

        fetch("https://atg-world-mern-server.vercel.app/api/v1/addPost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                if (data.success) {
                    // localStorage.setItem("user", JSON.stringify(data.results));
                    toast.success("Your post has been published Successfully!");
                    navigate("/");
                }
                else {
                    toast.error("Error!");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                navigate("/");
            });
        // reset Field
        resetField("postContent");
    }
    return (
        <div className='max-w-screen-sm mx-auto my-2'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-gray-400 rounded-t-lg">
                        <textarea rows="4" {...register("postContent", { required: "Content is required" })} className="w-full px-2 py-1 text-sm text-gray-900 bg-gray-200 border-0" placeholder="What's on your mind..." required></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <div className="flex pl-0 space-x-1 sm:pl-2">
                            <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <FcAddImage className='text-2xl'></FcAddImage>
                            </button>
                        </div>
                        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800">
                            Publish Post
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddPost;