import Link from 'next/link';
import Image from 'next/image';

import header from '../images/banner.jpg';

export default function Layout({ children }) {
  return <>
    <header>
      <Image src={ header } alt="Compilation of Sonic characters" layout='responsive' priority />
    </header>

    <nav>
      <h1>Navigation</h1>
      <h1 className="mid-to-light">Site Stuff</h1>
      <Link href='/'><a className='light'>Home</a></Link>
      <Link href='/contact'><a className='light'>Contact</a></Link>
      <h1 className="light-to-mid">Tips & Tricks</h1>
      <Link href='/tips/grades'><a className='mid'>Grades</a></Link>
      <Link href='/tips/gardens'><a className='mid'>Gardens</a></Link>
      <Link href='/tips/breeding'><a className='mid'>Breeding</a></Link>
      <Link href='/tips/expressions'><a className='mid'>Expressions</a></Link>
      <Link href='/tips/small-animals'><a className='mid'>Small Animals</a></Link>
      <Link href='/tips/chao-items'><a className='mid'>Chao Items</a></Link>
      <Link href='/tips/never-dos'><a className='mid'>Never-Dos</a></Link>
      <Link href='/tips/kindergarten'><a className='mid'>Kindergarten</a></Link>
      <Link href='/tips/competitions'><a className='mid'>Competitions</a></Link>
      <Link href='/tips/evolution-and-death'><a className='mid'>Evolution/Death</a></Link>
      <Link href='/tips/tiny-chao-garden'><a className='mid'>Tiny Chao Garden</a></Link>
      <Link href='/tips/tricks'><a className='mid'>Tricks</a></Link>
      <h1 className="mid-to-light">Hero Chao</h1>
      <Link href='/hero/first'><a className='light'>1<sup>st</sup> Evolution</a></Link>
      <Link href='/hero/second'><a className='light'>2<sup>nd</sup> Evolution</a></Link>
      <Link href='/hero/chaos'><a className='light'>Chaos Evolution</a></Link>
      <h1 className="light-to-mid">Neutral Chao</h1>
      <Link href='/neutral/first'><a className='mid'>1<sup>st</sup> Evolution</a></Link>
      <Link href='/neutral/second'><a className='mid'>2<sup>nd</sup> Evolution</a></Link>
      <Link href='/neutral/chaos'><a className='mid'>Chaos Evolution</a></Link>
      <h1 className="mid-to-dark">Dark Chao</h1>
      <Link href='/dark/first'><a className='dark'>1<sup>st</sup> Evolution</a></Link>
      <Link href='/dark/second'><a className='dark'>2<sup>nd</sup> Evolution</a></Link>
      <Link href='/dark/chaos'><a className='dark'>Chaos Evolution</a></Link>
    </nav>

    <main>
      <h1>Chao Fever</h1>
      { children }
    </main>

    <footer>© <a href="http://willumstead.com" target="_blank" rel="noopener noreferrer">Will Umstead</a></footer>
  </>;
}
