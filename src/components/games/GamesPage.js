import React from "react";
import { connect } from "react-redux";
import { Spinner } from "../common";
import GameList from "./GameList";
import PropTypes from "prop-types";
import { loadGames, deleteGame, loadDevelopers } from "../../redux/actions";
import { toast } from "react-toastify";

class GamesPage extends React.Component {
  state = {
    redirectToAddGamePage: false
  };

  componentDidMount() {
    const { games, developers, loadGames, loadDevelopers } = this.props;
    if (games.length === 0) {
      loadGames().catch(error => {
        alert("Loading games failed: " + error);
      });
    }
    if (developers.length === 0) {
      loadDevelopers().catch(error => {
        alert("Loading developers failed: " + error);
      });
    }
  }

  handleDeleteGame = async game => {
    toast.success("Game deleted");
    try {
      await this.props.deleteGame(game);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        <h2>Games List</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.props.history.push("/game")}
            >
              Add Game
            </button>

            <GameList
              onDeleteClick={this.handleDeleteGame}
              games={this.props.games}
            />
          </>
        )}
      </>
    );
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  developers: PropTypes.array.isRequired,
  loadGames: PropTypes.func.isRequired,
  loadDevelopers: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  games:
    state.developers.length === 0
      ? []
      : state.games.map(game => {
          return {
            ...game,
            developerName: state.developers.find(
              developer => developer.id === game.developerId
            ).name
          };
        }),
  developers: state.developers,
  loading: state.apiCallsInProgress > 0
});

const mapDispatchToProps = {
  loadGames,
  deleteGame,
  loadDevelopers
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);
