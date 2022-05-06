import React from 'react'
import DashComp from './DashComp'

const dataofDash = [
  {
    title: "EARNINGS (MONTHLY)",
    price: "$40,000",
    icon:"fas fa-calendar fa-2x text-gray-300",
    bar:"card border-left-primary shadow h-100 py-2",
    textcolor:"text-xs font-weight-bold text-primary text-uppercase mb-1"
  },
  {
    title: "EARNINGS (ANNUAL)",
    price: "$215,000",
    icon:"fas fa-dollar-sign fa-2x text-gray-300",
    bar:"card border-left-success shadow h-100 py-2",
    textcolor:"text-xs font-weight-bold text-success text-uppercase mb-1"
  },
  {
    title: "TASKS",
    price: "50%",
    icon:"fas fa-clipboard-list fa-2x text-gray-300",
    bar:"card border-left-info shadow h-100 py-2",
    textcolor:"text-xs font-weight-bold text-info text-uppercase mb-1"
  },
  {
    title: "PENDING REQUESTS",
    price: "18",
    icon:"fas fa-comments fa-2x text-gray-300",
    bar:"card border-left-warning shadow h-100 py-2",
    textcolor:"text-xs font-weight-bold text-warning text-uppercase mb-1"
  },
];

function Dashboard() {
  return (
      <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
      
      <div className='row'>
      {dataofDash.map((details) => {
          return <DashComp a ={details} />;
        })}
      </div>
    
      </>
  )
}

export default Dashboard

