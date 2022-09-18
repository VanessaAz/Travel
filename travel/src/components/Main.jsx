import React from 'react'


export default function Main(data){
    return(
        <section className='trip'>
            <img src={data.item.imageUrl}className='trip-img'/>
            <div className='trip-data'>
                <div className='trip-location'>
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{data.item.location}</p>
                    <a target="_blank" href={data.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className='trip-title'>{data.item.title}</h1>
                <p className='trip-date'>{data.item.startDate} - {data.item.endDate}</p>
                <p className='trip-description'>{data.item.description}</p>
            </div>
        </section>
    )
    
}