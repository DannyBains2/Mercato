import { useRef } from "react"
import { useReactToPrint } from 'react-to-print'

export default function Model ({details,setIsOpen, isOpen}){
        
const printRef= useRef()

const handlePrint = useReactToPrint({
  content: () => printRef.current
})
const handleClick = ()=>{
  alert("Your order has been placed!")
  setIsOpen(!isOpen)
}

        const parts = {
            Bolts: 0.05,
            Screws:	0.10,
            Washers: 0.03,
            Rails15m: 24.50,
            Rails1m: 18.00,
            Rails05m: 9.00,
            ACIsolator: 67.00,
            DCIsolator: 122.00,
            WarningLabels: 2.00,
            Hooks: 1.24,
            Cable: 3.00,
            ModuleA: 450.00,
            ModuleB: 650.00,
            InverterA: 500.00,
            InverterB: 600.00,
            InverterC: 700.00,
        }

        const qty = {
            Bolts: 0,
            Screws:	0,
            Washers: 0,
            Rails15m: 0,
            Inverter: 0,
            Rails1m: 0,
            Rails05m: 0,
            ACIsolator: 0,
            DCIsolator: 0,
            WarningLabels: 0,
            Hooks: 0,
            Cable: 0,
            Module: 0,
        }
     
        
        qty.Module = details.numModules
        qty.Inverter = 1
        qty.DCIsolator = qty.Inverter
        qty.ACIsolator = qty.Inverter*2
        qty.WarningLabels = qty.ACIsolator*4

        if (details.orientation === "Portrait"){
            qty.Hooks = (details.numRow*2)*(details.numCol+1)
            let rail15m = details.numCol * 1640 + (details.numCol-1)
            qty.Rails15m = Math.floor(rail15m/1500)
            let remainder = rail15m%1500
            if (remainder >= 1000){
                qty.Rails15m = qty.Rails15m + 1
            }
            if(remainder > 500 && remainder < 1000){
                qty.Rails1m = qty.Rails1m + 1
            }
            if(remainder > 0 && remainder < 500){
                qty.Rails05m = qty.Rails05m + 1
            }
            qty.Rails15m = qty.Rails15m * (details.numRow*2)
            qty.Rails1m = qty.Rails1m * (details.numRow*2)
            qty.Rails05m = qty.Rails05m * (details.numRow*2)

        } else {
            qty.Hooks = (details.numCol*2)*(details.numRow+1)
            let rail15m = details.numRow * 1640 + (details.numRow-1)
            qty.Rails15m = Math.floor(rail15m/1500)
            qty.Rails15m = Math.floor(rail15m/1500)
            let remainder = rail15m%1500
            if (remainder >= 1000){
                qty.Rails15m = qty.Rails15m + 1
            }
            if(remainder > 500 && remainder < 1000){
                qty.Rails1m = qty.Rails1m + 1
            }
            if(remainder > 0 && remainder < 500){
                qty.Rails05m = qty.Rails05m + 1
            }
            qty.Rails15m = qty.Rails15m * (details.numRow*2)
            qty.Rails1m = qty.Rails1m * (details.numRow*2)
            qty.Rails05m = qty.Rails05m * (details.numRow*2)
            
        }
        qty.Cable = Number(details.cable/10)
        qty.Bolts = details.numModules*2
        qty.Screws = Math.ceil(qty.Hooks*2.25)
        qty.Washers = qty.Screws
       
       let totalExc = Number(((parts[details.module])*details.numModules).toFixed(2))+Number((parts[details.inverter]).toFixed(2))+Number(((parts.DCIsolator)*qty.DCIsolator).toFixed(2))+Number(((parts.ACIsolator)*qty.ACIsolator).toFixed(2))+Number(((parts.Bolts)*qty.Bolts).toFixed(2))+Number(((parts.Screws)*qty.Screws).toFixed(2))+Number(((parts.Washers)*qty.Washers).toFixed(2))+Number(((parts.Rails15m)*qty.Rails15m).toFixed(2))+Number(((parts.Rails1m)*qty.Rails1m).toFixed(2))+Number(((parts.Rails05m)*qty.Rails05m).toFixed(2))+Number(((parts.WarningLabels)*qty.WarningLabels).toFixed(2))+ Number(((parts.Hooks)*qty.Hooks).toFixed(2))+Number(((parts.Cable)*qty.Cable).toFixed(2))
            totalExc = (totalExc).toFixed(2)
        let vat = (totalExc/5).toFixed(2)
        console.log (qty, details.numCol, qty.Module)
    return(
        <>
        


        <div ref={printRef} className=" w-5/6 h-5/6 border-4 border-black absolute bg-white flex-col ">

        <div className="w-full h-14 border text-white font-bold text-4xl bg-[#4c1e4f] flex justify-center">
            Mercato Solar Panel Inc.
        </div>

        <div className=" w-full h-32 border  flex justify-between">
            <div className="border h-full w-1/4 bg-[#4c1e4f] flex flex-col overflow-auto text-white text-sm pl-3">
                
                <div>{details.first}</div>
                <div>{details.second}</div>
                <div>{details.house}</div>
                <div>{details.street}</div>
                <div>{details.city}</div>
                <div>{details.postcode}</div>
            </div>
            <div className="border h-full w-1/4 bg-[#4c1e4f] overflow-auto text-white text-4xl pl-3">
              <div>This order is for:</div>
            <div>{details.delColl}</div>
            </div>
        </div>
        <table className="secondTable w-full border text-xs bg-white">
              <thead>
                <tr >
                  <th className="border"><span >Qty</span></th>
                  <th className="border"><span >Part</span></th>
                  <th className="border"><span >Single £</span></th>
                  <th className="border"><span >Total £</span></th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Module}</a><span ></span></td>
                  <td className="border text-center w-3/5"><span >{details.module}</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts[details.module]).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts[details.module])*details.numModules).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Inverter}</a><span ></span></td>
                  <td className="border text-center"><span >{details.inverter}</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts[details.inverter]).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{(parts[details.inverter]).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.DCIsolator}</a><span ></span></td>
                  <td className="border text-center"><span >DC Isolator</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.DCIsolator).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.DCIsolator)*qty.DCIsolator).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.ACIsolator}</a><span ></span></td>
                  <td className="border text-center"><span >AC Isolator</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.ACIsolator).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.ACIsolator)*qty.ACIsolator).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Bolts}</a><span ></span></td>
                  <td className="border text-center"><span >Bolts</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.Bolts).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.Bolts)*qty.Bolts).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Screws}</a><span ></span></td>
                  <td className="border text-center"><span >Screws</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.Screws).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.Screws)*qty.Screws).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Washers}</a><span ></span></td>
                  <td className="border text-center"><span >Washers</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.Washers).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.Washers)*qty.Washers).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Rails15m}</a><span ></span></td>
                  <td className="border text-center"><span >Rails 1.5M</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.Rails15m).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.Rails15m)*qty.Rails15m).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Rails1m}</a><span ></span></td>
                  <td className="border text-center"><span >Rails 1M</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.Rails1m).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.Rails1m)*qty.Rails1m).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Rails05m}</a><span ></span></td>
                  <td className="border text-center"><span >Rails 0.5M</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.Rails05m).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.Rails05m)*qty.Rails05m).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.WarningLabels}</a><span ></span></td>
                  <td className="border text-center"><span >Warning Labels</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.WarningLabels).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.WarningLabels)*qty.WarningLabels).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Hooks}</a><span ></span></td>
                  <td className="border text-center"><span >Hooks</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{parts.Hooks}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.Hooks)*qty.Hooks).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut">{qty.Cable}</a><span ></span></td>
                  <td className="border text-center"><span >Cable (10m)</span></td>
                  <td className="border text-center"><span data-prefix>£</span><span >{(parts.Cable).toFixed(2)}</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{((parts.Cable)*qty.Cable).toFixed(2)}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut"></a><span ></span></td>
                  <td className="border text-center"><span ></span></td>
                  <td className="border text-center"><span data-prefix></span><span >Total Exc VAT</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{totalExc}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut"></a><span ></span></td>
                  <td className="border text-center"><span ></span></td>
                  <td className="border text-center"><span data-prefix></span><span >VAT 20%</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{vat}</span></td>
                  
                </tr>
                <tr>
                  <td className="border text-center"><a class="cut"></a><span ></span></td>
                  <td className="border text-center"><span ></span></td>
                  <td className="border text-center font-bold"><span data-prefix></span><span >Total Inc VAT</span></td>
                  <td  className="border text-center"><span data-prefix>£</span><span >{(Number(vat)+Number(totalExc)).toFixed(2)}</span></td>
                  
                </tr>
              </tbody>
            </table>
        
           <div className=" grid grid-cols-3 gap-32 mt-10">

              
                <button className="bg-[#f5b82e] hover:bg-[#E8AE2A] text-white font-bold py-2 px-4 rounded" onClick={handlePrint}>Print</button>
                <button className="bg-[#f5b82e] hover:bg-[#E8AE2A] text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Place Order</button>
                <button className="bg-[#f5b82e] hover:bg-[#E8AE2A] text-white font-bold py-2 px-4 rounded" onClick={()=>setIsOpen(!isOpen)}>Close</button>
           </div>

        </div>
        </>
    )
}