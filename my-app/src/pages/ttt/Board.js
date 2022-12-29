


const Board = (props) => {
    const { board, handleClick } = props;

    return (
        <table>
            <tbody>
                {board.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex} onClick={() => handleClick(rowIndex, cellIndex)}>
                                {cell === 1 ? 'X' : cell === 2 ? 'O' : ''}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Board;