import Image from "next/image";
export default function Payment(){
return(

<div className="max-w-7xl mx-auto p-6 grid grid-cols-3 gap-6 bg-[#F6F7F9]">
  {/* Left Section */}
  <div className="col-span-2 space-y-6">
    {/* Billing Info */}
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Billing Info</h2>
      <p className="text-gray-500 mb-6">Please enter your billing info</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h1 className="font-semibold">Name</h1>
          <input placeholder="Your name" className="border p-2 rounded w-full" />
        </div>
        <div>
          <h1 className="font-semibold">Phone</h1>
          <input placeholder="Phone number" className="border p-2 rounded w-full" />
        </div>
        <div>
          <h1 className="font-semibold">Address</h1>
          <input placeholder="Address" className="border p-2 rounded w-full" />
        </div>
        <div>
          <h1 className="font-semibold">Town / City</h1>
          <input placeholder="Town or City" className="border p-2 rounded w-full" />
        </div>
      </div>
    </section>

    {/* Rental Info */}
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Rental Info</h2>
      <p className="text-gray-500 mb-6">Please select your rental date</p>

      {/* Pick-Up Section */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <p className="font-semibold text-gray-700 text-lg">Pick-Up</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Location</label>
          <select className="w-full border p-2 rounded">
            <option>Select your city</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Date</label>
          <select className="w-full border p-2 rounded">
            <option>Select your date</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Time</label>
          <select className="w-full border p-2 rounded">
            <option>Select your time</option>
          </select>
        </div>
      </div>

      {/* Drop-Off Section */}
      <div className="flex items-center gap-2 mt-6 mb-4">
        <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
        <p className="font-semibold text-gray-700 text-lg">Drop-Off</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Location</label>
          <select className="w-full border p-2 rounded">
            <option>Select your city</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Date</label>
          <select className="w-full border p-2 rounded">
            <option>Select your date</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-600 mb-1">Time</label>
          <select className="w-full border p-2 rounded">
            <option>Select your time</option>
          </select>
        </div>
      </div>
    </section>
  </div>

 
  {/* Right Section */}
  <aside className="col-span-1 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
    <p className="text-gray-500 mb-6">
      Prices may change depending on the length of the rental and the price of your rental car.
    </p>
    
    <div className="flex items-center gap-4 mb-4"> <div className="rounded-lg w-[132px] h-[108px] pt-9 pl-2"
    style={{ backgroundImage: "url('/blueBack.jpg')" }} 
    >
        <img src="/car (18).png" alt="Nissan GT-R" className="w-[116px] h-[36px]" />
      </div>
      <div>
        <h3 className="font-bold">Nissan GT – R</h3>
        <p className="text-gray-500">440+ Reviewer</p>
      </div>
    </div>

    {/* Price Details */}
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-500">Subtotal</span>
        <span className="font-semibold">$80.00</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">Tax</span>
        <span className="font-semibold">$0</span>
      </div>
    </div>

    <div className="bg-gray-100 rounded p-4 mt-4 text-gray-500 flex justify-between">
      <span>Apply promo code</span>
      <button className="text-blue-500 font-semibold">Apply now</button>
    </div>

    <div className="mt-6 flex justify-between items-center">
      <div>
        <h3 className="font-bold">Total Rental Price</h3>
        <p className="text-gray-500 text-sm">Overall price includes rental discount</p>
      </div>
      <span className="text-2xl font-bold">$80.00</span>
    </div>
  </aside>


 {/*payment method*/}
 <div className="w-[852px] h-[596px]flex flex-col gap-4"> <section className="bg-white p-6 rounded-lg shadow-md">
 <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
 <p className="text-gray-500 mb-6 flex justify-between items-center">Please enter your payment method <span>step 3of4</span></p>

 <div className="w-[804px] h-[308px]">
 <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
 <div className="bg-white p-6 rounded-lg shadow-md">
  {/* Credit Card Section Header */}
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold">Credit Card</h2>
    <div className="flex gap-2">
      <Image
        src={"/Visa_inc._logo 1.png"}
        alt="Visa icon"
        width={48}
        height={16}
      />
      <Image
        src={"/mc.png"}
        alt="MasterCard icon"
        width={32}
        height={16}
      />
    </div>
  </div>

  {/* Credit Card Input Fields */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="font-semibold block mb-1">Card Number</label>
      <input
        type="text"
        placeholder="Card number"
        className="border p-2 rounded w-full"
      />
    </div>
    <div>
      <label className="font-semibold block mb-1">Expiration Date</label>
      <input
        type="text"
        placeholder="DD/MM/YY"
        className="border p-2 rounded w-full"
      />
    </div>
    <div>
      <label className="font-semibold block mb-1">Card Holder</label>
      <input
        type="text"
        placeholder="Card holder"
        className="border p-2 rounded w-full"
      />
    </div>
    <div>
      <label className="font-semibold block mb-1">CVC</label>
      <input
        type="text"
        placeholder="CVC"
        className="border p-2 rounded w-full"
      />
    </div>
  </div></div> </div>
</section>
 {/* PayPal Section */}
 <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="w-[804px] h-[56px] flex items-center justify-between bg-[#F6F7F9] p-3 ">
    <div className="flex items-center gap-2">
    <span className="w-3 h-3 bg-white rounded-full outline outline-1 outline-gray-800"></span>
      <p className="font-semibold  text-[#33425f] text-lg">PayPal</p>
      </div>
      <Image
        src={"/PayPal.png"}
        alt="paypal icon"
        width={100}
        height={24}
        className="flex-shrink-0" />
        
    </div>
</div>
{/* Bitcoin Section */}
<div className="bg-white p-6 rounded-lg shadow-md mb-6">
  <div className="w-[804px] h-[56px] flex items-center justify-between bg-[#F6F7F9] p-3">
    <div className="flex items-center gap-2">
    <span className="w-3 h-3 bg-white rounded-full outline outline-1 outline-gray-800"></span>
<p className="font-semibold text-gray-700 text-lg">Bitcoin</p>
    </div>
    <Image
      src={"/Bitcoin.png"}
      alt="bitcoin icon"
      width={100}
      height={24}
      className="flex-shrink-0"
    />
  </div>
</div>

    <div className="w-[852px] h-[484px] mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#1A202C]">Confirmation</h2>
        <p className="font-medium text-[#90A3Bf]">Step 4 of 4</p>
      </div>

      {/* Subheading */}
      <p className="font-medium text-[#90A3Bf] mb-4">
        We are getting to the end. Just few clicks and your rental is ready!
      </p>

      {/* Checkboxes */}
      <div className="space-y-4 mb-6">
        <div className="w-[804px] h-[56px] flex items-center p-4 bg-gray-100 rounded-lg">
          <input
            type="checkbox"
            id="marketing"
            className="w-5 h-5 mr-3 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="marketing" className="text-[#1A202C]">
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </label>
        </div>

        <div className=" w-[804px] h-[56px] flex items-center p-4 bg-gray-100 rounded-lg">
          <input
            type="checkbox"
            id="terms"
            className="w-5 h-5 mr-3 text-blue-600 rounded border-gray-300"
          />
          <label htmlFor="terms" className="text-[#1A202C]">
            I agree with our terms and conditions and privacy policy.
          </label>
        </div>
      </div>

      {/* Rent Now Button */}
      <div className="mb-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
          Rent Now
        </button>
      </div>

      
      
        <div className="w-6 h-6 border-2 border-blue-500 rounded flex items-center justify-center">
        <Image
        src={"/ic-security-safety (1).png"}
        alt="security-safety icon"
        width={32}
        height={32}/>
          
        </div>
        <div className="flex items-center space-x-2">
        <div>
          <p className="font-semibold text-[#1A202C]">All your data are safe</p>
          <p className="text-[#90A3Bf] text-sm">
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
      </div>
    </div>
  

  



      
    </div> 
 
 </div>


)}