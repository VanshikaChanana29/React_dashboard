import { FaRegBell } from "react-icons/fa"
import AdminSidebar from "../components/AdminSidebar"
import { BsSearch } from "react-icons/bs"
import userimg from '../assets/userpic (1).png'
import { HiTrendingUp , HiTrendingDown } from "react-icons/hi"
import data from "../assets/data.json"
import { BarChart, DoughnutChart} from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi"
import Table from "../components/DashboardTable"


const dashboard = () => {
  return (
    <div className="adminContainer">
      {/* sidebar */}
         <AdminSidebar/>
         <main className="dashboard">

           <div className="bar">
            <BsSearch/>
            <input type="text" placeholder="Search for data , users , docs" />
            <FaRegBell/>
            <img src={userimg} alt="" />
           </div>

           <section className="widgetcontainer">
                <WidgetItem percent={40} amount={true} value={340000} heading="Revenue" color="rgb(0,155,255)"/>
                <WidgetItem percent={80} amount={false} value={4500} heading="Transactions" color="rgb(255,196,0)"/>
                <WidgetItem percent={-14} amount={true} value={340000} heading="Revenue" color="rgb(0,198,202)"/>
                <WidgetItem percent={30} amount={true} value={3400} heading="Products" color="rgb(75,0,255)"/>
           </section>


           <section className="graphContainer">
             <div className="revenue-chart"> <h2>Revenue & Transactions</h2>
             {/* grapg here */}
             <BarChart data_2={[300 , 144, 433, 655, 237 , 755 , 190]} data_1 = {[200 , 444 , 343 , 556 , 778 , 455 , 990]} title_1 = "Revenue" title_2="Transactions" bgColor_1="rgb(0,115,255)" bgColor_2="rgb(53,162,235,0.5)" horizontal = {true}             />
             </div>
             <div className="dashboard-categories">
              <h2>Inventory</h2>
              <div>{data.categories.map(i =>(
                  <CategortItem key={i.heading} heading={i.heading} value={i.value} color={`hsl(${i.value * 4},${i.value}%,50%)`}/>
                )
                )}</div>
             </div>
           </section>


           <section className="transaction-container">
            <div className="gender-chart">
              <h2>Gender ratio</h2>
              <DoughnutChart labels={["Female" , "Male"]} data={[12 , 19]} backgroundColor={["hsl(340,82%,56)" , "rgba(53,162,235,0.8)"]}/>
              <p><BiMaleFemale/></p>
            </div>

            {/* table creation */}
            <Table data={data.transaction}/>
           </section>
           
         </main>
      {/* main */}
    </div>
  )
}; 


interface WidgetItemProps{
  heading :string, 
  value: number , 
  percent : number , 
  color: string; 
  amount?:boolean;
}
const WidgetItem = ({heading , value , percent , color , amount}: WidgetItemProps ) => (<article className="widget">
  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount ? `$${value}` : value}</h4>
    {
      percent>0? (<span className="green"><HiTrendingUp/> +{percent}%{""}</span>):(<span className="red"><HiTrendingDown/> {percent}%{""}</span>)
    }
  </div>

  <div className="widgetCircle" style={{background: `conic-gradient( ${color} ${Math.abs(percent)/100*360}deg , rgb(255,255,255) 0)`}}>
    <span style={{color,}}>{percent}%</span>
  </div>

</article>
); 

interface CategoryItemProps{
  color:string , 
  value: number; 
  heading : string;
}
const CategortItem = ({color , value , heading}:CategoryItemProps)=>(
  <div className="category-item">


    <h5>{heading}</h5>
    <div>
      <div style={
        {backgroundColor:color,
        width: `${value}%`}
      }></div>

    </div>
    <span>{value}%</span>
  </div>
)

export default dashboard