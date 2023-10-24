"use client";
import React, { useState } from 'react';

export default function NewItem({ onAddItem }){

    

    const [name, setName] = useState("");

    const [quantity, setQuantity] = useState(1);

    const [category, setCategory] = useState("produce");

    const [itemCreated, setItemCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();


        const newItem = {
            name,
            quantity,
            category,
        };

        console.log(newItem);


        setItemCreated(true);

        onAddItem(newItem);

        setName("");
        setQuantity(1);
        setCategory("");
    };


    const handleChangeName =  (event) => {
        setName(event.target.value);
    };

    const handleChangeQuantity =  (event) => {
        setQuantity(event.target.value);
    };

    const handleChangeCategory =  (event) => {
        setCategory(event.target.value);
    };





    



    return (
        <div>
            <div>

               <div>
                   
                    <form onSubmit={handleSubmit}
                    
                    class="  bg-gray-600 text-black w-full mt-1 p-2"
                    >
                        
                        <h1 class="font-bold text-center">
                            Add New Item
                        </h1>
                        <div class="mb-2">
                            <input
                                required
                                class="w-96 mt-1 border-2 border-rose-900 p-2 rounded-lg font-sans"
                                onChange={handleChangeName}
                                value={name}
                            />
                        </div>
                        <div class="flex justify-between">
                            <input
                                type="number"
                                min="1"
                                max="99"
                                onChange={handleChangeQuantity}
                                value={quantity}
                                class="w-20 m1-1 border-2 border-rose-900 p-2 rounded-lg font-sans"
                            />
                            
                        
                            
                            <select
                                onChange={handleChangeCategory}
                                value={category}
                                class="w-45 m1-1 border-2 border-rose-900 p-2 rounded-lg font-sans"

                                
                            >
                                <option value="produce"> Produce</option>
                                <option value="dairy"> Dairy</option>
                                <option value="bakery">Bakery</option>
                                <option value="meat"> Meat</option>
                                <option value="canned goods"> Canned Goods </option>
                                <option value="dry goods">Dry Goods </option>
                                <option value="household">Household </option>
                                
                            </select>
                        </div>
                        <button
                            type="submit"
                            class="w-full mt-4 py-2 px-4 bg-rose-900 text-black hover:bg-rose-950"
                            
                        >
                            Add Item

                        </button>

                    </form>

               </div>


            </div>
        </div>   
    );



};
