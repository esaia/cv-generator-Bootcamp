import FormWrapper from "./components/FormWrapper";
import useMultyStep from "./hooks/useMultyStep";
import Home from "./components/Home";
import PrivateInfo from "./components/form components/PrivateInfo";
import ExperianceWrapper from "./components/form components/ExperianceWrapper";
import EducationWrapper from "./components/form components/EducationWrapper";
import FinalCvPage from "./components/FinalCvPage";
import "./index.css";
import useFormContext from "./hooks/useFormContext";

function App() {
  const { step } = useMultyStep([
    <Home />,
    <FormWrapper title="პირადი ინფო">
      <PrivateInfo />
    </FormWrapper>,
    <FormWrapper title="გამოცდილება">
      <ExperianceWrapper />
    </FormWrapper>,
    <FormWrapper title="განათლება">
      <EducationWrapper />
    </FormWrapper>,
    <FinalCvPage />,
  ]);

  const { currentStep } = useFormContext();

  return (
    <div
      className={`${
        currentStep === 0 && "bg-homeBackground"
      } bg-no-repeat bg-center bg-cover font-helvetic`}
    >
      <div className="m-auto">{step}</div>
    </div>
  );
}

export default App;
