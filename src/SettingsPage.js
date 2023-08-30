import React, { useState } from "react";
import { useSettings } from "./Context/Settings/index";

function SettingsPage() {
  const { settings, setSettings } = useSettings();
  const [formData, setFormData] = useState(settings);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSettings(formData);
  };

  return (
    <div>
      <h2>Settings Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Items per Page:
          <input
            type="number"
            name="itemsPerPage"
            value={formData.itemsPerPage}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Show Completed Items:
          <input
            type="checkbox"
            name="showCompleted"
            checked={formData.showCompleted}
            onChange={() =>
              setFormData((prevData) => ({
                ...prevData,
                showCompleted: !prevData.showCompleted,
              }))
            }
          />
        </label>
        <label>
          Default Sort Field:
          <select
            name="defaultSortField"
            value={formData.defaultSortField}
            onChange={handleInputChange}
          >
            <option value="difficulty">Difficulty</option>
          </select>
        </label>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default SettingsPage;
