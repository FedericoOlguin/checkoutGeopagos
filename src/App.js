import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CheckoutPage from "./pages/checkoutpage/CheckoutPage.jsx"
import ContextAppProvider from "./context/ContextApp.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"


function App() {


  return (
    <BrowserRouter>
      <ContextAppProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/' element={<CheckoutPage />} />
            <Route path='/*' element={<CheckoutPage />} />
          </Routes>
        </div>
      </ContextAppProvider>
    </BrowserRouter>
  );
}

export default App;
