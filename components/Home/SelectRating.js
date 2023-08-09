import React from 'react';
import Data from '@/data/data.js';

function SelectRating(props) {

    const [SelectRating,setSelectRating] = React.useState([]);

    const onSelectRating = (checked,name) => {
        if(checked){
            setSelectRating([...SelectRating,name])
        }else{
            const newSelectRating = SelectRating.filter(item=>item!==name);
            setSelectRating(newSelectRating);
        }
        console.log(SelectRating);
    }

    return (
        <div className='px-2 mt-5'>
            <h2 className='font-bold'>Select Rating</h2>
            <div>
                {
                    Data.ratingList.map((item,index)=>(
                        <div className='flex items-center justify-between' key={index}>
                            <label>{item.icon}</label>
                            <input 
                                type='checkbox'
                                onChange={(e)=>onSelectRating(e.target.checked,item.name)}
                                className='ml-2' />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SelectRating;