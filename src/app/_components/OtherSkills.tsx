import React from 'react';
import CircularProgressBar from './progressBar';

const OtherSkills = () => {
  return (
    <div className=' h-full space-y-16 p-8 py-20 flex flex-col  bg-[#F1F1F1] w-screen items-center justify-center'>
      <h1 className="text-2xl">Un poco de mi experiencia y habilidades...</h1>
      <div className="flex sm:flex-row space-y-16 flex-col">

            <CircularProgressBar
        title='Lenguajes de programacion'
        data={{
          labels: ["TypeScript", "JavaScript", "Python"],
          values: [20, 30, 50],
          bgColors: ["#75c0c0", "#ff6384", "#ffcd56"],
        }}
      />
      <CircularProgressBar
        title='Diseño 3D e Imagenes Medicas'
        data={{
          labels: ["Freesurfer", "FSL", "3DSlicer", "Mimmics Innovation", '3matic', "SolidWorks"],
          values: [25, 10, 29, 8, 10, 18],
          bgColors: ["#0602ff","#02c4ff","#f0850a", "#bbbbbb", "#eeeeee", "#ee0909" ],
        }}
      />
      <CircularProgressBar
        title='Ingenieria Clinica'
        data={{
          labels: ["Ventas", "Digitalizacion", "Cronogramas de Mantenimiento"],
          values: [5, 15, 25],
          bgColors: [" #8BC34A", "#4CAF50", "#388E3C"],
        }}
      />
      </div>
    </div>
  );
}

export default OtherSkills;
