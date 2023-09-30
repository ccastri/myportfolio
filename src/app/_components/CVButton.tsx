'use client'
const CVButton = () => {
  const handleDownload = () => {
    // Aquí puedes proporcionar la ruta relativa al archivo PDF en tu proyecto
    const pdfFilePath = '/CV_BM_SWD.pdf';

    // Crea un elemento 'a' (enlace) oculto para descargar el archivo
    const a = document.createElement('a');
    a.href = pdfFilePath;
    a.download = 'CV_CAMILO_CASTRILLON_BIOMEDICAL-SOFTWARE_ENG.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <button className="" onClick={handleDownload}>Download CV</button>
  );
};

export default CVButton;