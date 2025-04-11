import React from 'react'

export default function ServiceItem({ item, idx }) {
  return (
    <a href={item.link}><div className={`service-item service-item--variant-${idx + 1}`}><div className='service-item-content'><p className="paragraph">{item.name}</p></div></div></a>
  )
}
