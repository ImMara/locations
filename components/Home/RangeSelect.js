import React from 'react';

function RangeSelect({setRadius}) {

    const [range, setRange] = React.useState(1);

    return (
        <div className='px-2 mt-5'>
            <h2 className='font-bold'>Select Range (in meter)</h2>
            <input 
                type='range'
                min='1' 
                max='50'
                step="1"
                defaultValue={range}
                onChange={(e) => {setRange(e.target.value), setRadius(e.target.value*1000)}}
                className='w-full bg-gray-200 rounded-lg appearance-none cursor-pointer' />
                <label className='text-gray-500 text-[10px]'>{range} km</label>
        </div>
    );
}

export default RangeSelect;