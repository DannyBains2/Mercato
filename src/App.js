
import { TEInput, TERipple } from "tw-elements-react"
import { useState } from "react";
import Model from "./Model";


function App() {
  const [isOpen, setIsOpen] = useState(false)

const [first, setFirst] = useState("")
const [second, setSecond] = useState("")
const [house, setHouse] = useState("")
const [number, setNumber] = useState("")
const [street, setStreet] = useState("")
const [city, setCity] = useState("")
const [postcode, setPostcode] = useState("")
const [module, setModule] = useState("")
const [inverter, setInverter] = useState("")
const [numModules, setNumModules] = useState("")
const [cable, setCable] = useState("")
const [numRow, setNumRow] = useState("")
const [numCol, setNumCol] = useState("")
const [delColl, setDelColl] = useState("")
const [orientation, setOrientation] = useState("")

const details = {
  first,
  second,
  house,
  street,
  city,
  postcode,
  module : module.replace(/\s/g,''),
  inverter: inverter.replace(/\s/g,''),
  numModules: Number(numModules),
  cable,
  numRow: Number(numRow),
  numCol: Number(numCol),
  delColl,
  orientation
}
function handleClick (){

}
// console.log (isOpen)
//  console.log (details)
  return (
    <div className="App w-full h-screen  flex relative">
      <div className="w-1/2 h-auto   flex justify-center">
      <div className="my-10 block max-w-2xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <form>
        <div className=" pl-3 w-full rounded-md border-4 border-[#4C1E4F]   text-white bg-[#4C1E4F] mb-4">
          Your Details
        </div>
        <div className="grid grid-cols-3 gap-4">
          {/* <!--First name input--> */}
          <TEInput
            type="text"
            label="First name"
            className="mb-6"
            onChange={(e) => setFirst(e.target.value)}
          ></TEInput>

          {/* <!--Last name input--> */}
          <TEInput
            type="text"
            label="Last name"
            className="mb-6"
            onChange={(e) => setSecond(e.target.value)}
          ></TEInput>

             {/* <!--House Name/Number input--> */}
        <TEInput
          type="text"
          label="House Name/Number"
          className="mb-6"
          onChange={(e) => setHouse(e.target.value)}
        ></TEInput>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* <!--Street Name input--> */}
          <TEInput
            type="text"
            label="Street Name"
            className="mb-6"
            onChange={(e) => setStreet(e.target.value)}
          ></TEInput>

          {/* <!--Town/City input--> */}
          <TEInput
            type="text"
            label="Town/City"
            className="mb-6"
            onChange={(e) => setCity(e.target.value)}
          ></TEInput>

             {/* <!--Postcode input--> */}
        <TEInput
          type="text"
          label="Postcode"
          className="mb-6"
          onChange={(e) => setPostcode(e.target.value)}
        ></TEInput>
        </div>

        <br></br>
        <hr></hr>
        <br></br>

        <div className="  pl-3 w-full rounded-md border-4 border-[#4C1E4F]   text-white bg-[#4C1E4F] mb-4">
          Your Order
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* <!--Module type input--> */}
          <select id="cars" name="cars" className="mb-6 border border-gray-200" onChange={(e) => setModule(e.target.value)}>
            <option value="none" selected disabled hidden>Type of module</option>
            <option value="Module A">Module A</option>
            <option value="Module B">Module B</option>
          </select>

          {/* <!--Type of Inverter input--> */}
          <select id="cars" name="cars" className="mb-6 border border-gray-200" onChange={(e) => setInverter(e.target.value)}>
          <option value="none" selected disabled hidden>Type of Inverter</option>
            <option value="Inverter A">Inverter A</option>
            <option value="Inverter B">Inverter B</option>
            <option value="Inverter C">Inverter C</option>
          </select>

             {/* <!--Number Of modules/Number input--> */}
        <TEInput
          type="number"
          label="Number of modules"
          className="mb-6 "
          onChange={(e) => setNumModules(e.target.value)}
        ></TEInput>
        </div>

        <div className="grid grid-cols-3 gap-4">

        <select id="cars" name="cars" className="mb-6 border border-gray-200" onChange={(e) => setCable(e.target.value)}>
        <option value="none" selected disabled hidden>Cable length in meters</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="110">110</option>
            <option value="120">120</option>
            <option value="130">130</option>
            <option value="140">140</option>
            <option value="150">150</option>
          </select>


          {/* <!--Number of columns input--> */}
          <TEInput
            type="number"
            label="Number of columns"
            className="mb-6"
            onChange={(e) => setNumCol(e.target.value)}
          ></TEInput>

<select id="cars" name="cars" className="mb-6 border border-gray-200" onChange={(e) => setOrientation(e.target.value)}>
            <option value="none" selected disabled hidden>Select Orientation</option>
            <option value="Landscape">Landscape</option>
            <option value="Portrait">Portrait</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-4">
                 {/* <!--number of rows input--> */}
                 <TEInput
            type="number"
            label="Number of rows"
            className="mb-6"
            onChange={(e) => setNumRow(e.target.value)}
          ></TEInput>

          <select id="cars" name="cars" className="mb-6 border border-gray-200" onChange={(e) => setDelColl(e.target.value)}>
          <option value="none" selected disabled hidden>Delivery/Collection</option>
            <option value="Delivery">Delivery</option>
            <option value="Collection">Collection</option>
          </select>

        </div>

        
        {/* <!--Subscribe newsletter checkbox--> */}


        {/* <!--Submit button--> */}
        <TERipple rippleColor="light" className="w-full">
          <button
            onClick = {() => setIsOpen(!isOpen)}
            type="button"
            className="block w-auto rounded bg-primary-900 px-6 pb-2 pt-2.5 text-base font-bold uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] "
          >
            Get Quote
          </button>
        </TERipple>
      </form>
    </div>
      </div>

      { isOpen ? <Model details = {details} setIsOpen = {setIsOpen} isOpen = {isOpen}/>
 : ""}

      <div className="w-1/2 bg-[#f5b82e] flex flex-col items-center justify-center">
        <h1 className=" text-8xl">Mercato</h1>
        <h3 className=' text-2xl'>Solar Panel Inc.</h3>
      </div>
    </div>
  );
}

export default App;
