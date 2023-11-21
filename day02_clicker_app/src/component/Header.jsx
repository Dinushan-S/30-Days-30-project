import React from 'react'

function Header(props) {
    return (
        <div className='navbar navbar-dark bg-dark'>
            <div className='container'>
                <div className='row m-auto'>
                    <i className='fa fa-hand-pointer-o fa-2x text-white mr-2' />
                    <div className='text-white h2'>{props.title}</div>
                </div>
            </div>
        </div>
    )
}

export default Header