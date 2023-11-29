import React from 'react';

const DevServiceOptions = () => {
 const customizableItems = [
  { "id": "PP", "name": "Patient Platforms" },
  { "id": "EMR", "name": "Electronic Medical Records" },
  { "id": "EHR", "name": "Electronic Health Records" },
  { "id": "AV", "name": "Virtual Assistants" },
  { "id": "SD", "name": "AI Diagnostic Support" },
  { "id": "AR", "name": "Clinical Simulations and Augmented Reality" },
];

return (
  <div className="bg-[#f1f1f1] w-screen flex flex-col h-full p-8 overflow-hidden">
    <h2 className="w-full text-xl sm:text-center sm:text-25xl mx-auto sm:w-10/12">
      Healthcare reform is preparing us for the reconstruction of a robust healthcare system, so the software supporting your operation must be versatile and highly customizable.
    </h2>
    <div className="sm:grid grid-cols-3 gap-24 space-y-20 sm:space-y-0 justify-center py-12 items-center px-9 w-full">
      {customizableItems.map((item) => (
        <div
          key={item.id}
          className="text-center my-auto rounded-[16px] text-base h-full font-bold relative flex flex-col justify-center items-center"
        >
          <span className="text-[80px] mx-auto border-black w-full font-semibold opacity-10 absolute">
            {item.id}
          </span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
    <p className="w-full sm:text-center">
      These are just some of the multiple options explored by professionals around the world up to the present day.
    </p>
  </div>
);
      }

export default DevServiceOptions;
