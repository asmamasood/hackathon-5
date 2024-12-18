
import React from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdPeople } from "react-icons/md";
import { BiDoughnutChart } from "react-icons/bi";

const RecentCars = [
  { id: 1, name: "Koenigsegg", type: "Sport", image: "/image7.png", price: "$99.00", oldPrice: "$120.00", features: { fuel: "90L", transmission: "Manual", people: "2 People" }, liked: false },
  { id: 2, name: "Nissan GT-R", type: "Sport", image: "/car (1).png", price: "$80.00", oldPrice: "$100.00", features: { fuel: "80L", transmission: "Manual", people: "2 People" }, liked: true },
  { id: 3, name: "Rolls-Royce", type: "Sedan", image: "/car (2).png", price: "$96.00", features: { fuel: "70L", transmission: "Manual", people: "4 People" }, liked: false },
]
const RecomendationCars=[
  { id: 1, name: "All New Rush", type: "SUV", image: "/car (4).png", price: "$72.00", oldPrice: "$80.00", features: { fuel: "70L", transmission: "Manual", people: "6 People" }, liked: false },
  { id: 2, name: "CR-V", type: "SUV", image: "/car (5).png", price: "$80.00", features: { fuel: "80L", transmission: "Manual", people: "6 People" }, liked: true },
  { id: 3, name: "All New Terios", type: "SUV", image: "/car (6).png", price: "$74.00", features: { fuel: "70L", transmission: "Manual", people: "6 People" }, liked: false },
];

