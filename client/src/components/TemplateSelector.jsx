import { Layout } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "A clean, traditional resume format with clear sections and professional typography",
    },
    {
      id: "modern",
      name: "Modern",
      preview:
        "Sleek design with strategic use of color and modern font choices",
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with a single image and clean typography",
    },
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra-clean design that puts your content front and center",
    },
    {
      id: "celestial",
      name: "Celestial",
      preview:
        "Soft neutral tones with refined typography for a sophisticated and professional feel",
    },
    {
      id: "galaxy",
      name: "Galaxy",
      preview:
        "A visually striking resume template, perfect for illustrating the breadth and depth of your expertise",
    },
    {
      id: "astral",
      name: "Astral",
      preview:
        "Includes a prominent profile image for a personal touch while maintaining professionalism",
    },
    {
      id: "eclipse",
      name: "Eclipse",
      preview:
        "A mysterious and powerful CV template, emphasizing key accomplishments and milestones",
    },
    {
      id: "astralis",
      name: "Astralis",
      preview:
        "A modern and professional resume template with a clean and structured layout",
    },
    {
      id: "orbit",
      name: "Orbit",
      preview:
        "A dynamic, well-structured resume template, highlighting a balanced journey through your career milestones",
    },
    {
      id: "comet",
      name: "Comet",
      preview:
        "Vibrant resume template with a dynamic color scheme and eye-catching accents",
    },
    {
      id: "solstice",
      name: "Solstice",
      preview:
        "A unique, well-crafted resume template that reflects your individuality and expertise",
    },
    {
      id: "pulsar",
      name: "Pulsar",
      preview:
        "A bold and radiant resume template, perfect for professionals who aim to leave a lasting impact",
    },
    {
      id: "quasar",
      name: "Quasar",
      preview:
        "A cutting-edge resume template, ideal for tech-savvy professionals with a focus on innovation",
    },
    {
      id: "nebular",
      name: "Nebular",
      preview:
        "A contemporary, visually appealing resume template that enhances your personal brand",
    },
    {
      id: "nova",
      name: "Nova",
      preview:
        "A bold and impactful CV template, designed to highlight transformative career moments",
    },
    {
      id: "aurora",
      name: "Aurora",
      preview:
        "An energetic and eye-catching design, ideal for showcasing fast-paced career achievements",
    },
    {
      id: "hyperion",
      name: "Hyperion",
      preview:
        "Strong typography and structured sections create a confident and polished look",
    },
    {
      id: "lunar",
      name: "Lunar",
      preview:
        "A minimalist and elegant resume template, reflecting clarity and precision in your career path",
    },
    {
      id: "stellar",
      name: "Stellar",
      preview:
        "A sleek and polished CV template, emphasizing standout achievements and excellence",
    },
    {
      id: "zenith",
      name: "Zenith",
      preview:
        "A bold and minimalistic resume template, emphasizing clarity and impact",
    },
    {
      id: "aether",
      name: "Aether",
      preview:
        "A sharp and structured resume template that presents your expertise with professionalism",
    },
    {
      id: "nebula",
      name: "Nebula",
      preview:
        "A creative and expansive CV template, ideal for showcasing diverse skills and experiences",
    },
    {
      id: "eon",
      name: "Eon",
      preview:
        "A clean, easy-to-read resume template, making your qualifications the center of attention",
    },
    {
      id: "cosmos",
      name: "Cosmos",
      preview:
        "A comprehensive CV template that provides a broad overview of your professional universe",
    },
    {
      id: "starburst",
      name: "Starburst",
      preview:
        "A modern and professional resume template with a clean and structured layout",
    },
    {
      id: "exoplanet",
      name: "Exoplanet",
      preview:
        "A simple resume template with an organized structure and neat design",
    },
  ];

  return (
    <div className="relative" ref={selectorRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-blue-600 bg-linear-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Layout size={14} />
        <span className="max-sm:hidden">Template</span>
      </button>
      {isOpen && (
        <div className="absolute top-full w-xs p-3 mt-2 space-y-3 bg-white rounded-md border border-gray-200 shadow-sm min-h-[200px] max-h-[380px] overflow-y-auto">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsOpen(false);
              }}
              className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                selectedTemplate === template.id
                  ? "border-blue-400 bg-blue-100"
                  : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"
              } `}
            >
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2">
                  <div className="size-5 bg-blue-400 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}
              <div>
                <h4 className="font-medium text-gray-800">{template.name}</h4>
                <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic">
                  {template.preview}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
