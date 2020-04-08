import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const GameForm = ({
  game,
  developers,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{game.id ? "Edit" : "Add"} game</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={game.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="developerId"
        label="Developer"
        value={game.developerId || ""}
        defaultOption="Select Developer"
        options={developers.map(developer => ({
          value: developer.id,
          text: developer.name
        }))}
        onChange={onChange}
        error={errors.developer}
      />

      <TextInput
        name="platforms"
        label="Platforms"
        value={game.platforms}
        onChange={onChange}
        error={errors.platforms}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

GameForm.propTypes = {
  developers: PropTypes.array.isRequired,
  game: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default GameForm;
