import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data.js'

function App() {
  const Cards = data.map(spot => {
    return <Card {...spot} />

  })

  return (
    <div className="container">
      <Navbar />
      <section>
        {Cards}
      </section>
    </div>
  )
}

export default App;
