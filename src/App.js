import FormWrapper from "./components/FormWrapper";
import useMultyStep from "./hooks/useMultyStep";
import Home from "./components/Home";
import PrivateInfo from "./components/form components/PrivateInfo";
import ExperianceWrapper from "./components/form components/ExperianceWrapper";

function App() {
  const { currentStep, step } = useMultyStep([
    <Home />,
    <FormWrapper title="პირადი ინფო">
      <PrivateInfo />
    </FormWrapper>,
    <FormWrapper title="გამოცდილება">
      <ExperianceWrapper />
    </FormWrapper>,
    <FormWrapper title="განათლება">
      <PrivateInfo />
    </FormWrapper>,
  ]);

  return (
    <div
      className={`${
        currentStep === 0 && "bacgkroundImage"
      } bg-no-repeat bg-center bg-cover   `}
    >
      <div className="m-auto">{step}</div>
    </div>
  );
}

export default App;
