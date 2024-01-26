import React from 'react'

const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <p className='attribution'>
                By Ashong Abdallah &copy; {date.getFullYear()}
            </p>
        </footer>
    )
}

export default Footer;