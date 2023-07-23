import React from 'react'
import Base from '../Base/Base'
import './ProductPage.css'
import ray from './Product-img/frames-rayban.jpg'
import tom from './Product-img/frames-tom-ford.jpg'
import gucci from './Product-img/frames-gucci.jpg'
import tory from './Product-img/frames-Tory-Burch.jpg'
import oakley from './Product-img/frames-Oakley.jpg'
import tiffany from'./Product-img/frames-Tiffany.jpg'
import coach from './Product-img/frames-Coach.jpg'
import mauijam from './Product-img/frames-Maui-Jim.jpg'
import coast from './Product-img/frames-Costa.jpg'
import jones from './Product-img/JNY_Image_Small_72dpi-03-461x262-1.png'
import fila from './Product-img/FILA_Image_Small_72dpi-04-461x262-1.png'
import lucky from './Product-img/LuckyBrand_Image_Small_72dpi-02-461x262-1.png'
import gap from './Product-img/GAP_Image_Small_72dpi-01-461x262-1.png'


const ProductPage = () => {
  return (
    <Base>
    <div className='frame-main-div'>
    <div className='frames'>
   <div className='frames-header-div'>
<h1 className='frames-header'>Designer Frames</h1>
<p className='frame-content'>
With one of the largest selections of designer frames nationwide, Site for Sore Eyes has the perfect frames – just for you.</p>
</div>

    </div>
    <div className='productPage-main-grid'>
      <div className='productPage-sub-grid'>
     <div>
      <img src={ray} alt=""/>
      </div>
      <div>
<img src={tom} alt=""/> 
</div>
<div>
<img src={gucci} alt=""/> 
</div>
<div>
<img src={oakley} alt=""/> 
</div>
<div>
<img src={tory} alt=""/> 
</div>
<div>
<img src={tiffany} alt=""/> 
</div>
<div>
<img src={coach} alt=""/> 
</div>
<div>
<img src={mauijam} alt=""/> 
</div>
<div>
<img src={coast} alt=""/> 
</div>
<div>
<img src={jones} alt=""/> 
</div>
<div>
<img src={fila} alt=""/> 
</div>
<div>
<img src={lucky} alt=""/> 
</div>
<div>
<img src={gap} alt=""/> 
</div>
      </div>
      <div>
  <div className='productPage-sub-grid'>
    <div className='frames-details'>
    <h3 className='frame-head'>Ray•Ban®</h3>
    <p>Ray•Ban® is one of the world’s best-selling brands. Famous for their sun and prescription eyewear, Ray•Ban® boasts some of the most famous styles of sunglasses which include Wayfarer and Aviator. Timeless and classic, Ray•Ban® is still a modern favorite.'</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>TOM FORD®</h3>
 <p> Since its creation in 2005, the TOM FORD® brand has become one of the most highly respected and successful designers today. One asset to this success was the launch in 2006 of the TOM FORD® eyewear collection, featuring a variety of eyeglasses and sunglasses.</p>
  </div>
  <div className='frames-details'>
  <h3 className='frame-head'>Gucci</h3>
<p>The stylish collection of Gucci eyewear shows meticulous detail and is crafted from materials that are of the highest quality. Due to a growing demand, Gucci eyewear has responded with many styles for both men and women.</p>
  </div>
  <div className='frames-details'>
  <h3 className='frame-head'>Oakley®</h3>
  <p>Oakley® has a reputation for always being ahead of the curve with their optic technology and cool styles. The brand that started out by selling motorcycle grips is today a fashion name to be reckoned with, as it features a wide range of eyewear that caters not only to professional sports figures and athletes, but to people all over the world who have a need for high-quality and high performance.</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>Tory Burch</h3>
    <p>
Tory Burch is an American lifestyle brand that embodies the personal style and sensibility of its Chairman, CEO and Designer, Tory Burch. The line features classic frames – reimagined.</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>Tiffany & Co.</h3>
    <p>
Founded in New York City in 1837, Tiffany & Co. has a rich heritage filled with celebrated events, artists and milestones that live on today in legendary style. The eyewear collection of Tiffany & Co., which takes inspiration from the most iconic jewelry collection, celebrates stunning originality and enduring beauty.</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>Coach</h3>
    <p>
Founded in 1941 as a family-run workshop in a Manhattan loft, Coach is today a leading American designer and marketer of fine accessories and apparel that’s ready-to-wear for women and men around the world. The Coach eyewear collection perfectly expresses the effortless “New York style” and the authentic American heritage of the Coach brand.</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>Maui Jim</h3>
    <p>
Maui Jim offers a selection of durable, lightweight polarized sunglasses that allow you to see the world in truly vibrant, glare free color.</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>Costa</h3>
    <p>
After all these years and all these adventures, the mission of Costa Del Mar has never wavered: to create the clearest sunglasses on the planet for life’s great adventures. And the patented technology – found only in Costa lenses and frames – is proof that this brand is succeeding.</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>Jones New York</h3>
    <p>
Strong in heritage, Jones New York Eyewear delivers timeless versatility and modern sophistication that is always classic and polished. The collections offers a stunning mix of exceptional quality and clean sophisticated details that are sure to highlight a your best features with classic silhouettes, rich materials, and minimalistic details.</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>Fila</h3>
    <p>
FILA has been there for iconic moments, accompanying extraordinary individuals in pursuit of true sport – those who courageously challenge limits and defy expectations through a seamless combination of power and grace. The brand has always taken pride in creating designs as bold and breathtaking as its wearers. With a philosophy of innovation and a commitment to performance and sophistication, FILA continues to make a statement with styles that are novel in aesthetic and effective in function.</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>Lucky Brand</h3>
    <p>
Get both incredible function and undeniable style with eyewear from Lucky Brand. Designed with the same approachable, yet self-assured attitude you've come to expect from their apparel, their eyeglasses are must-have accessories. With a wide range of sleek shapes and sizes, choose from classic aviator designs with modern touches like gradient coloring and more for a fresh touch, or go with simple and timeless square shades for a downright Americana look. Lucky Brand is a must-have for both smooth style and ideal function.</p>
  </div>
  <div className='frames-details'>
    <h3 className='frame-head'>GAP</h3>
    <p>
Gap is an authority on modern American style. Founded in San Francisco in 1969, Gap continues to build on its heritage with the launch of their first collection of Gap-branded eyewear, delivering a versatile, high-quality line of sunglasses and optical wear for adults, juniors, and kids. As a champion of individuality, Gap embodies a sense of modern American optimism that celebrates what it means to be your true self today.</p>
  </div>
  </div>
    </div>
    </div>
    </div>
    </Base>

  )
}

export default ProductPage

