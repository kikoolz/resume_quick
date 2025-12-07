import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const ZenithTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white text-gray-800 leading-relaxed p-8">
      {/* Header */}
      <header
        className="text-center mb-8 border-b-2 pb-6"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-4xl font-black mb-2 tracking-tight">
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-lg text-gray-600 mb-4">
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
            className="text-xl font-black mb-4 uppercase tracking-wide"
            style={{ color: accentColor }}
          >
            Profile
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
            className="text-xl font-black mb-6 uppercase tracking-wide"
            style={{ color: accentColor }}
          >
            Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-black text-lg">{exp.position}</h3>
                  <span className="text-gray-600 font-medium">
                    {formatDate(exp.start_date)} -{" "}
                    {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                <p className="text-gray-700 mb-2 font-medium">{exp.company}</p>
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
              className="text-xl font-black mb-4 uppercase tracking-wide"
              style={{ color: accentColor }}
            >
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-black">{edu.degree}</h3>
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
              className="text-xl font-black mb-4 uppercase tracking-wide"
              style={{ color: accentColor }}
            >
              Skills
            </h2>
            <div className="space-y-2">
              {data.skills.map((skill, index) => (
                <div key={index} className="text-gray-700 font-medium">
                  • {skill}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ZenithTemplate;
