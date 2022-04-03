import React from 'react'

import '../App.css'

export function Footer({}) {
  return (
    <footer className='footer-container'>
      <div
        id='footer-links'
        className='d-flex gap-5 text-start justify-content-between'
      >
        <div>
          <h2>BKC INFO</h2>
          <p>About BK</p>
          <p>Trademarks Notice</p>
          <p>Food Quality</p>
          <p>News & Press</p>
          <p>Global Media Contacts</p>
          <p>Investor Relations</p>
          <p>Franchising</p>
          <p>International</p>
          <p>Menu</p>
        </div>
        <div>
          <h2>MY BK</h2>
          <p>BK App</p>
          <p>Gift Cards / Crown Cards</p>
          <p>Reload Card</p>
          <p>Check Card Balance</p>
        </div>
        <div>
          <h2>CAREERS</h2>
          <p>Careers Home</p>
          <p>Opportunities</p>
          <p>Apply</p>
        </div>
        <div>
          <h2>BK CARES</h2>
          <p>Nutrition Explorer</p>
          <p>Download Allergens</p>
          <p>Allergens View in Browser</p>
          <p>Privacy policy</p>
          <p>Do Not Sell My Personal Information</p>
          <p>Sustainability</p>
          <p>BK McLAMORE Foundation</p>
          <p>Diversity</p>
        </div>
      </div>

      <hr />
      <div className='d-flex justify-content-between mt-4'>
        <div>
          <h3>Burger King</h3>
        </div>
        <div className='d-flex gap-3 justify-content-around'>
          <i className='fa-brands fa-instagram fa-2x'></i>
          <i className="fa-brands fa-facebook-square fa-2x"></i>
          <i className="fa-brands fa-youtube fa-2x"></i>
          <i className="fa-brands fa-twitter fa-2x"></i>
        </div>
      </div>

      <p className='text-start my-4' style={{fontSize: '0.8rem', color: '#baa28f'}}>Policies | Term of Service | Accessibility | Contact Us</p>
      <p className='text-start my-3' style={{fontSize: '0.8rem', color: '#baa28f'}}>TM & Copyright 2021 Burger King Corporation. All Rights Reserved.</p>

    </footer>
  )
}
