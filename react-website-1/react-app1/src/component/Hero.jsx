import React from 'react'

const Hero =()=>{
    return(
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative '>
                {/*overlay*/}
                <div className=' absolute w-full rounded-xl h-full text-gray-100 max-h-[5oopx] bg-red-950/50 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className=' text-red-300 '>Iconic</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className=' text-red-300 '>Shipped </span>Fashions</h1>
                </div>
                <img className='w-full max-h-[500px] rounded-xl object-cover'src="https://images.pexels.com/photos/2657704/pexels-photo-2657704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/"/>
            </div>
        </div>
    )
}

export default Hero