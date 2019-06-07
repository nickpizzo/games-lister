import React, { useEffect } from "react";
import { Collection, CollectionItem, Button } from "react-materialize";
import AddGameForm from "./AddGameForm";

const GameList = ({ games, addGame, logOut, loadGames }) => {
  useEffect(() => {
    loadGames();
  }, [loadGames]);

  return (
    <div>
      <AddGameForm onAddGame={addGame} />
      <Button color="secondary" onClick={loadGames}>
        Reload
      </Button>
      <Button onClick={logOut}>Log Out</Button>
      <Collection header="Video Games">
        {games.map(game => (
          <CollectionItem key={game.id}>{game.attributes.title}</CollectionItem>
        ))}
      </Collection>
    </div>
  );
};

export default GameList;
