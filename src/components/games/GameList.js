import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GameList = ({ games, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Developer</th>
        <th>Platforms</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {games.map(game => {
        return (
          <tr key={game.id}>
            <td>
              <Link to={"/game/" + game.slug}>{game.title}</Link>
            </td>
            <td>{game.developerName}</td>
            <td>{game.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(game)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

GameList.propTypes = {
  games: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default GameList;
