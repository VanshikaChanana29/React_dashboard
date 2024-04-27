import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
// import Dashboard from "./pages/dashboard"
import {Suspense, lazy} from "react"
import Loader from "./components/loader"
// import { LineChart, PieChart } from "./components/Charts";
const Dashboard =  lazy(()=>import("./pages/dashboard"));
const Product =  lazy(()=>import("./pages/product"));
const Transactions=  lazy(()=>import("./pages/transactions"));
const Customer =  lazy(()=>import("./pages/customer"));
const NewProduct = lazy(()=>import("./pages/Management/NewProduct"))
const ProductManagement = lazy(()=>import("./pages/Management/productManagement"))
const TransactionManagement = lazy(()=>import("./pages/Management/transactionManagement")); 
const BarChart = lazy(()=>import("./pages/Charts/BarChart")); 
const LineChart = lazy(()=>import("./pages/Charts/LineChart")); 
const PieChart = lazy(()=>import("./pages/Charts/PieChart")); 
const StopWatch = lazy(()=>import("./pages/apps/StopWatch")); 
const Coupon = lazy(()=>import("./pages/apps/Coupon")); 
const Toss = lazy(()=>import("./pages/apps/Toss")); 
const App = () => {
  return (
    <Router>
         <Suspense fallback={<Loader/>}>
      
      <Routes>
     
        <Route path="/admin/dashboard" element = {<Dashboard/>}/>
        <Route path="/admin/product" element = {<Product/>}/>
        <Route path="/admin/transactions" element = {<Transactions/>}/>
        <Route path="/admin/customer" element = {<Customer/>}/>

        {/* charts  */}
        <Route path="/admin/chart/bar" element={<BarChart/>}/>
        <Route path="/admin/chart/line" element={<LineChart/>}/>
        <Route path="/admin/chart/pie" element={<PieChart/>}/>

        {/* Apps */}

        <Route path="/admin/app/stopwatch" element={<StopWatch/>}/>
        <Route path="/admin/app/toss" element={<Toss/>}/>
        <Route path="/admin/app/coupon" element={<Coupon/>}/>

        {/* Management */}
        <Route path="/admin/product/new" element={<NewProduct />} />
        <Route path="/admin/product/:id" element={<ProductManagement/>}/>
        <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
       
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App