import Link from 'next/link';

export default function Product({data}) {

  //const id = '421546';

  return (
    <div className='card'>
      <Link href={`/shop/product/${data.id}`}>
        <div className="card__content">
          <img className='card__image' src={`/images/${data.sku}-image 01.jpg`}></img>
          <p className='card__title'>{`${data.title.split(' ').slice(0, 4).join(' ')}`}</p>
          <p className='card__price'>{`Rs: ${data.price}`}</p>
        </div>
      </Link>

    </div>
  )
}