import { connect } from "react-redux";
import { pick } from "lodash-es";
import GameList from "./GameList";
import { addGame } from "store/games/actions";
import { logOut } from "store/login/actions";

function mapStateToProps(state) {
  return pick(state.games, ["games"]);
}

const mapDispatchToProps = {
  addGame,
  logOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList);
