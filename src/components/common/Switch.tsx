type SwitchProps = {
  isOn: boolean;
  onToggle: () => void;
};

const Switch = ({ isOn, onToggle }: SwitchProps) => {
  return (
    <div
      className={`relative inline-flex items-center h-6 w-12 cursor-pointer ${
        isOn ? "bg-blue-500" : "bg-[--surface-s]"
      } rounded-full transition-colors duration-300`}
      onClick={onToggle}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white dark:bg-[surface-t] rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
};

export default Switch;
