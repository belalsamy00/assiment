import React from 'react';

function Cards({data ,deleteOne ,CountIn ,CountDe,index }) {
    return (
        <div className=' bg-slate-200 shadow p-4 text-start w-1/5 flex flex-col relative'>
            <span><span className=' me-1'>Name  </span>: {data.Name} </span>
            <span><span className=' me-4'>Cat  </span>: {data.Cat} </span>
            <span><span className=' me-1'>Price  </span>: {data.Price} </span>
            <span><span className=' me-1'>Count  </span>: {data.Count} </span>
            {data.Sold ? <span className=' absolute top-0 right-0 rotate-45 bg-red-700 px-4 text-zinc-50 rounded-md'> Sold </span> : ''}
            <button onClick={()=>{deleteOne(data.id)}} className='middle none center mr-3 rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'> Delete </button>
            <button onClick={()=>{CountIn(index)}} className='middle none center mr-3 rounded-lg bg-sky-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'> increase </button>
            <button onClick={()=>{CountDe(index)}} className='middle none center mr-3 rounded-lg bg-yellow-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'> decrease </button>
        </div>
    );
}

export default Cards;