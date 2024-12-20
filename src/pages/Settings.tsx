import Switch from "../components/common/Switch";
import Title from "../components/common/Title";
import { useSettingsContext } from "../contexts/SettingsContext";

const Settings = () => {
  const { isDark, setIsDark } = useSettingsContext();
  return (
    <div>
      <Title title="settings" />

      <div className="space-y-2">
        <h4 className="text-[--text-p]">dark theme</h4>
        <Switch isOn={isDark} onToggle={() => setIsDark((p) => !p)} />
      </div>
    </div>
  );
};

export default Settings;
