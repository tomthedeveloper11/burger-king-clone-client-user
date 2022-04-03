import { HomeCard } from '../components/HomeCard'
import { CallToAction } from '../components/CallToAction'

export default function HomePage({}) {
  return (
    <div
      id='home-div'
      className='d-flex flex-wrap gap-3 justify-content-center mt-5'
    >
      <HomeCard
        imgSrc='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/961d05a9f32fa1d6551066edc13bd6e9b67f7d2d-2000x1000.png?w=1280&q=40&fit=max&auto=format'
        title='Get rewarded like Royalty'
        description='Join Royal Perks to earn Crowns, redeem for BK® food and upsize a side or drink for free daily. See Terms.'
        buttonText='Join Now'
      />

      <HomeCard
        imgSrc='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/99b3ffc140339c0966fd59a532ae279b6f1bab58-2000x1000.jpg?w=1280&q=40&fit=max&auto=format'
        title='Get rewarded like Royalty'
        description='Join Royal Perks to earn Crowns, redeem for BK® food and upsize a side or drink for free daily. See Terms.'
        buttonText='Sign Up To Order'
      />

      <HomeCard
        imgSrc='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/28fdffe08898fa7833268198d3885710ba8c8ebc-2000x1000.jpg?w=1077&q=40&fit=max&auto=format'
        title='$1 Delivery Fee'
        description='When you place a $5+ order on the BK® App. Additional fees and higher prices may apply. See Terms.'
        buttonText='Order Delivery'
      />

      <HomeCard
        imgSrc='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/98d39466d60084a6327b5f4aa636856e801e6472-2000x1000.jpg?w=1077&q=40&fit=max&auto=format'
        title="Join the King's court"
        description='See available jobs at BK®. See Terms.'
        buttonText='See Positions'
      />
      <CallToAction />
    </div>
  )
}
