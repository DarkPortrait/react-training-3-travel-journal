import logo from '../images/Fill 213.svg'

export default function Header(){
  return(
    <nav>
      <img
        className='nav--img'
        src={logo} 
      />
      <p className='nav--text'>
         my travel journal.
      </p>
    </nav>
  )
}
