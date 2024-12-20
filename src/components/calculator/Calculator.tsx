import Controller from "./Controller";
import Screen from "./Screen";

const Calculator = () => {
  return (
    <div className="max-w-[700px] rounded-md shadow-md bg-[--surface-s] p-4 space-y-8 mx-auto">
      <Screen />
      <Controller />
    </div>
  );
};

export default Calculator;
