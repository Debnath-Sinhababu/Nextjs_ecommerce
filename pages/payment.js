import Checkoutwizard from "../components/checkoutwizard";
import Navbar from "../components/navbar";

export default function Payment(){
    return(
        <div>
            <Navbar/>
            <div className="mt-20 w-screen h-screen flex flex-col items-center">
                <div className="w-full">
            <Checkoutwizard activestep={2}/>
            </div>
            <div className="flex flex-col ">
                <h3 className="mb-10">Payments Options</h3>
            <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Paypal
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Stripe
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
   Cash on delhivery
  </label>
</div>
<div className="flex justify-between">
<button className=" text-black  px-2 bg-[#FFD700] mt-2 outline-none border-none py-1" > Back
          </button>
          <button className=" text-black  px-2 bg-[#FFD700] mt-2 outline-none border-none py-1" > Next
          </button>
</div>
            </div>
            </div>
        </div>
    )
}