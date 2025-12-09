import './About.css'
import about from '../../assets/images/about.jpg'
import staff from '../../assets/images/staff.jpg'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import { faCaretRight, faHandshake, faStar, faUsers } from '@fortawesome/free-solid-svg-icons'
import Cards from '../../components/cards/Cards'

export default function About() {

  const valuesData = [
    {
      faicon: faHandshake,
      title: 'Trust',
      des: 'We build trust with each customer'
    },
    {
      faicon: faStar,
      title: 'Excellence',
      des: 'We build products that last'
    },
    {
      faicon: faUsers,
      title: 'Community',
      des: 'We build trust with each customer'
    },
    {
      faicon: faCaretRight,
      title: 'Innovation',
      des: 'We costantly innovate each time'
    }
  ]

  return (
    <>
    <Hero
      title={'About Us'}
      image={about}
    />

    <main className='container'>
      <section className='wwa'>
        <h1>Who we are</h1>
        <p>Reel Revival was founded in 2025 after looking at the fishing community in FL. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet assumenda sint quibusdam modi? Accusamus, accusantium? Quos minus a sed incidunt, obcaecati delectus necessitatibus quae doloribus. Animi praesentium ab dolore tenetur!</p>
      </section>

      <section className='staff'>
        <header>
          <h1>Our staff</h1>
        </header>
        <div className='ctnt'>
          <div className='imgs'>
            <img src={staff} alt="herman"/>
          </div>
          <div className='text'>
            <h2>Herman Prescott</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, consequatur. Consequatur corrupti natus ipsum quia provident aliquam amet? Recusandae, odit. Perspiciatis tempora perferendis tempore blanditiis officiis atque cupiditate nobis explicabo!</p>
          </div>
        </div>
      </section>

      <section className='values'>
        <header>
          <h1>Our values</h1>
        </header>
        <div className='cards-g'>
          {valuesData.map((value, index) => (
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
