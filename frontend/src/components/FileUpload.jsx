
export default function FileUpload({ setSeq1, setSeq2, setTextFromFile, n }) {
  // Función para manejar la carga de archivos
  const handleFileUpload = (e, setSeq) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setSeq(event.target.result);
    };
    reader.readAsText(file);
  };

  if (n === 1) {
    return (
      <div>
        <label>Archivo Secuencia: </label>
        <input type="file" onChange={(e) => handleFileUpload(e, setTextFromFile || setSeq1)} />
      </div>
    );
  }
  else if (n === 2) {
    return (
      <div>
        <label>Archivo Secuencia 1: </label>
        <input type="file" onChange={(e) => handleFileUpload(e, setSeq1)} />
        <label>Archivo Secuencia 2: </label>
        <input type="file" onChange={(e) => handleFileUpload(e, setSeq2)} />
      </div>
    );
  }
  else {
    return console.error("Error: el indicador n debe ser 1 o 2");
  }
}
