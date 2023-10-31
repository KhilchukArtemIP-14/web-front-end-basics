import './App.css'
import { Route, Routes} from 'react-router-dom';
import GoodsGallery from './Pages/GoodsGallery'
import Lab4Remake from './Pages/Lab4Remake'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Lab4Remake/>}/>
        <Route path="/goods-gallery" element={<GoodsGallery/>}/>
      </Routes>
    </>
  )
}

export default App
