import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div style={{ width: '80%', margin: 'auto', backgroundColor: 'pink', height: '50px', textAlign: 'center' }}>
            <Link style={{ margin: '100px', padding: '10px' }} to='/'>Home</Link>
            <Link style={{ margin: '100px' }} to='/User'>User</Link>
            <Link style={{ margin: '100px' }} to='/Comment'>Comment</Link>
        </div>
    )
}
export default Header