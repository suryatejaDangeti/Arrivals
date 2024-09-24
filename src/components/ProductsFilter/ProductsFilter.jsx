import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import productData from '../../db/data'
import './productsFilter.css'

const ProductsFilter = () => {
    const [showSubCategory, setShowSubCategory] = useState(false)
    const RefineByCategory = [
            {
                name: 'Gender',
                categories: ['Boys',
                    'Girls',
                    'Infants',
                    'Men',
                    'Women']
            },
            {
                name: 'Category',
                categories: []
            },
            {
                name: 'Price'
            },
            {
                name: 'Brands'
            },
            {
                name: 'Occasion'
            },
            {
                name: 'Discount'
            },
            {
                name: 'Colors'
            },
            {
                name: 'Size & Fit'
            },
            {
                name: 'Rating'
            }
    ]
    console.log(productData, 'productData');
    const plus = <FaPlus />

    const showSpecificCategory = (category) => {
        console.log(category)
        return category?.categories?.map((type) => {
            console.log(type, "type")
            return (
                <div className="">
                    <input type='checkbox' value={type} name={type} />
                    <label>{type}</label>
                </div>
            )
        })

     
    }

    const showFilterCategories = () => {
        return RefineByCategory.map((category) => {
            console.log(category, "category")
            return (
                <div 
                    onClick={(() => {
                        setShowSubCategory(!showSubCategory)
                    })}
                >
                    <div>
                        <div className="products-category-container">
                            <p className="show-hide-button">{plus}</p>
                            <p className='products-filter-category'> {category.name}</p>
                        </div>
                        <div  className="checkbox-container">
                            {showSubCategory && showSpecificCategory(category)}
                        </div>
                    </div>
                </div>
            )
        })
    }
    
    return (
        <div>
            <header className="products-filter-heading">Refine By</header>
            {showFilterCategories()}
            <p className='products-filter-heading'>More Filters</p>
            <p>Style Type</p>
            <p>Pattern</p>
            <p>Upper Material</p>
            <p>Toe Shape</p>
            <p>Ankle Style</p>
            <p>Character</p>
            <p>Heel</p>
            <p>Traditional Weave</p>
        </div>
    )
}

export default ProductsFilter;

// const ProductsFilter = () => {
//     return (
//         <div>
//         <h2 className="sidebar-title">Category</h2>
  
//         <div>
//           <label className="sidebar-label-container">
//             <input   type="radio" value="" name="test" />
//             <span className="checkmark"></span>All
//           </label>
//           <input
//             // handleChange={handleChange}
//             value="sneakers"
//             title="Sneakers"
//             name="test"
//           />
//           <input
//             // handleChange={handleChange}
//             value="flats"
//             title="Flats"
//             name="test"
//           />
//           <input
//             // handleChange={handleChange}
//             value="sandals"
//             title="Sandals"
//             name="test"
//           />
//           <input
//             // handleChange={handleChange}
//             value="heels"
//             title="Heels"
//             name="test"
//           />
//         </div>
//       </div>
//     )
// }