import React from "react";

function Plan({ name, type, placeholder, ref }) {
  return (
    <div className="">
      {/* Left section */}
      <section>
        <div className="flex font-Poppins">
          <p className="text-gray-600">{name}</p>
          <input
            type={type}
            name=""
            id=""
            ref={ref}
            className="input appearance-none"
            placeholder={placeholder}
          />
        </div>
      </section>
    </div>
  );
}

export default Plan;
