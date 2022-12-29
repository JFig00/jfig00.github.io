const Status = (props) => {
    const { currentPlayer, winner } = props;

    if (winner) {
        return <div className="status winner">Player {winner} wins!</div>;
    } else {
        return <div className="status current-player">Current player: {currentPlayer}</div>;
    }
}

export default Status;