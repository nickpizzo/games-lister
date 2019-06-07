import React, { useEffect } from "react";
import { Collection, CollectionItem, Button } from "react-materialize";
import AddGameForm from "./AddGameForm";
import LoadingIndicator from "components/LoadingIndicator";

const GameList = ({ games, loading, error, addGame, logOut, loadGames }) => {
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
      <LoadingIndicator loading={loading} error={error}>
        <Collection header="Video Games">
          {games.map(game => (
            <CollectionItem key={game.id}>
              {game.attributes.title}
            </CollectionItem>
          ))}
        </Collection>
      </LoadingIndicator>
    </div>
  );
};

export default GameList;
