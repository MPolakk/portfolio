

const Me = () => {

    return ( 
        <div className="relative mb-20 h-[350px]">
            <div className='relative'>
                <div className='bg-stone-900 brightness-150 h-44 rounded-tr-[30px] rounded-tl-[30px]'></div>
                <img src="assets/me.png" alt='its me' className='absolute top-[-50px]'/>
                <span className='absolute w-full -bottom-5 text-center block text-4xl text-white uppercase font-bold'>james williams</span>
                <span className='absolute w-full -bottom-12 block text-xl text-center text-white uppercase font-bold'>web designer/developer</span>
            </div>
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-8 h-12 rounded-2xl border-2 border-gray-600">
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-1.5 h-1.5 rounded-full bg-gray-700"></span>
            </div>
        </div>
     );
}
 
export default Me;