import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const QuasarTemplate = ({ data, accentColor }) => {
  return (
    <div
      className="max-w-4xl mx-auto text-gray-200 leading-relaxed"
      style={{ backgroundColor: "#1f2937" }}
    >
      {/* Header */}
      <header className="p-8 text-center border-b border-gray-600">
        <h1 className="text-4xl font-bold mb-2" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-xl text-gray-400 mb-4">
          {data.personal_info?.job_title}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-gray-400">
          {data.personal_info?.email && <span>{data.personal_info.email}</span>}
          {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
          {data.personal_info?.location && (
            <span>{data.personal_info.location}</span>
          )}
        </div>
      </header>

      <div className="p-8">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-8">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: accentColor }}
            >
              Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-semibold mb-6"
              style={{ color: accentColor }}
            >
              Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-4 pl-4"
                  style={{ borderColor: accentColor }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-white">
                      {exp.position}
                    </h3>
                    <span className="text-gray-400">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-2 font-medium">
                    {exp.company}
                  </p>
                  {exp.description && (
                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <section className="mb-8">
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: accentColor }}
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded text-gray-200 text-sm"
                  style={{ backgroundColor: accentColor }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <section>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: accentColor }}
            >
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-white">{edu.degree}</h3>
                  <p className="text-gray-300">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">
                    {formatDate(edu.graduation_date)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default QuasarTemplate;