export default function DetailPage() {
  return (
    <div>

    <div className="flex max-w-7xl mx-auto mt-8 gap-6">
      {/* Sidebar */}
    

    
      <aside className="w-[360px] h-full bg-white p-4 rounded-lg shadow-md">
        <div>
          <h3 className="w-[176px] h-[352px]font-medium mb-4">Type</h3>
          <ul>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" defaultChecked className="mr-2 " /> Sport (10)
            </li>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" defaultChecked className=" mr-2" /> SUV (12)
            </li>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" className=" mr-2" /> MPV (16)
            </li>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" className="mr-2" /> Sedan (20)
            </li>
            <li className="mb-2 w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" className=" mr-2" /> Coupe (14)
            </li>
            <li className="mb-2w-[176px] h-[24px] gap-[8px]">
              <input type="checkbox" className="mr-2 " /> Hatchback (14)
            </li>
          </ul>
        </div>
        <div className="mt-6 w-[176px] h-[352px] ">
          <h3 className="font-semibold mb-4">Capacity</h3>
          <ul>
            <li className="mb-2">
              <input type="checkbox" defaultChecked className="mr-2" /> 2 Person (10)
            </li>
            <li className="mb-2">
              <input type="checkbox" className="mr-2" /> 4 Person (14)
            </li>
            <li className="mb-2">
              <input type="checkbox" className="mr-2" /> 6 Person (12)
            </li>
            <li className="mb-2">
              <input type="checkbox" defaultChecked className="mr-2" /> 8 or More (16)
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-4">Price</h3>
          <input type="range" min="0" max="100" defaultValue="80" className="w-full" />
          <p className="mt-2 text-gray-600">Max. $100.00</p>
        </div>
      </aside>
<div className="">
  
</div>
      {/* Main Content */}
      <main className="flex-1 justify-between items-center p-6 w-[492px] h-[352px]">
        <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md" style={{ backgroundImage: "url('/blueBack.jpg')" }}>
         
          <h1 className="w-[372px] h-[96px] size-8 leading-[48px] tracking[-3%] font-Plus Jakarta Sans
 text-lg font-semibold">
            Sports car with the best <br /> design and acceleration</h1>
          <p className="mt-2 w-[284px] h-[48px]">Safety and comfort while driving a futuristic and elegant sports car</p>
          <img
            src="/image 8 (1).png"
            alt="Car"
            className="w-[380px]  h-[120px]  mt-[216px] left-[436px] hue-rotate-180 rounded-lg"
          /> </div>
          <div className="flex gap-2 mt-4" >
            <div className="w-[190px] h-[124px] rounded pt-10"style={{ backgroundImage: "url('/blueBack.jpg')"}}>
            <img 
              src="/car (18).png"
              alt="car"
              className="w-[116px] h-[36px] top-[36px] left-[124px] hue-rotate-180  "
            />
            </div>
            <img
              src="/View 2.png"
              alt="Interior"
              className="w-[190px] h-[124px]  rounded-lg"
            />
             <img
              src="/View 3.png"
              alt="Interior"
              className="w-[190px] h-[124px]  rounded-lg"
            />
          
        </div>

        {/* Reviews */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Reviews</h2>
          <div className="flex items-center mb-4">
            <img
              src="/image.png"
              alt="Reviewer"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">Alex Stanton</h3>
              <p className="text-gray-500">CEO at Bukalapak</p>
              <p className="text-gray-600 text-sm">
                &quot We are very happy with the service from the MORENT App. Morent has a low price and
                also a large variety of cars with good and comfortable facilities.&quot
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/Profill.png"
              alt="Reviewer"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">Skylar Dias</h3>
              <p className="text-gray-500">CEO at Amazon</p>
              <p className="text-gray-600 text-sm">
                $quot Morent provides great comfort and has a wide variety of cars with good facilities.&quot
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Right Section */}
      <aside className="w-1/4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Nissan GT – R</h2>
        <p className="text-gray-600 mb-4">
          NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most
          unforgiving proving ground, the "race track&quot;.
        </p>
        <ul className="mb-4">
          <li className="flex justify-between">
            <span>Type Car:</span> <span>Sport</span>
          </li>
          <li className="flex justify-between">
            <span>Steering:</span> <span>Manual</span>
          </li>
          <li className="flex justify-between">
            <span>Gasoline:</span> <span>70L</span>
          </li>
          <li className="flex justify-between">
            <span>Capacity:</span> <span>2 Person</span>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-blue-600">$80.00/day</h3>
          <p className="line-through text-gray-400">$100.00</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md">
          Rent Now
        </button>
      </aside> </div>
      <div className="w-[1016] h-[44] flex justify-between items-center bg-gray-200">Recomendation Car
         <p className="font-semi-bold w-[64px] text-right h-[44px] text-[#3563E9]">Veiw All</p></div>
         
            {/* Recent Cars Grid */}
            <div className="grid grid-cols-3 gap-6">
                     {RecentCars.map((car) => (
                       <div key={car.id} className="bg-white rounded-lg shadow p-4 relative">
                         {/* Car Header */}
                         <div className="flex justify-between items-center">
                           <h3 className="text-lg font-bold">{car.name}</h3>
                           <button>
                             {car.liked ? (
                                 <div className="text-red-500 text-xl">
                               <AiFillHeart /></div>
                             ) : ( <div className="text-gray-300 text-xl">
                               <AiOutlineHeart /> </div>
                             )}
                           </button>
                         </div>
                         {/* Car Image */}
                         <Image src={car.image} alt={car.name} width={300} height={200} className="rounded-md" />
                         {/* Car Features */}
                         <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                           <div className="flex items-center gap-1">
                             <Image src="/gas-station.png" alt="Fuel" width={16} height={16} />
                             <span>{car.features.fuel}</span>
                           </div>
                           <div className="flex items-center gap-1">
                             <BiDoughnutChart />
                             <span>{car.features.transmission}</span>
                           </div>
                           <div className="flex items-center gap-1">
                             <MdPeople />
                             <span>{car.features.people}</span>
                           </div>
                         </div>
                         {/* Price and Button */}
                         <div className="flex justify-between items-center mt-4">
                           <div>
                             <p className="text-blue-500 text-lg">{car.price}/day</p>
                             {car.oldPrice && (
                               <p className="text-gray-400 line-through">{car.oldPrice}</p>
                             )}
                           </div>
                           <button className="bg-blue-500 text-white px-4 py-2 rounded">
                             Rent Now
                           </button>
                         </div>
                       </div>
                     ))}
                   </div>
         
         
                   <div className="w-[1016] h-[44] flex justify-between items-center bg-gray-200">Recomendation Car 
                     <p className="font-semi-bold w-[64px] text-right h-[44px] text-[#3563E9]">Veiw All</p></div>
            {/*Recomendation Cars Grid */}
            <div className="grid grid-cols-3 gap-6">
                   {RecomendationCars.map((car) => (
                       <div key={car.id} className="bg-white rounded-lg shadow p-4 relative">
                         {/* Car Header */}
                         <div className="flex justify-between items-center">
                           <h3 className="text-lg font-bold">{car.name}</h3>
                           <button>
                             {car.liked ? (
                                 <div className="text-red-500 text-xl">
                               <AiFillHeart /></div>
                             ) : ( <div className="text-gray-300 text-xl">
                               <AiOutlineHeart /> </div>
                             )}
                           </button>
                         </div>
                         {/* Car Image */}
                         <Image src={car.image} alt={car.name} width={300} height={200} className="rounded-md" />
                         {/* Car Features */}
                         <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                           <div className="flex items-center gap-1">
                             <Image src="/gas-station.png" alt="Fuel" width={16} height={16} />
                             <span>{car.features.fuel}</span>
                           </div>
                           <div className="flex items-center gap-1">
                             <BiDoughnutChart />
                             <span>{car.features.transmission}</span>
                           </div>
                           <div className="flex items-center gap-1">
                             <MdPeople />
                             <span>{car.features.people}</span>
                           </div>
                         </div>
                         {/* Price and Button */}
                         <div className="flex justify-between items-center mt-4">
                           <div>
                             <p className="text-blue-500 text-lg">{car.price}/day</p>
                             {car.oldPrice && (
                               <p className="text-gray-400 line-through">{car.oldPrice}</p>
                             )}
                           </div>
                           <button className="bg-blue-500 text-white px-4 py-2 rounded">
                             Rent Now
                           </button>
                         </div>
                       </div>
                     ))}
                   </div> 
 </div>
  )}

