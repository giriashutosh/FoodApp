import React from 'react'

const ItemList = ({data}) => {
console.log(data)
  return (
    <div className='flex flex-col  w-1/2 bg-slate-100'>
        {
            categories.map((item)=>
            <div className='mb-2 bg-slate-200'>item1</div>
            )
        }
        <div className='mb-2 bg-slate-200'>item1</div>
        <div className='mb-2 bg-slate-200'>item1</div>
        <div className='mb-2 bg-slate-200'>item1</div>
        <div className='mb-2 bg-slate-200'>item1</div>
    </div>
  )
}

export default ItemList