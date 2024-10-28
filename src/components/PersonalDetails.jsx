import PropTypes from "prop-types";

function PersonalDetails({ formData, updateFormData, nextStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <div className="max-w-[400px] flex flex-col justify-start items-start gap-2 border-2 rounded-lg mx-auto my-3 shadow-sm">
      <form action="" className="p-4">
        <h3 className="text-2xl font-semibold mb-3">Personal Details</h3>
        <label htmlFor="firstname" className="block p-2 text-xl mb-1">
          First Name
        </label>
        <input
          className=" w-72 p-2 flex rounded-md text-black border"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="John"
        />
        <label htmlFor="lastname" className="block p-2 text-xl mt-3 mb-1">
          Last Name
        </label>
        <input
          className="p-2 flex w-72 rounded-md text-black border"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Doe"
        />
        <label htmlFor="email" className="block p-2 text-xl mt-3 mb-1">
          Email
        </label>
        <input
          className="p-2 flex w-72 rounded-md text-black border"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
        <button
          type="button"
          className="py-2 px-6 bg-black text-white rounded-md text-center my-6"
          onClick={nextStep}
        >
          Next
        </button>
      </form>
    </div>
  );
}

PersonalDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PersonalDetails;
