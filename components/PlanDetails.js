import React from "react";
import Plan from "./Plan";

function PlanDetails() {
  return (
    <div className="">
      {/* Left section */}
      <section className="flex flex-row justify-between">
        <div className="flex flex-col space-y-3">
          <p className="font-Poppins text-xl mb-6 text-gray-600">
            Plan Description
          </p>
          <Plan name="Plot type" type="text" placeholder="" ref={plotTypeRef} />
          <Plan
            name="Plot Area"
            type="number"
            placeholder="sqft"
            ref={plotAreaRef}
          />
          <Plan
            name="Total buildup Area"
            type="number"
            placeholder="sqft"
            ref={buildupAreaRef}
          />
          <Plan name="width" type="number" placeholder="ft" ref={widthRef} />
          <Plan name="length" type="number" placeholder="ft" ref={lengthRef} />
          <Plan
            name="type of building"
            type="text"
            placeholder=""
            ref={typeOfBuildingRef}
          />
          <Plan
            name="Building Category"
            type="text"
            placeholder=""
            ref={buildingCategoryRef}
          />
          <Plan name="Style" type="text" placeholder="" ref={styleRef} />
          <Plan
            name="Estimated Cost Of Construction"
            type="text"
            placeholder=""
            ref={estimatedCostRef}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <p className="font-Poppins text-xl mb-6 text-gray-600">
            Floor Description
          </p>
          <Plan
            name="Bedrooms"
            type="number"
            placeholder=""
            ref={bedroomsRef}
          />
          <Plan
            name="Living Room"
            type="number"
            placeholder=""
            ref={livingRoomRef}
          />
          <Plan name="Kitchen" type="number" placeholder="" ref={kitchenRef} />
          <Plan
            name="Staircase"
            type="number"
            placeholder=""
            ref={staircaseRef}
          />
          <Plan
            name="Staircase From"
            type="text"
            placeholder=""
            ref={staircaseFromRef}
          />
          <Plan name="Toilet" type="number" placeholder="" ref={toiletRef} />
          <Plan name="Bath" type="number" placeholder="" ref={bathRef} />
          <Plan
            name="Parking Type"
            type="text"
            placeholder=""
            ref={ParkingTypeRef}
          />
        </div>
      </section>
    </div>
  );
}

export default PlanDetails;
