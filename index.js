let engineIndicatorLight = !'red blinking';
let fuelLevel = 20001;
let engineTemperature = 2400;


// 5) Implement the following checks using if/else if/else statements:
//e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 
if(fuelLevel < 1000 || engineTemperature> 3500 || engineIndicatorLight==="red blinking")
{
  console.log("ENGINE FAILURE IMMINENT!" )
}
if(fuelLevel > 20000 && engineTemperature<= 2500)
   {
    console.log("Full tank. Engines good.")
    }
//f) Otherwise, print "Fuel and engine status pending..." */
else {
  console.log("Fuel and engine status pending..." )
}
  //b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."
if(fuelLevel > 10000 && engineTemperature<= 2500)
            {
              console.log("Fuel level above 50%.  Engines good.")
            }
//d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."
   if(fuelLevel <= 5000 || engineTemperature>= 2500)
      {
          console.log("Check fuel level. Engines running hot.")
      }
      //c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."
      if(fuelLevel > 5000 && engineTemperature<= 2500)
      {
        console.log("Fuel level above 25%. Engines good.")
      }
          
                //a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."
                

// Code 5a - 5f here:



// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.
let commandOverride = false
if (fuelLevel>20000 && engineIndicatorLight!=='red blinking' ||commandOverride){
  console.log("Cleared to launch!")
}
else{
  console.log("Launch scrubbed!")
}

// 6) b) Code the following if/else check:

