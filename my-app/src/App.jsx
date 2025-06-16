import { useState } from 'react'
import reactLogo from './assets/react.svg'


import Logo from './assets/Logo.png'
import bedroom from './assets/bedroom.jpg'

import categImg1 from './assets/categImg1.png'
import categImg2 from './assets/categImg2.png'
import categImg3 from './assets/categImg3.png'
import categImg4 from './assets/categImg4.png'
import categImg5 from './assets/categImg5.png'
import categImg6 from './assets/categImg6.png'

import top1 from './assets/top1.png'
import top2 from './assets/top2.png'
import top3 from './assets/top3.png'
import top4 from './assets/top4.png'
import top5 from './assets/top5.png'
import top6 from './assets/top6.png'
import top7 from './assets/top7.png'
import top8 from './assets/top8.png'

import bgUnique from './assets/bgUnique.png'

import icon from './assets/icon.png'
import icon1 from './assets/icon(1).png'
import icon2 from './assets/icon(2).png'

import follow1 from './assets/follow1.png'
import follow2 from './assets/follow2.png'
import follow3 from './assets/follow3.png'
import follow4 from './assets/follow4.png'
import follow5 from './assets/follow5.png'
import follow6 from './assets/follow6.png'

import './App.css'
import Category from './components/category'
import Top from './components/top'
import Unique from './components/unique'
import Follow from './components/follow'

