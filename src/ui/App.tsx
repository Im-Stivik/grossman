import './App.css'
import MainPannel from './layout/MainPannel'

import SidePannel from './layout/SidePannel'
import TopPannel from './layout/TopPannel'

function App() {

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', margin: 0, top: 0 }}>
        <div>
          <TopPannel />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
          <SidePannel />
          <div style={{ flexDirection: 'column', width: '100%' }}>
            <MainPannel />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
