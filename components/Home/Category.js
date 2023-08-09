import React from 'react';
import Data from '@/data/data.js';
import { useState } from 'react';
import Image from 'next/image';

function Category({onCategoryChange}) {

    const [categoryList, setCategoryList] = useState(Data.categoryList)
    const [selectedCategory, setSelectedCategory] = useState()

    return (
        <div className='px-2 mt-5'>
            <h2 className='font-bold'>Select Food Type</h2>
            <div className='grid grid-cols-2 md:grid-cols-2'>
                {
                    categoryList.map((item,index)=>(
                        <div 
                            className={`flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-lg grayscale hover:grayscale-0 cursor-pointer border-[1px] ${selectedCategory==index?'grayscale-0 border-blue-400': 'border-transparent'} `} 
                            key={index} 
                            onClick={() => {
                                setSelectedCategory(index);
                                onCategoryChange(item.value);
                                }}
                            >
                            <Image src={item.icon} alt={item.name} width={30} height={30}/>
                            {item.name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Category;