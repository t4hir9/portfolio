import React from "react";

const MediaCard = ({ media, index }) => {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <img
        src={media.src}
        alt={`Photo ${index + 1}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default MediaCard;