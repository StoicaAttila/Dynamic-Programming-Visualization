import React from "react";

const Grid = ({ rows, columns }) => {
    const grid = Array.from({ length: columns }, (_, columnIndex) => (
        <div
            className="grid-child"
            key={columnIndex}
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {Array.from({ length: rows }, (_, rowIndex) => (
                <div
                    key={`${columnIndex}-${rowIndex}`}
                    style={{
                        width: '30px',
                        height: '30px',
                        border: '1px solid black'
                    }}
                />
            ))}
        </div>
    ));

    return <div
        className="grid"
        style={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
        {grid}
    </div>;
};

export default Grid;