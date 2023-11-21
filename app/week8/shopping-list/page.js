"use client";
import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from './meal-ideas';

export default function Week7 () {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(" ");

    const handleAddItem = (newItem) => {
        const updatedItems = [...items, newItem];

        setItems(updatedItems);
    };
    const handleItemSelect = (itemName) => {
        setSelectedItemName(itemName.split(',')[0].trim());
       
    }
    
    return (
        <main  class="bg-teal-500 flex">
            
            <div className="w-1/2 p-4">
                <h1 class="font-bold text-3xl text-black">Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <div className="w-1/2 p-4">

                <MealIdeas ingredient={selectedItemName}/>
            </div>

        </main>

    )
    }