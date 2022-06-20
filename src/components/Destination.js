import logo from '../images/Fill 219.svg'

export default function Destination(prop){
  return(
    <div className='dest'>
      <section className='dest--country'>
        <img
          className='dest--icon'
          src={logo}
          alt={`location: ${prop.item.location}`}
        />
        <p>
          {prop.item.location}
        </p>
      </section>
      <h1 className='dest--title'>
        {prop.item.title}
      </h1>
      <a
        className='dest--map'
        href={prop.item.googleMapsUrl}>
        View on Google Maps
      </a>
      <h3 className='dest--date'>
        {prop.item.startDate} - {prop.item.endDate}
      </h3>
      <img 
        className='dest--img'
        src={prop.item.imageUrl} 
        alt={prop.item.title} 
      />
      <p className='dest--desc'>
        {prop.item.description}
      </p>
    </div>
  )
}
