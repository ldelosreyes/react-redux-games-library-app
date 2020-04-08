import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadGames, loadDevelopers, saveGame } from "../../redux/actions";
import PropTypes from "prop-types";
import GameForm from "./GameForm";
import { newGame } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageGamePage({
  games,
  developers,
  loadDevelopers,
  loadGames,
  saveGame,
  history,
  ...props
}) {
  const [game, setGame] = useState({ ...props.game });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (games.length === 0) {
      loadGames().catch(error => {
        alert("Loading games failed: " + error);
      });
    } else {
      setGame({ ...props.game });
    }

    if (developers.length === 0) {
      loadDevelopers().catch(error => {
        alert("Loading developers failed" + error);
      });
    }
  }, [props.game]);

  function handleChange(event) {
    const { name, value } = event.target;
    setGame(prevGame => ({
      ...prevGame,
      [name]: name === "developerId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { title, developerId, platforms } = game;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!developerId) errors.developer = "Developer is required";
    if (!platforms) errors.platforms = "Platforms field is required";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveGame(game)
      .then(() => {
        toast.success("Game saved.");
        history.push("/games");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return developers.length === 0 || games.length === 0 ? (
    <Spinner />
  ) : (
    <GameForm
      game={game}
      errors={errors}
      developers={developers}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageGamePage.propTypes = {
  game: PropTypes.object.isRequired,
  developers: PropTypes.array.isRequired,
  games: PropTypes.object.isRequired,
  loadGames: PropTypes.func.isRequired,
  loadDevelopers: PropTypes.func.isRequired,
  saveGame: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getGameBySlug(games, slug) {
  return games.find(game => game.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const game =
    slug && state.games.length > 0 ? getGameBySlug(state.games, slug) : newGame;
  return {
    game,
    games: state.games,
    developers: state.developers
  };
}

const mapDispatchToProps = {
  loadGames,
  loadDevelopers,
  saveGame
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageGamePage);
