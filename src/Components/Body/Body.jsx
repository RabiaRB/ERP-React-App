import React from 'react';
import './Body.css';
import Category from "../Category/Category";

const Body = () => {
  return (
  
    <main>
      <h1>ERP System Dashboard</h1>
      <div className='categoryCards'>
      <Category
        img="finance.svg"
        title="Finance Department"
        description="Finance is the process of raising funds"
      />

      <Category
        img="procurement.svg"
        title="Procurement Department"
        description="Finance is the process of raising funds"
      />

       <Category
        img="humanResource.svg"
        title="Human Resource Department"
        description="Finance is the process of raising funds"
      />

     <Category
        img="fleetManagement.svg"
        title="Fleet Management"
        description="Finance is the process of raising funds"
      />

     <Category
        img="inventory.svg"
        title="Inventory Managemnet"
        description="Finance is the process of raising funds"
      />

     <Category
        img="admin.svg"
        title="Admin Department"
        description="Finance is the process of raising funds"
      />
    </div>
      </main>


    
  )
}

export default Body