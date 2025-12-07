import React from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";
import CelestialTemplate from "./templates/CelestialTemplate";
import GalaxyTemplate from "./templates/GalaxyTemplate";
import AstralTemplate from "./templates/AstralTemplate";
import EclipseTemplate from "./templates/EclipseTemplate";
import AstralisTemplate from "./templates/AstralisTemplate";
import OrbitTemplate from "./templates/OrbitTemplate";
import CometTemplate from "./templates/CometTemplate";
import SolsticeTemplate from "./templates/SolsticeTemplate";
import PulsarTemplate from "./templates/PulsarTemplate";
import QuasarTemplate from "./templates/QuasarTemplate";
import NebularTemplate from "./templates/NebularTemplate";
import NovaTemplate from "./templates/NovaTemplate";
import AuroraTemplate from "./templates/AuroraTemplate";
import HyperionTemplate from "./templates/HyperionTemplate";
import LunarTemplate from "./templates/LunarTemplate";
import StellarTemplate from "./templates/StellarTemplate";
import ZenithTemplate from "./templates/ZenithTemplate";
import AetherTemplate from "./templates/AetherTemplate";
import NebulaTemplate from "./templates/NebulaTemplate";
import EonTemplate from "./templates/EonTemplate";
import CosmosTemplate from "./templates/CosmosTemplate";
import StarburstTemplate from "./templates/StarburstTemplate";
import ExoplanetTemplate from "./templates/ExoplanetTemplate";

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {
  console.log("RECEIVED TEMPLATE:", template);
  const renderTemplate = () => {
    const templatesMap = {
      modern: ModernTemplate,
      minimal: MinimalTemplate,
      "minimal-image": MinimalImageTemplate,
      celestial: CelestialTemplate,
      galaxy: GalaxyTemplate,
      astral: AstralTemplate,
      eclipse: EclipseTemplate,
      astralis: AstralisTemplate,
      orbit: OrbitTemplate,
      comet: CometTemplate,
      solstice: SolsticeTemplate,
      pulsar: PulsarTemplate,
      quasar: QuasarTemplate,
      nebular: NebularTemplate,
      nova: NovaTemplate,
      aurora: AuroraTemplate,
      hyperion: HyperionTemplate,
      lunar: LunarTemplate,
      stellar: StellarTemplate,
      zenith: ZenithTemplate,
      aether: AetherTemplate,
      nebula: NebulaTemplate,
      eon: EonTemplate,
      cosmos: CosmosTemplate,
      starburst: StarburstTemplate,
      exoplanet: ExoplanetTemplate,
      classic: ClassicTemplate,
    };

    const Component = templatesMap[template];
    if (!Component) {
      console.warn(
        `ResumePreview: no template component found for '${template}'`
      );
      return <ClassicTemplate data={data} accentColor={accentColor} />;
    }

    return <Component data={data} accentColor={accentColor} />;
  };

  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        data-template={template}
        className={
          "border border-gray-200 print:shadow-none print:border-none " +
          classes
        }
      >
        {/* Debug badge: shows selected template id */}
        <div className="absolute top-2 right-2 bg-white/80 text-xs text-slate-700 px-2 py-1 rounded border border-gray-200 z-10">
          {template || "(none)"}
        </div>
        {renderTemplate()}
      </div>
      <style>
        {`
          @page {
            size: letter;
            margin: 0;
          }
          @media print {
            html,
            body {
              width: 8.5in;
              height: 11in;
              overflow: hidden;
            }
            body * {
              visibility: hidden;
            }
            #resume-preview,
            #resume-preview * {
              visibility: visible;
            }
            #resume-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: auto;
              margin: 0;
              padding: 0;
              box-shadow: none !important;
              border: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResumePreview;
