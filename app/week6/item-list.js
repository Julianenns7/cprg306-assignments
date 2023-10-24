"use client";
import React, { useState } from 'react';

import Item from "./item";



export default function ItemList({ items }){

    
    
    const [sortBy, setSortBy] = useState("name")

    
    let sortedItems = [];

    function sortByName() {
        return items.slice().sort((a, b) => a.name.localeCompare(b.name));

    };

    
    function sortByCategory() {
       return items.slice().sort((a, b) => a.category.localeCompare(b.category));

    }
    const handleSortBy = (newSortBy) => {
        setSortBy(newSortBy);
      };
   
   
    if (sortBy == "name") {
        sortedItems = sortByName();
    }
    else if (sortBy == "category") {
        sortedItems = sortByCategory();
    }
    

    
    return(
    
         <div>
            <div class=" text-black m-4 max-2-xs">
                <button  onClick={() => handleSortBy("name")}
                
                class={`bg-${sortBy === "name" ? "teal-300" : "teal-100"} m-4 p-2 rounded-lg`}

                >Sort by name
                </button>
                
                <button onClick={() => handleSortBy("category")}
               
                class={`bg-${sortBy === "category" ? "teal-300" : "teal-100"} m-4 p-2 rounded-lg`}
                
                >Sort by category
                </button>
            </div>
            {sortedItems.map((item) => (
                <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                />

            
            
            ))}        
        </div>     
    );
 
};

