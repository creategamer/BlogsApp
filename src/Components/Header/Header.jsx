// import React from 'react'
// import { Container, Logo, LogoutBtn } from '../index.js'
// import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// function Header() {
//     const authStatus = useSelector((state) => state.auth.status)
//     const navigate = useNavigate()

//     const navItems = [
//         {
//             name: "Home",
//             slug: "/",
//             active: true
//         },
//         {
//             name: "Login",
//             slug: "/login",
//             active: !authStatus,
//         },
//         {
//             name: "Signup",
//             slug: "/signup",
//             active: !authStatus,
//         },
//         {
//             name: "All Posts",
//             slug: "/all-posts",
//             active: authStatus,
//         },
//         {
//             name: "Add Posts",
//             slug: "/add-posts",
//             active: authStatus,
//         },
//     ]

//     return (
//         <header className='py-3 shadow bg-gray-500'>
//             <Container>
//                 <nav className='flex'>
//                     <div className='mr-4'>
//                         <Link to="/">
//                             <Logo width='70px' />
//                         </Link>
//                     </div>
//                     <ul className='flex ml-auto'>
//                         {
//                             navItems.map((item) =>
//                                 item.active ? (
//                                     <li key={item.name}>
//                                         <button
//                                             onClick={() => navigate(item.slug)}
//                                             className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                                         >
//                                             {item.name}
//                                         </button>
//                                     </li>
//                                 ) : null
//                             )
//                         }
//                         {authStatus && (
//                             <li>
//                                 <LogoutBtn />
//                             </li>
//                         )}
//                     </ul>
//                 </nav>
//             </Container>
//         </header>
//     )
// }

// export default Header


import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index.js'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
        { name: "Home", slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "Add Posts", slug: "/add-posts", active: authStatus },
    ]

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className='py-3 shadow bg-gray-900 text-white'>
            <Container>
                <nav className='flex justify-between items-center'>
                    <div className='ml-5'>
                        <Link to="/">
                            <Logo className='' width='70px' />
                        </Link>
                    </div>

                    {/* Hamburger Icon */}
                    <div className='md:hidden'>
                        <button onClick={toggleMobileMenu} >
                            <svg
                                className='w-8 h-8 text-white'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h16'
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <ul className={`md:flex ml-6 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name} className='my-2 md:my-0'>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li className='my-2 md:my-0'>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
