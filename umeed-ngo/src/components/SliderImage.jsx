import React, { useState, useEffect } from "react";

// 7 high-quality children/NGO images from Unsplash
const images = [
  "1.jpg", // Children smiling
  "2.jpg", // Volunteers helping
  "3.jpg", // Education support
  "4.jpg", // Charity donation
  "5.jpg", // Community outreach
  "6.jpg", // Helping hands
  "7.jpg", // Education support
];

function SliderImage() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            opacity: index === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            position: index === current ? "relative" : "absolute",
            width: "100%",
          }}
        >
          {index === current && (
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "80vh",
                objectFit: "cover",
                display: "block",
              }}
            />
          )}
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ❯
      </button>

      {/* Navigation Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              height: "12px",
              width: "12px",
              borderRadius: "50%",
              display: "inline-block",
              cursor: "pointer",
              backgroundColor: current === index ? "#004D40" : "#bbb",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default SliderImage;
