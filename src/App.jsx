import Banner from './components/Banner'
import Carousel from './components/Carousel'
import Error404 from './components/Error404'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartContextProvider from './components/context/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter> 
        <NavBar />
        <Carousel />
        <Routes>
          <Route path={'/'} element={<ItemListContainer />} />
          <Route path={'/category/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/checkout'} element={<Checkout />} />
          <Route path={'/*'} element={<Error404 />} />
        </Routes>
        <Banner />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
      
  )
}

export default App
