import './Shop.css'
import shop from '../../assets/images/shop.jpg'
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Cards from '../../components/cards/Cards';
import { faFish, faFishFins, faScrewdriver, faWrench } from '@fortawesome/free-solid-svg-icons'

export default function Shop() {

  const prodsData = [
    {
      faicon: faFish,
      title: 'Rods & Reels',
      des: 'We carefully select quality used fishing tackle from trusted sources nationwide.'
    },
    {
      faicon: faFishFins,
      title: 'Hooks',
      des: 'Our experts meticulously clean, repair, and refurbish each piece to like-new condition'
    },
    {
      faicon: faWrench,
      title: 'Swivels',
      des: 'You get premium gear at a fraction of the cost, backed by our quality guarantee.'
    },
    {
      faicon: faScrewdriver,
      title: 'Swivels',
      des: 'You get premium gear at a fraction of the cost, backed by our quality guarantee.'
    },
  ]

  return (
    <>
    <Hero
      image={shop}
      title={"Reel Revival Shop"}
    />
    <main className='container'>
      <section className='products'>
        <header>
          <h2>Products</h2>
        </header>

        <div className='cards-g'>
          {prodsData.map((value, index) => (
          <Cards
            key={index}
            title={value.title}
            faicon={value.faicon}
            des={value.des}
          />
        ))}

        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}