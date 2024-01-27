import React from 'react'

const Footer = () => {
    const date = new Date();
    return (
        <footer>
            <p className='attribution'>
                By <a href='https://github.com/AshongAbdallah06' target='_blank'>Ashong Abdallah</a> &copy; {date.getFullYear()}
            </p>
        </footer>
    )
}

export default Footer;