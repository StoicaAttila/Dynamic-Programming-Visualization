import React from "react";

const Grid = ({ rows, columns }) => {
    const grid = Array.from({ length: columns }, (_, columnIndex) => (
        <div
            className="grid-child"
            key={columnIndex}
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {Array.from({ length: rows }, (_, rowIndex) => (
                <div
                    key={`${columnIndex}-${rowIndex}`}
                    style={{
                        width: '50px',
                        height: '50px',
                        border: '1px solid #000',
                        borderTopWidth: rowIndex === 0 ? '3px' : '1px',
                        borderBottomWidth: rowIndex === rows - 1 ? '3px' : '1px',
                        borderLeftWidth: columnIndex === 0 ? '3px' : '1px',
                        borderRightWidth: columnIndex === columns - 1 ? '3px' : '1px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                    }}
                />
            ))}
        </div>
    ));

    return <div
        className="grid"
        style={{
            position: 'absolute',
            display: 'flex',
            flexWrap: 'wrap',
            bottom: '8em',
            left: '20em'
        }}>
        {grid}
    </div>;
};

export default Grid;