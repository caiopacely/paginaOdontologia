import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const MyComponent = ({ onDateChange }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (date) => {
    setSelected(date);
    if (onDateChange) onDateChange(date); // 👈 avisa o componente pai
  };

  return (
    <div className="p-4">
      <div className="scale-90 sm:scale-100 md:scale-110"> {/* controla o tamanho */}
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}
        />
      </div>
      {selected && (
        <p className="text-sm text-gray-700 flex justify-center md:mt-6">
          Data selecionada: {selected.toLocaleDateString("pt-BR")}
        </p>
      )}
    </div>
  );
};

export default MyComponent;
