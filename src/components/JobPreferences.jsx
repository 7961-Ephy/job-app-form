import PropTypes from "prop-types";

function JobPreferences({ formData, updateFormData, nextStep, prevStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  return (
    <div className="max-w-[400px] flex flex-col justify-start items-start gap-2 border-2 rounded-lg mx-auto my-3 shadow-sm">
      <form action="" className="p-4">
        <h3 className="text-2xl font-semibold mb-3">Job Details</h3>
        <label htmlFor="Available Jobs" className="block p-2 text-2xl mb-1">
          Position
        </label>
        <div className="flex flex-col gap-2">
          <div>
            <input
              className="p-2"
              type="radio"
              name="position"
              value="Front-End Developer"
              checked={formData.position === "Front-End Developer"}
              onChange={handleChange}
            />
            <label htmlFor="frontend" className="p-2 text-lg mb-1">
              Front-End Developer
            </label>
          </div>
          <div className="">
            <input
              className=""
              type="radio"
              name="position"
              value="Back-End Developer"
              checked={formData.position === "Back-End Developer"}
              onChange={handleChange}
            />
            <label htmlFor="backend" className="p-2 text-lg mb-1">
              Back-End Developer
            </label>
          </div>
          <div className="">
            <input
              className=""
              type="radio"
              name="position"
              value="Fullstack Developer"
              checked={formData.position === "Fullstack Developer"}
              onChange={handleChange}
            />
            <label htmlFor="fullstack" className="p-2 text-lg mb-1">
              Fullstack Developer
            </label>
          </div>
        </div>

        <label htmlFor="Available Jobs" className="block p-2 text-xl mb-1">
          Expected Salary Range
        </label>
        <div className="flex flex-col gap-2">
          <div>
            <input
              type="radio"
              name="salaryRange"
              value="Ksh 20,000 - Ksh 30,000"
              checked={formData.salaryRange === "Ksh 20,000 - Ksh 30,000"}
              onChange={handleChange}
            />
            <label htmlFor="" className="p-2 text-lg mb-1">
              Ksh 20,000 - Ksh 30,000
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              name="salaryRange"
              value="Ksh 30,000 - Ksh 40,000"
              checked={formData.salaryRange === "Ksh 30,000 - Ksh 40,000"}
              onChange={handleChange}
            />
            <label htmlFor="" className="p-2 text-lg mb-1">
              Ksh 30,000 - Ksh 40,000
            </label>
          </div>
          <div className="">
            <input
              type="radio"
              name="salaryRange"
              value="Ksh 40,000 - Ksh 50,000"
              checked={formData.salaryRange === "Ksh 40,000 - Ksh 50,000"}
              onChange={handleChange}
            />
            <label htmlFor="" className="p-2 text-lg mb-1">
              Ksh 40,000 - Ksh 50,000
            </label>
          </div>
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
            type="button"
            className="py-2 px-6 bg-black text-white rounded-md text-center my-6"
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

JobPreferences.propTypes = {
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default JobPreferences;
