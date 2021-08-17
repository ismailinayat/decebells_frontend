import Image from 'next/image';

export default function CategoryCard({img1, img2, title}) {
    return (
        <div className="category__card">
            <div className="category__card--image category__card--image-front">
                <Image className='image img1' width={350} height={340} src={`/images/${img1}.jpg`}/>
            </div>
            <div className="category__card--image category__card--image-back">
                <Image className='image img2' width={350} height={340} src={`/images/${img2}.jpg`}/>
            </div>
            
            <div className="category__card--heading">
                <h3>
                    {title}
                </h3>
                <p>
                    Buy Wired In-Ear Earphones And Don't Get Distracted Even In The Loudest Of Environemnts.
                </p>
            </div>

            
            
            
        </div>
    )
}

/*
<div className="category__card--text">
                <h3 className="category__title"></h3>

                <p className="category__detail"></p>
            </div>
                */