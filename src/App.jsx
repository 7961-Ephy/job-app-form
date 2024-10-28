import { useState } from "react";

import PersonalDetails from "./components/PersonalDetails";
import JobPreferences from "./components/JobPreferences";
import WorkExperience from "./components/WorkExperience";

function App() {
  // Manage which form we are in.
  const [currentStep, setCurrentStep] = useState(1);
  // Manage Data user keys in
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    position: "",
    salaryRange: "",
    previousJobTitle: "",
    yearsOfExperience: "",
    skills: [],
  });

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetails
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <JobPreferences
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <WorkExperience
            formData={formData}
            updateFormData={updateFormData}
            prevStep={prevStep}
          />
        );
      default:
        return (
          <div className="text-3xl font-bold text-center p-2">
            Form Complete
          </div>
        );
    }
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-center p-2">
          Job Application Form
        </h1>
        {renderStep()}
        {/* <PersonalDetails />
        <JobPreferences />
        <WorkExperience /> */}
      </div>
    </>
  );
}

export default App;
