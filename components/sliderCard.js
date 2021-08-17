import Link from 'next/link';

export default function SliderCard({data}) {

  //const id = '421546';

  return (
    <div className='slider__card'>
      <Link href={`/shop/product/${data.id}`}>
        <div className="slider__card__content">
          <img className='slider__card__image' src={`/images/${data.sku}-image 01.jpg`}></img>
          <p className='slider__card__title'>{`${data.title.split(' ').slice(0, 4).join(' ')}`}</p>
          <p className='slider__card__price'>{`Rs: ${data.price}`}</p>
        </div>
      </Link>

    </div>
  )
}