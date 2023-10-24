"use client";
import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Week5 () {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        const updatedItems = [...items, newItem];

        setItems(updatedItems);
    };
    return (
        <main  class="bg-teal-500">
            <h1 class="font-bold text-3xl text-black">Shopping List</h1>
            
            
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
           


        </main>

    )
    }