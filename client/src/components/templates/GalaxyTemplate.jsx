import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const GalaxyTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          {data.personal_info?.job_title}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {data.professional_summary && (
        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-4 text-center"
            style={{ color: accentColor }}
          >
            Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* Experience with Timeline */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-6 text-center"
            style={{ color: accentColor }}
          >
            Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  {index < data.experience.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 mt-1"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{exp.position}</h3>
                    <span className="text-gray-600">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-2 font-medium">
                    {exp.company}
                  </p>
                  {exp.description && (
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-8">
          <h2
            className="text-2xl font-semibold mb-6 text-center"
            style={{ color: accentColor }}
          >
            Education
          </h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  {index < data.education.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 mt-1"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <span className="text-gray-600">
                      {formatDate(edu.graduation_date)}
                    </span>
                  </div>
                  <p className="text-gray-700">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills && data.skills.length > 0 && (
        <section>
          <h2
            className="text-2xl font-semibold mb-4 text-center"
            style={{ color: accentColor }}
          >
            Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {data.skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 border rounded-full text-sm"
                style={{ borderColor: accentColor }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default GalaxyTemplate;
