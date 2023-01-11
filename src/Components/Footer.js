import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <h3>Footer</h3>
        <form>
            <input type="email" name="email" />
            <button type="submit"> Subscribe</button> 
        </form>
        <section className='info-section'>
            <div className='about'>
                <Link></Link>

            </div>
        </section>
    </div>
  )
}

export default Footer