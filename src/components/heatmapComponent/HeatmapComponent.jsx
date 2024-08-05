import React, { useRef, useEffect, useState } from 'react';
import h337 from 'heatmap.js';
import html2canvas from 'html2canvas';

const HeatmapComponent = ({ imageUrl, data, objectOfInterest }) => {
  const imageRef = useRef(null);
  const heatmapContainerRef = useRef(null);
  const [heatmapInstance, setHeatmapInstance] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (heatmapContainerRef.current && !heatmapInstance) {
      const heatmap = h337.create({
        container: heatmapContainerRef.current,
        radius: 20,
        maxOpacity: 0.6,
        minOpacity: 0,
        blur: 0.75,
      });
      setHeatmapInstance(heatmap);
    }
  }, [heatmapContainerRef, heatmapInstance]);

  useEffect(() => {
    if (heatmapInstance && data.length > 0) {
      const points = data
        .filter((item) => item.objectType === objectOfInterest)
        .map((item) => ({
          x: item.x,
          y: item.y,
          value: item.value,
        }));

      const dataObject = {
        max: Math.max(...points.map((p) => p.value)) || 1,
        data: points,
      };
      heatmapInstance.setData(dataObject);
    }
  }, [heatmapInstance, data, objectOfInterest]);

  const downloadImage = async () => {
    if (imageLoaded) {
      html2canvas(heatmapContainerRef.current, { useCORS: true }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'heatmap.png';
        link.click();
      });
    } else {
      console.log("Imagem não carregada ainda.");
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      <div ref={heatmapContainerRef} className="relative w-[800px] h-[700px]">
        <img
          ref={imageRef}
          src={imageUrl}
          alt="Imagem Base"
          className="w-full h-full absolute top-0 left-0 object-cover"
          onLoad={handleImageLoad}
        />
      </div>
      <button className="mt-4 px-6 w-full py-2 bg-blue-700 text-white font-bold rounded hover:bg-blue-800 transition" onClick={downloadImage}>Download Heatmap</button>
    </div>
  );
};

export default HeatmapComponent;
