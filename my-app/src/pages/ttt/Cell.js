const Cell = (props) => {
    const { value, onClick } = props;
    let symbol = '';

    if (value === 1) {
        symbol = 'X';
    } else if (value === 2) {
        symbol = 'O';
    }

    return (
        <div className="cell" onClick={onClick}>
            {symbol}
        </div>
    );
}

export default Cell;
