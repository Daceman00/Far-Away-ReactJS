import React from 'react'

const Stats = ({ items }) => {

  if(!items.length) 
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list</em>
      </p>
    )

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      {percentage <= 99 ?
        <em>
          You have {numItems} items on your list, and you already packed {numPacked} ({percentage}%)
        </em> :
        <span>
          You have no more room, you packed everything
        </span>
      }
    </footer>
  )
}

export default Stats