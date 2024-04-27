import AdminSidebar from "../../components/AdminSidebar";
import { BarChart as ChartComponent } from "../../components/Charts"; // Renamed the import

const BarChartPage = () => {
    const months = ["january" , "Feburary", "March" , "April" , "May" , "june" , "July" , "August" , "September" , "October" , "November" , "December"]; 
  return (
     <div className='adminContainer'>
        <AdminSidebar/>
        <main className='chart-container'>
            <h1>Bar Chart</h1>
            <section>
            <ChartComponent data_1={[200, 444, 343, 556, 778, 455, 990]}
            data_2={[300, 144, 433, 655, 237, 755, 190]} title_1="Products" title_2="Users" bgColor_1={`hsl(260 , 50% , 30%)`} bgColor_2={`hsl(360 , 90% , 90%)`}/>
            <h2>Top Selling Companies and Customers</h2>
            </section>
            <section>
          <ChartComponent
            horizontal={true}
            data_1={[
              200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180, 40%, 50%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
        </main>
     </div>
  )
}

export default BarChartPage;
