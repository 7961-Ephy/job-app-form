import PropTypes from "prop-types";

function WorkExperience({ formData, updateFormData, prevStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  // Handle checkbox changes for skills
  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      updateFormData({ skills: [...formData.skills, value] });
    } else {
      updateFormData({
        skills: formData.skills.filter((skill) => skill !== value),
      });
    }
  };

  // Handle Submit button
  const handleSubmit = () => {
    alert("Form Submitted Successfully!");
  };
  return (
    <div className="max-w-[400px] flex flex-col justify-start items-start gap-2 border-2 rounded-lg mx-auto my-3 shadow-sm">
      <form action="" className="p-4">
        <h3 className="text-2xl font-semibold mb-3">Work Experience</h3>
        <label htmlFor="job" className="block p-2 text-xl mb-1">
          Job Title
        </label>
        <input
          className=" w-72 p-2 flex rounded-md text-black border"
          type="text"
          name="previousJobTitle"
          value={formData.previousJobTitle}
          onChange={handleChange}
          placeholder="Junior Front-End Developer"
        />
        <label htmlFor="experience" className="block p-2 text-xl mt-3 mb-1">
          Years of Experience
        </label>
        <input
          className="p-2 flex w-72 rounded-md text-black border"
          type="number"
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          placeholder="Experience in years"
        />
        <label htmlFor="experience" className="block p-2 text-xl mt-3 mb-1">
          Skills
        </label>
        <div className="flex flex-col gap-2">
          {[
            "Typescript",
            "React Js",
            "Next Js",
            "Python-Django",
            "Node Js - Express Js",
          ].map((skill, index) => (
            <div key={skill}>
              <input
                type="checkbox"
                id={`skill-${index}`}
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleSkillChange}
              />
              <label htmlFor={`skill-${index}`} className="p-2 text-lg mb-1">
                {skill}
              </label>
            </div>
          ))}
          {/* <div className="">
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="p-2 text-lg mb-1">
              Typescript
            </label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="p-2 text-lg mb-1">
              React Js
            </label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="p-2 text-lg mb-1">
              Next Js
            </label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="p-2 text-lg mb-1">
              Python-Django
            </label>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="p-2 text-lg mb-1">
              Node Js - Express Js
            </label>
          </div> */}
        </div>
        <div className="w-[360px] flex justify-between items-center">
          <button
            type="button"
            className="py-2 px-6 bg-black text-white rounded-md text-center my-6"
            onClick={prevStep}
          >
            Back
          </button>
          <button
            type="submit"
            className="py-2 px-6 bg-black text-white rounded-md text-center my-6"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

WorkExperience.propTypes = {
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default WorkExperience;
