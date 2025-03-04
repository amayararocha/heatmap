import React, { useState } from 'react';
import HeatmapComponent from '../heatmapComponent/HeatmapComponent';
import { toastAlerta } from '../utils/toastAlert';

const MainContent = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [data, setData] = useState([]);
  const [objectOfInterest, setObjectOfInterest] = useState('person');

  const handleJsonUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        const formattedData = jsonData.hits.hits.flatMap(hit => {
          return hit.fields['deepstream-msg'].map(msg => {
            const [trackingId, xMin, yMin, xMax, yMax, objectType] = msg.split('|');
            const x = (parseFloat(xMin) + parseFloat(xMax)) / 2;
            const y = (parseFloat(yMin) + parseFloat(yMax)) / 2;
            return {
              trackingId,
              x,
              y,
              value: 1,
              objectType,
            };
          });
        });
        setData(formattedData);
        toastAlerta('JSON carregado com sucesso!', 'sucesso');
      } catch (error) {
        console.error('Error parsing JSON:', error);
        toastAlerta('Erro ao ler o arquivo JSON. Verifique o formato do arquivo.', 'erro');
      }
    };

    if (file) {
      reader.readAsText(file);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
      toastAlerta('Imagem carregada com sucesso!', 'sucesso');
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlSubmit = () => {
    if (imageUrl.trim()) {
      setImage(imageUrl.trim());
      toastAlerta('URL da imagem definida com sucesso!', 'sucesso');
    } else {
      toastAlerta('Por favor, insira uma URL válida.', 'erro');
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-32">
        <div className="max-w-5xl w-full bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload do JSON
            </label>
            <div className="relative">
              <input
                type="file"
                accept=".json"
                onChange={handleJsonUpload}
                id="json-upload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="json-upload"
                className="block px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-blue-600 text-white text-center cursor-pointer hover:bg-blue-700 transition"
              >
                Escolher arquivo JSON
              </label>
            </div>
            <label className="block mb-2 mt-4 text-sm font-medium text-gray-700">
              Upload da Imagem
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="image-upload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <label
                htmlFor="image-upload"
                className="block px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-blue-600 text-white text-center cursor-pointer hover:bg-blue-700 transition"
              >
                Escolher imagem
              </label>
            </div>
            <label className="block mb-2 mt-4 text-sm font-medium text-gray-700">
              Ou insira a URL da imagem
            </label>
            <div className="flex mb-4">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Insira a URL da imagem"
                className="w-1/2 px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleImageUrlSubmit}
                className="w-1/2 px-4 py-2 ml-4 bg-blue-600 text-white rounded"
              >
                Definir URL
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Selecione o objeto de interesse
            </label>
            <select
              onChange={(e) => setObjectOfInterest(e.target.value)}
              value={objectOfInterest}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="person">Pessoa</option>
              <option value="chair">Cadeira</option>
            </select>
          </div>
          {image && data.length > 0 && (
            <div className="relative w-full max-w-[800px] mx-auto">
              <HeatmapComponent
                imageUrl={image}
                data={data}
                objectOfInterest={objectOfInterest}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainContent;
