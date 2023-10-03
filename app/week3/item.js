export default function Item({name, quantity, category}) {

    return (
        <div class=" m-4 max-w-xs">
            <ul class=" bg-teal-100 max-w-sm text-black">
                <h2 class="font-bold p-0 m-1 text-xl max-w-sm ">{name} </h2>
                <p class="text-sm p-0 m-3 r">Quantity: {quantity}</p>
                <p class="p-0 m-3 ">{category}</p>
            </ul>
        </div>
    );
}