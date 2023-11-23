import React from 'react'

function Header(props) {
    return (
        <div className='navbar navbar-dark bg-dark text-light w-100 text-center'>
            <div className='container'>
                <div className='row m-auto'>
                    <i className='fa fa-hand-pointer-o fa-2x text-white mr-2' />
                    <div className='text-light h2' data-testid="title">{props.title}</div>
                </div>
            </div>
        </div>
    )
}

export default Header