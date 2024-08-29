// import React from 'react'
// import appwriteService from "../appwrite/config"
// import { Link } from 'react-router-dom';

// function PostCard({
//     $id, title, featuredImage
// }) {

//     return (
//         <Link to={`/post/${$id}`}>
//             <div className='w-full bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out'>
//                 <div className='w-full mb-4'>
//                     <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
//                         className='w-full h-48 object-cover'
//                     />
//                 </div>
//                 <div className='p-4'>
//                     <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
//                 </div>
//             </div>
//         </Link>
//     )
// }

// export default PostCard


import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom';

function PostCard({
    $id, title, featuredImage
}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out'>
                <div className='w-full mb-4'>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                        className='w-full h-48 object-cover'
                    />
                </div>
                <div className='p-4'>
                    <h2 className='text-lg font-bold text-gray-800'>{title}</h2>
                </div>
            </div>
        </Link>
    )
}

export default PostCard
