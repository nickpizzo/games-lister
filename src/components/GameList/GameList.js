import React from "react";
import { Collection, CollectionItem } from "react-materialize";
import AddGameForm from "./AddGameForm";

const GameList = ({ games, addGame }) => {
  return (
    <div>
      <AddGameForm onAddGame={addGame} />
      <Collection header="Video Games">
        {games.map(game => (
          <CollectionItem key={game}>{game}</CollectionItem>
        ))}
      </Collection>
    </div>
  );
};

export default GameList;
