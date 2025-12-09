import './Home.css'
import home from '../../assets/images/home.jpg'
import Hero from '../../components/hero/Hero'
import tacke from '../../assets/images/tackle.jpg'
import Footer from "../../components/footer/Footer";
import Cards from '../../components/cards/Cards';
import { faBagShopping, faMagnifyingGlass, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  const worksData = [
      {
        faicon: faMagnifyingGlass,
        title: 'Trust',
        des: 'We carefully select quality used fishing tackle from trusted sources nationwide.'
      },
      {
        faicon: faScrewdriverWrench,
        title: 'Restore',
        des: 'Our experts meticulously clean, repair, and refurbish each piece to like-new condition'
      },
      {
        faicon: faBagShopping,
        title: 'Repurpose',
        des: 'You get premium gear at a fraction of the cost, backed by our quality guarantee.'
      },
      
    ]

  return (
    <>
    <Hero
      image={home}
      enableCTA={true}
      titleCTA={'Premiun Refurbished Fishing Tackle'}
      buttonCTA={'Shop Now'}
    />
    <main className='container'>
      <section className='works'>
        <header>
          <h1>How it works</h1>
          <p>Our proven three-step process ensures you get the best quality refurbished tackle</p>
        </header>
        <div className='cards-g'>
        {worksData.map((value, index) => (
          <Cards
            key={index}
            title={value.title}
            faicon={value.faicon}
            des={value.des}
          />
        ))}
        </div>
      </section>

      <section className='gearing'>
        <header>
          <h1>Quality gear, endless choices</h1>
          <p>From vintage classics to modern technology, our rotating inventory offers something for every angler. All expertly restored and ready for action</p>
        </header>
        <div className='ctnt'>
          <div className='text'>
            <p>From vintage classics to modern technology, our rotating inventory offers something for every angler. All expertly restored and ready for action.</p>
          </div>
          <div className='imgs2'>
            <img src={tacke} alt="tackle" />
          </div>
        </div>
      </section>

      <section className='cta-s'>
        <h1>Ready for your next purchase?</h1>
        <div className='btn-align'>
          <button className='btn'>View more</button>
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}