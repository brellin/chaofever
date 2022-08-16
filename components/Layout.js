import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';

import Head from 'next/head';
import header from '../images/banner.jpg';

export default function Layout({ children }) {
  return <>
    <Head>
      <title>Chao Fever</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="description" content="The Chao information hub with a feel like a blast from the past" />
      <meta name="keywords" content="Sonic, Chao, Chaos, Sega, Sonic Adventure, Sonic Adventure 2, Sonic Advance, Dreamcast, Gamecube, Tikal, Mooncow, Chaos Chao, Evolution, Evolutions Hero, Dark, Egg" />
    </Head>
    <header>
      <Image src={ header } alt="Compilation of Sonic characters" layout='responsive' priority />
    </header>

    <nav>
      <h1>Navigation</h1>
      <h1 className="mid-to-light">Site Stuff</h1>
      <NavLink href='/' className='light'>Home</NavLink>
      <NavLink href='/contact' className='light'>Contact</NavLink>
      <h1 className="light-to-mid">Tips & Tricks</h1>
      <NavLink href='/tips/grades' className='mid'>Grades</NavLink>
      <NavLink href='/tips/gardens' className='mid'>Gardens</NavLink>
      <NavLink href='/tips/breeding' className='mid'>Breeding</NavLink>
      <NavLink href='/tips/expressions' className='mid'>Expressions</NavLink>
      <NavLink href='/tips/small-animals' className='mid'>Small Animals</NavLink>
      <NavLink href='/tips/chao-items' className='mid'>Chao Items</NavLink>
      <NavLink href='/tips/never-dos' className='mid'>Never-Dos</NavLink>
      <NavLink href='/tips/kindergarten' className='mid'>Kindergarten</NavLink>
      <NavLink href='/tips/competitions' className='mid'>Competitions</NavLink>
      <NavLink href='/tips/evolution-and-death' className='mid'>Evolution/Death</NavLink>
      <NavLink href='/tips/tiny-chao-garden' className='mid'>Tiny Chao Garden</NavLink>
      <NavLink href='/tips/tricks' className='mid'>Tricks</NavLink>
      <h1 className="mid-to-light">Hero Chao</h1>
      <NavLink href='/hero/first' className='light'>1<sup>st</sup> Evolution</NavLink>
      <NavLink href='/hero/second' className='light'>2<sup>nd</sup> Evolution</NavLink>
      <NavLink href='/hero/chaos' className='light'>Chaos Evolution</NavLink>
      <h1 className="light-to-mid">Neutral Chao</h1>
      <NavLink href='/neutral/first' className='mid'>1<sup>st</sup> Evolution</NavLink>
      <NavLink href='/neutral/second' className='mid'>2<sup>nd</sup> Evolution</NavLink>
      <NavLink href='/neutral/chaos' className='mid'>Chaos Evolution</NavLink>
      <h1 className="mid-to-dark">Dark Chao</h1>
      <NavLink href='/dark/first' className='dark'>1<sup>st</sup> Evolution</NavLink>
      <NavLink href='/dark/second' className='dark'>2<sup>nd</sup> Evolution</NavLink>
      <NavLink href='/dark/chaos' className='dark'>Chaos Evolution</NavLink>
    </nav>

    <main>
      <h1>{ children.type.name.match(/[A-Z][a-z]+/g).join(' ') }</h1>
      { children }
    </main>

    <footer>©2007-2020 <a href="https://willumstead.com" target="_blank" rel="noopener noreferrer">Will Umstead</a></footer>
  </>;
}
