import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const SolsticeTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header className="p-8 border-b-4" style={{ borderColor: accentColor }}>
        <h1 className="text-4xl font-bold mb-2">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          {data.personal_info?.job_title}
        </p>
        <div className="flex flex-wrap gap-6 text-gray-600">
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
            <p className="text-gray-700 leading-relaxed">
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
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-600">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </span>
                  </div>
                  {exp.description && (
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education & Skills */}
        <div className="grid grid-cols-2 gap-8">
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
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-gray-700">{edu.institution}</p>
                    <p className="text-gray-600 text-sm">
                      {formatDate(edu.graduation_date)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills && data.skills.length > 0 && (
            <section>
              <h2
                className="text-2xl font-semibold mb-4"
                style={{ color: accentColor }}
              >
                Skills
              </h2>
              <ul className="space-y-2">
                {data.skills.map((skill, index) => (
                  <li key={index} className="text-gray-700">
                    • {skill}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolsticeTemplate;
