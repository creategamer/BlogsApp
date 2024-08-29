import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth.js'
import logout from '../../store/authSlice.js'
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logoutHandler = async () => {
        try {

            await authService.logout();
            window.location.reload();
            dispatch(logout());
        } catch (error) {
            console.error("Logout error:", error);
            dispatch(authError(error.message));
        }
    };

    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'
            onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn
