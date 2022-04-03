import React from 'react'
export function CallToAction({}) {
  return (
    <div className='d-flex cta-container'>
      <div className='cta-img-container'>
        <img
          className='cta-img'
          src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/57382e9feb53d08237fa988a570efdff1602d6ff-912x1267.png?w=750&q=40&fit=max&auto=format'
        />
      </div>

      <div className='p-5'>
        <h1 className='insaniBurgerFont text-start page-title'>
          Save $$$ With offers on demand
        </h1>

        <div className='d-flex'>
          <img
            className='apple-button'
            src='../assets/apple.png'
            alt='apple download'
          />
          <img
            className='google-button'
            src='../assets/google.png'
            alt='google download'
          />
        </div>
        <p className='text-start'>
          Apple and the Apple logo are trademarks of Apple Inc., registered in
          the U.S. and other countries. App Store is a service mark of Apple
          Inc. Google Play is a trademark of Google Inc. Terms apply.
        </p>
      </div>
    </div>
  )
}
