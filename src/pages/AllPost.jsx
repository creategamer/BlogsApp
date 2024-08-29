// import React, { useState, useEffect } from 'react'
// import appwriteService from '../appwrite/config'
// import { PostCard, Container } from '../Components'

// function AllPost() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         appwriteService.getPost([]).then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])

//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>

//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default AllPost


import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { PostCard, Container } from '../Components'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPost([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
