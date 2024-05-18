import React from "react";
import Card from "./Card";
const Cards=({items})=>{

  return (

      <div>

        {
          
          items.map((item)=>{
            return <Card key={item.id}/>
          })


        }
 



      </div>


  )
}


export default Cards;