function App() {

  return (
    <>
      <header className='flex flex-col gap-3'>
        <nav className='flex items-center justify-between border-b-1 pb-3'>
          <ul className='lg:flex items-center gap-4 hidden'>
          <li>+222-1800-2628</li>
          <li>blueskytechcompany@gmail.com</li>
          </ul>
          <h4 className='hidden lg:block'>Sign up for 10% off your first order: <span className='font-semibold underline'>Sign Up</span></h4>
          <ul className='flex items-center gap-4'>
            <li>Our Stores</li>
            <div className='flex items-center gap-2'>
              <li>English</li>
              <i class="fa-solid fa-chevron-down text-[12px]"></i>
            </div>
            <div className='flex items-center gap-2'>
              <li>United States (USD $)</li>
              <i class="fa-solid fa-chevron-down text-[12px]"></i>
            </div>
          </ul>
        </nav>
        <nav className='flex items-center justify-between font-semibold'>
          <img src={Logo} alt="" />
          <ul className='lg:flex hidden items-center gap-4'>
            <div className='flex items-center gap-2'>
              <li>Home</li>
              <i class="fa-solid fa-chevron-down text-[12px]"></i>
            </div>
            <div className='flex items-center gap-2'>
              <li>Shop</li>
              <i class="fa-solid fa-chevron-down text-[12px]"></i>
            </div>
            <div className='flex items-center gap-2'>
              <li>Product</li>
              <i class="fa-solid fa-chevron-down text-[12px]"></i>
            </div>
            <div className='flex items-center gap-2'>
              <li>Page</li>
              <i class="fa-solid fa-chevron-down text-[12px]"></i>
            </div>
            <div className='flex items-center gap-2'>
              <li>Blog</li>
              <i class="fa-solid fa-chevron-down text-[12px]"></i>
            </div>
          </ul>
          <ul className='flex items-center gap-2'>
            <i className='fa-solid fa-magnifying-glass'></i>
            <i className='fa-solid fa-user'></i>
            <i className='fa-solid fa-clock'></i>
            <i className='fa-solid fa-heart'></i>
            <i className='fa-solid fa-cart-shopping'></i>
          </ul>
        </nav>
      </header>

      <section style={{backgroundImage:`url(${bedroom})`}} className='overflow-scroll bg-no-repeat bg-cover rounded-2xl bg-center w-full h-[600px] my-[50px] text-white p-5 flex flex-col lg:flex-row justify-between
      items-center gap-5 relative'>
        <i class='fa-solid fa-chevron-left py-4 px-5 rounded-full bg-[#EBEBEB] text-black hidden lg:block'></i>
        <article className='text-white p-5 flex flex-col items-center justify-center gap-10 lg:gap-5'>
        <p>Beautiful & Elegant</p>
        <h1 className='text-[55px]'>Premium Bedroom</h1>
        <p>Discount 50% On Products & Free Shipping.</p>
        <button className='py-[10px] px-8 rounded-[20px] bg-white text-black'>Shop Now</button>
        </article>
        <div className='lg:flex hidden gap-3 absolute bottom-5 left-[47%]'>
          <p className='p-2 rounded-full bg-[#FFFFFF33]'></p>
          <p className='p-2 rounded-full bg-white'></p>
          <p className='p-2 rounded-full bg-[#FFFFFF33]'></p>
        </div>
        <div className='flex gap-10'>
        <i class="fa-solid fa-chevron-left bg-[#EBEBEB] lg:hidden py-4 px-5 text-black rounded-full"></i>
        <i class="fa-solid fa-chevron-right bg-black py-4 px-5 text-white rounded-full"></i>
        </div>
      </section>

      <section className='flex flex-col items-center gap-8'>
        <article className='flex flex-col gap-1 items-center text-center'>
        <h2 className='text-3xl font-semibold'>Top Categories</h2>
        <h4>Our products are designed for everyone, environmentally friendly.</h4>
        </article>
        <article className='grid lg:grid-cols-6 grid-cols-2 gap-10'>
          <Category img={categImg1} text={'Living Room'}/>
          <Category img={categImg2} text={'Special Bedroom'}/>
          <Category img={categImg3} text={'Dining & Kitchen'}/>
          <Category img={categImg4} text={'Home Accessories'}/>
          <Category img={categImg5} text={'Outdoor'}/>
          <Category img={categImg6} text={'Lighting & Decor'}/>
        </article>
      </section>

      <main className='my-20 flex flex-col gap-10 items-center'>
        <article className='flex flex-col items-center text-center gap-1'>
          <h2 className='text-3xl font-semibold'>Top Trending</h2>
          <h4>Our products are designed for everyone, environmentally friendly.</h4>
        </article>
        
        <section className='grid lg:grid-cols-4 grid-cols-2 gap-5'>
          <Top img={top2} text={'Form Chair Brass Base'} price={'$569.00'}/>
          <Top img={top1} text={'Vase Echasse Large'} price={'$569.00'}/>
          <Top img={top3} text={'Vase Echasse Large'} price={'$569.00'}/>
          <Top img={top4} text={'Bottle Grinder Of Pepper'} price={'$569.00'}/>
          <Top img={top5} text={'Form Bar Stool Oak Base'} price={'$569.00'}/>
          <Top img={top6} text={'Table Lamp 15x29cm'} price={'$569.00'}/>
          <Top img={top7} text={'Carrie Table Lamp'} price={'$569.00'}/>
          <Top img={top8} text={'Form Armchair Black'} price={'$569.00'}/>
        </section>

        <button className='py-3 px-10 border-[#DEDEDE] border-2 font-semibold rounded-full'>Load More</button>
      </main>

      <section style={{backgroundImage:`url(${bgUnique})`}} className='bg-no-repeat bg-cover bg-center h-[520px] relative p-5 lg:p-0'>
        <section className='flex flex-col lg:gap-10 gap-5 items-center text-center bg-white lg:max-w-[45%] rounded-lg lg:p-12 p-5 absolute lg:right-[50px] right-5 top-5  lg:top-[50px]'>
          <article className='flex flex-col gap-3 items-center text-center'>
          <h4>LIMITED EDITION</h4>
          <h2 className='text-3xl font-semibold'>Unique Style</h2>
          <p className='lg:hidden'>The watch is carefully ...</p>
          <p className='hidden lg:block'>The watch is carefully designed with quality materials, such as the domed sapphire crystal, and the meticulous level of detail - from the dial to the delicate gold hour markers.</p>
          </article>
          <button className='py-3 px-10 bg-black text-white rounded-full'>Discover Now</button>
        </section>
      </section>

      <section className='flex items-start justify-around gap-5 text-center flex-wrap lg:flex-nowrap my-20'>
        <Unique img={icon} h2={'Free Shipping'} h4={"Get complimentary ground shipping on every order.Don't love it? Send it back, on us."}/>
        <Unique img={icon1} h2={'Free Returns'} h4={"Free returns within 10 days, please make sure the items are in undamaged condition."}/>
        <Unique img={icon2} h2={'Support Online'} h4={"We support customers 24/7, send questions we will solve for you immediately."}/>
      </section>

      <hr className='border-[#EBEBEB]' />

      <main className='my-20 flex flex-col items-center gap-10'>
        <article className='flex flex-col items-center gap-3'>
          <h2 className='text-3xl font-semibold'>Follow Us</h2>
          <p>Inspire and let yourself be inspired, from one unique fashion to another.</p>
        </article>
        
        <section className='grid lg:grid-cols-6 grid-cols-2 gap-5'>
          <Follow img={follow1}/>
          <Follow img={follow2}/>
          <Follow img={follow3}/>
          <Follow img={follow4}/>
          <Follow img={follow5}/>
          <Follow img={follow6}/>
        </section>
      </main>

      <footer className='mt-20 p-5 bg-[#F5F5F5] flex lg:gap-5 gap-10  justify-between flex-wrap lg:flex-nowrap'>
        <article className='flex flex-col items-start gap-5 lg:max-w-[30%]'>
        <img src={Logo} alt="" />
        <h4 className='leading-7'>268 St, South New York/NY 98944, United States +222-1800-2628 blueskytechcompany@gmail.com</h4>
        <div className='flex gap-3 brands'>
          <i className='fa-brands fa-twitter w-[33px] h-[33px] flex items-center justify-center text-[#555555] rounded-full border'></i>
          <i className='fa-brands fa-facebook-f w-[33px] h-[33px] flex items-center justify-center text-[#555555] rounded-full border'></i>
          <i className='fa-brands fa-instagram w-[33px] h-[33px] flex items-center justify-center text-[#555555] rounded-full border'></i>
          <i className='fa-brands fa-youtube w-[33px] h-[33px] flex items-center justify-center text-[#555555] rounded-full border'></i>
          <i className='fa-brands fa-tiktok w-[33px] h-[33px] flex items-center justify-center text-[#555555] rounded-full border'></i>
          <i className='fa-brands fa-pinterest-p w-[33px] h-[33px] flex items-center justify-center text-[#555555] rounded-full border'></i>
          <i className='fa-brands fa-snapchat w-[33px] h-[33px] flex items-center justify-center text-[#555555] rounded-full border'></i>
        </div>
        </article>

        <article className='lg:flex flex-col gap-1 hidden'>
          <h3 className='pb-1.5 font-semibold text-lg'>Customer Service</h3>
          <h4>Privacy Policy</h4>
          <h4>Refund Policy</h4>
          <h4>Shipping & Return</h4>
          <h4>Term & Conditions</h4>
          <h4>Advanced Search</h4>
          <h4>Store Locations</h4>
        </article>

        <article className='lg:flex flex-col gap-1 hidden'>
          <h3 className='pb-1.5 font-semibold text-lg'>Shop By Categories</h3>
          <h4>Smartphone</h4>
          <h4>Headphones</h4>
          <h4>Computer & Desktop</h4>
          <h4>Cameras & Photos</h4>
          <h4>Laptop & Ipad</h4>
        </article>
        
        <article className='flex flex-col lg:gap-5 gap-3 lg:max-w-[30%]'>
          <h3 className='pb-1.5 font-semibold text-lg'>Sign Up to Newsletter</h3>
          <h4 className='leading-7'>Enter your email address to get $10 off your first order and free shipping. Updates information on Sales and Offers.</h4>
          <div className='flex flex-col lg:flex-row lg:items-center gap-3'>
            <input type="email" placeholder='Enter your email'  className='placeholder-[#999999] shadow-sm p-[14px] lg:w-[320px] outline-[#999999] rounded-full' />
            <button className='py-[14px] px-10 rounded-full bg-[#111111] text-white'>SUBSCRIBE</button>
          </div>
        </article>

      </footer>

    </>
  )
}

export default App
