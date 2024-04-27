import React from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import { LineChart as MyLineChart } from '../../components/Charts';
const months = ["january" , "Feburary", "March" , "April" , "May" , "june" , "July" , "August" , "September" , "October" , "November" , "December"]; 
const LineChart = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar/>
      <main className='chart-container'>
        <h1>Bar Chart</h1>
        <section>
          <MyLineChart
            data = {[200 , 444 , 444 , 556 , 778 , 987 , 645 , 654, 988, 967 , 234, 567]}
            label = "Users"
            borderColor='rgb(53 , 162 , 255)'
            backgroundColor='rgba(53 , 162 , 255 , 0.5)'
            labels={months}

          />
          <h2>Active users</h2>
        </section>
        <section>
          <MyLineChart
            data = {[200 , 444 , 444 , 556 , 778 , 987 , 645 , 654, 988, 967 , 234, 567]}
            label = "Users"
            borderColor={"hsla(129 , 80% , 40% , 0.4)"}
            backgroundColor={"hsl(129 , 80% , 40%)"}
            labels={months}

          />
          <h2>Total Products (SKU)</h2>
        </section>
        <section>
          <MyLineChart
            data = {[200 , 444 , 444 , 556 , 778 , 987 , 645 , 654, 988, 967 , 234, 567]}
            label = "Users"
            borderColor='rgb(53 , 162 , 255)'
            backgroundColor='rgba(53 , 162 , 255 , 0.5)'
            labels={months}

          />
          <h2>Total Discount Revenue</h2>
        </section>
        <section>
          <MyLineChart
            data = {[200 , 444 , 444 , 556 , 778 , 987 , 645 , 654, 988, 967 , 234, 567]}
            label = "Users"
            borderColor={'hsla(29 , 80%, 40% , 0.4)'}
            backgroundColor={'hsl(29 , 80%, 40%)'}
            labels={months}

          />
          <h2>Total Reveneu</h2>
        </section>
      </main>
    </div>
  );
};

export default LineChart;
