import './App.css';
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DefaultLayout from './layouts/DefaultLayout';
import SingleProduct from './pages/SingleProduct';
import { BudgetProvider } from './context/BudgetContext';

function App() {
  return (
      <BudgetProvider>
    <BrowserRouter>
      <Routes>
        <Route element ={<DefaultLayout/>}>
        <Route path="/" element={<Homepage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/prodotti" element={<Prodotti />} />
         <Route path="/prodotti/:id" element={<SingleProduct />} />
           </Route>
      </Routes>
    </BrowserRouter>
    </BudgetProvider>
 
  );
}


export default App;