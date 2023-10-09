import React from 'react';

const DevServiceOptions = () => {
  const itemsPersonalizables = [
    { "id": "PP", "name": "Plataformas paciente" },
    { "id": "EMR", "name": "Registros Medicos Electrónicos" },
    { "id": "EHR", "name": "Registros de Salud Electrónicos" },
    { "id": "AV", "name": "Asistentes virtuales" },
    { "id": "SD", "name": "Soporte Diagnóstico con IA" },
    { "id": "AR", "name": "Simulaciones Clínicas y Realidad Aumentada" },
  ];

  return (
    <div className="bg-[#f1f1f1] w-screen flex flex-col h-full p-8 overflow-hidden">
      <h2 className="w-full text-xl sm:text-center sm:text-25xl mx-auto sm:w-10/12">
        La reforma de salud nos está preparando para la reconstrucción de un sistema
        de salud robusto, por lo que el software que soporta tu operación debe ser versátil
        y altamente personalizable.
      </h2>
      <div className="sm:grid grid-cols-3 gap-24 space-y-20 sm:space-y-0 justify-center py-12 items-center px-9 w-full">
        {itemsPersonalizables.map((item) => (
          <div className="text-center my-auto rounded-[16px]  text-base h-full font-bold relative flex flex-col justify-center items-center">
            <span className="text-[80px] mx-auto  border-black w-full font-semibold opacity-10 absolute">
              {item.id}
            </span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <p className="w-full sm:text-center">
        Son solo algunas de las múltiples opciones exploradas por profesionales alrededor del mundo hasta el día de hoy.
      </p>
    </div>
  );
};

export default DevServiceOptions;
