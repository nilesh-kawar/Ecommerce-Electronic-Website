import React, { useState } from 'react'
import ProductCard from "../components/ProductCard/ProductCard";
import { productData } from "../components/Data/ProductData";
import { categoriesData } from "../components/Data/CategoryData";
import Pagination from '../components/Pagination/Pagination';

const Products = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    function handleCategoryClick(category) {
        setSelectedCategory(category);
    }

    const filteredProducts = selectedCategory
        ? productData.filter(item => item.category === selectedCategory)
        : productData

    console.log(filteredProducts);

    const items = productData;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <div className='container mx-auto md:max-w-screen-lg my-11'>
            <div class="flex justify-end mb-6">
                <label for="category-select" class="mr-2">Filter by category:</label>
                <select id="category-select" class="border border-gray-400 rounded px-2 py-1"
                    onChange={(e) => handleCategoryClick(e.target.value)}
                >
                    <option value="">All categories</option>
                    {
                        categoriesData.map(prod => (
                            <option value={prod.name.toLowerCase()} >{prod.name}</option>
                        ))
                    }
                </select>
            </div>

            {/* <!-- Product list --> */}
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {
                    currentItems.map(item => (
                        <ProductCard
                            id={item.id}
                            img1={item.img1}
                            img2={item.img2}
                            isSoldOut={item.isSoldOut}
                            name={item.name}
                            price={item.price}
                            prevPrice={item.prevPrice}
                        />
                    ))
                }
            </div>

            <div >
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={items.length}
                    paginate={paginate}
                />
            </div>


        </div>

    )
}

export default Products