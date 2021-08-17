import CategoryCard from '../components/categoryCard';




export default function Category() {
    return (
        <div className="category_container">

        <div className="category">
            <CategoryCard img1='tws 1' img2='tws 2' title='True Wireless Earbuds'/>
            <CategoryCard img1='wired-earphone 1' img2='wired-earphone 2' title='Earphones'/>
            <CategoryCard img1='headphone 1' img2='headphone 2' title= 'Headphone'/>
            <CategoryCard img1='accessories 1' img2='accessories 2' title='Accessories'/>
            
        </div>
        </div>
    )
}

/*
<CategoryCard type='tws'/>
            <CategoryCard type='headphone'/>*/