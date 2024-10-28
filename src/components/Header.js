import React from 'react'

function Header() {
  return (
    <div className='ui fixed menu'>
        <div className='ui container center'>
            <a href='/'>
                <h2 className='max-md:pl-4 md:-ml-3 py-6 font-bold text-3xl'>
                    FakeShop
                </h2>
            </a>
        </div>
    </div>
  )
}

export default Header