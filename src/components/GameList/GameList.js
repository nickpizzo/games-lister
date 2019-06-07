import React from "react";
import { Collection, CollectionItem, Button } from "react-materialize";
import AddGameForm from "./AddGameForm";

const GameList = ({ games, addGame, logOut }) => {
  return (
    <div>
      <AddGameForm onAddGame={addGame} />
      <Button onClick={logOut}>Log Out</Button>
      <Collection header="Video Games">
        {games.map(game => (
          <CollectionItem key={game}>{game}</CollectionItem>
        ))}
      </Collection>
    </div>
  );
};

export default GameList;
