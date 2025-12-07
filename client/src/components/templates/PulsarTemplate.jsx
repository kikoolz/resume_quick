import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const [year, month] = dateStr.split("-");
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const PulsarTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header
        className="text-center p-8 mb-6 border-b-2"
        style={{ borderColor: accentColor }}
      >
        <div className="flex justify-center items-center gap-4 mb-4">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: accentColor }}
          ></div>
          <h1 className="text-4xl font-bold">
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: accentColor }}
          ></div>
        </div>
        <p className="text-xl text-gray-600 mb-4">
          {data.personal_info?.job_title}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          {data.personal_info?.email && (
            <div className="flex items-center gap-2">
              <Mail className="size-4" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-2">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span>{data.personal_info.location}</span>
            </div>
          )}
        </div>
      </header>

      <div className="p-8">
        {/* Professional Summary */}
        {data.professional_summary && (
          <section className="mb-8">
            <h2
              className="text-2xl font-semibold mb-4 flex items-center gap-3"
              style={{ color: accentColor }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accentColor }}
              ></div>
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
              className="text-2xl font-semibold mb-6 flex items-center gap-3"
              style={{ color: accentColor }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accentColor }}
              ></div>
              Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={index}>
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
                className="text-2xl font-semibold mb-4 flex items-center gap-3"
                style={{ color: accentColor }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                ></div>
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
                className="text-2xl font-semibold mb-4 flex items-center gap-3"
                style={{ color: accentColor }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: accentColor }}
                ></div>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 rounded text-sm border"
                    style={{ borderColor: accentColor }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default PulsarTemplate;
