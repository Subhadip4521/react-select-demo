import { useState } from "react";
import "./App.css";
import Select from "react-select";

const options = [
  {
    value: "india",
    label: "India",
  },
  {
    value: "pakistan",
    label: "Pakistan",
  },
  {
    value: "rassia",
    label: "Rassia",
  },
  {
    value: "usa",
    label: "USA",
  },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className="App">
      <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
