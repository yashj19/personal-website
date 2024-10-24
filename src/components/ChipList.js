import React from 'react';

const ChipList = ({ chips, color = "#ffac68" }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {chips.map((chip, index) => (
        <div
          key={index}
          className="px-2 py-[0.15rem] text-xs border rounded-full bg-transparent"
          style={{ borderColor: color, color: color }}
        >
          {chip}
        </div>
      ))}
    </div>
  );
};

export default ChipList;
