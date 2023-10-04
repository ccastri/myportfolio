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
    <span className="mx-auto " onClick={handleDownload}>Curriculum</span>
  );
};

export default CVButton;