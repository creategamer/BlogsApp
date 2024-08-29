// import React from 'react'

// function Logo({ width = '100px' }) {
//     return (
//         <div>
//             CustomeBlogs
//         </div>
//     )
// }

// export default Logo


import React from 'react';

function Logo({ width = '100px' }) {
    return (
        <div
            className="flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-full shadow-lg"
            style={{ width: width }}
        >
            <span className="text-white text-2xl font-bold" style={{ fontFamily: "'Pacifico', cursive" }}>
                CustomBlogs
            </span>
        </div>
    );
}

export default Logo;
