"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  { category: "Actions", title: "Button", src: "/assets/comp-01-actions.png" },
  { category: "Forms", title: "Text fields", src: "/assets/comp-02-forms-text.png" },
  { category: "Forms", title: "Toggles", src: "/assets/comp-03-forms-toggles.png" },
  { category: "Feedback", title: "Toasts, Alerts & Dialog", src: "/assets/comp-04-feedback.png" },
  { category: "Navigation", title: "Header, Tabs & Breadcrumb", src: "/assets/comp-05-navigation.png" },
  { category: "Data display", title: "Table, Accordion, Tooltip & Avatar", src: "/assets/comp-06-data-display.png" },
];

export default function ComponentCarousel() {
  const [index, setIndex] = useState(0);
  const goTo = (i: number) => setIndex(((i % slides.length) + slides.length) % slides.length);

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        <div className="carousel-track">
          {slides.map((slide, i) => (
            <Image
              key={slide.title}
              src={slide.src}
              alt={slide.title}
              fill
              className={i === index ? "active" : ""}
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          ))}
        </div>
        <button className="carousel-arrow prev" aria-label="Previous" onClick={() => goTo(index - 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button className="carousel-arrow next" aria-label="Next" onClick={() => goTo(index + 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className="carousel-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            aria-label={slide.title}
            className={i === index ? "active" : ""}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
