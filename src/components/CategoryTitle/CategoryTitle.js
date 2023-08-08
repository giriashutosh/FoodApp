import React from 'react'

const CategoryTitle = ({ data, category, setCategory }) => {

    const arrowHandler = (data) => {
        setCategory(data);
    }
    
    return (
        <div>
            {data.title === category ? <div className='rounded-full bg-red-400 cursor-pointer m-2 p-1' onClick={() => arrowHandler(data.title)}>

                <h1 className=''>{data.title}({data.itemCards.length})</h1>

            </div> : <div className='rounded-full  bg-red-200 cursor-pointer m-2 p-1' onClick={() => arrowHandler(data.title)}>

                <h1 className=''>{data.title}({data.itemCards.length})</h1>

            </div>
            }
        </div>
    )
}

export default CategoryTitle
