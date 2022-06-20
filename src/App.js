import Header from './components/Header'
import Destination from './components/Destination'
import data from './data'

const dest = data.map(loc => {
  return(
    <Destination
      key = {loc.id}
      item = {loc}
    />
  )
})

export default function App(){
  return(
    <div>
      <Header />
      <section>
        {dest}
      </section>
    </div>
  )
}
