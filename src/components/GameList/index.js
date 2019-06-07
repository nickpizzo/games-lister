import { connect } from "react-redux";
import { pick } from "lodash-es";
import GameList from "./GameList";
import { addGame } from "store/games/actions";

function mapStateToProps(state) {
  return pick(state.games, ["games"]);
}

const mapDispatchToProps = {
  addGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameList);
