import React from 'react'

const Body =()=>{
    return(
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/*Card*/}
            <div className='rounded-xl relative'>
                {/*overlay*/}
                <div className='absolute w-full h-full bg-red-800/40 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>H&M</p>
                    <p className='px-2'>Summer Promotion</p>
                    <button className='border-white bg-white text-red-950 mx-2 absolute bottom-4'>Shop Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl 'src='https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='/'/>
            </div>
            <div className='rounded-xl relative'>
                {/*overlay*/}
                <div className='absolute w-full h-full bg-red-800/40 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Zara</p>
                    <p className='px-2'>Summer Promotion</p>
                    <button className='border-white bg-white text-red-950 mx-2 absolute bottom-4'>Shop Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl 'src='https://images.pexels.com/photos/12150994/pexels-photo-12150994.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt='/'/>
            </div>
            <div className='rounded-xl relative'>
                {/*overlay*/}
                <div className='absolute w-full h-full bg-red-800/40 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Lululemon</p>
                    <p className='px-2'>Summer Promotion</p>
                    <button className='border-white bg-white text-red-950 mx-2 absolute bottom-4'>Shop Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[250px] w-full object-cover rounded-xl 'src='https://images.pexels.com/photos/5457462/pexels-photo-5457462.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt='/'/>
            </div>

        </div>
    )
}

export default Body