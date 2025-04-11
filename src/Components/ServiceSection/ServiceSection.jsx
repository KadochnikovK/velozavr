import React from 'react'
import ServiceItem from '../ServiceItem/ServiceItem'

export default function ServiceSection({ items }) {
  return (
    <div className='service'>
        {items.map((item, idx) => <ServiceItem item={item} idx={idx}/>)}
    </div>
  )
}
