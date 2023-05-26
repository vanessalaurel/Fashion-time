import React , {useState} from 'react';
import { data } from '../data/data.js';
const Fashion =()=>{
    //console.log(data)
    const [fashion , setFashion] = useState(data);
        const filterType =(category)=>{
            setFashion (
                data.filter((item)=>{
                    return item.category === category;
                })
            );
        };

        const filterPrice =(price)=>{
            setFashion(data.filter((item)=>{
                return item.price === price;
            }));
        };
    return(
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className=' text-red-300 font-bold text-center text-4xl'>Best Seller Fashion Items</h1>

            {/*filter row*/}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/*filter type*/}
                <div>
                    <p className='font-bold text-red-950 '> Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=> setFashion(data)}className=' m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>All</button>
                        <button onClick={()=> filterType('Short')} className=' m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>Short</button>
                        <button onClick={()=> filterType('Shirt')} className=' m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>Shirt</button>
                        <button onClick={()=> filterType('Jacket')} className=' m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>Jacket</button>
                        <button onClick={()=> filterType('Top')} className=' m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>Top</button>
                    </div>
                </div>
                {/*filter price*/}
                <div>
                    <p className='font-bold text-red-950 '>Filter price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={()=> filterPrice('$')} className=' m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>$</button>
                        <button onClick={()=> filterPrice('$$')} className=' m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>$$</button>
                        <button onClick={()=> filterPrice('$$$')} className=' m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>$$$</button>
                        <button onClick={()=> filterPrice('$$$$')} className=' m-1 text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>$$$$</button>
                        
                    </div>
                </div>
            </div>
            {/*display fashion*/}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {fashion.map((item, index)=>(
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p><span className='p-1 bg-red-500 text-white rounded-full'>{item.price}</span></p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Fashion