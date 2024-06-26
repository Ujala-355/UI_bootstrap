import React, { useState, useEffect, useCallback } from 'react';

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    };

    const handleCreateRandomHexColor = useCallback(() => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
          hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }, []);

    const handleCreateRandomRgbColor = useCallback(() => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }, []);

    useEffect(() => {
        if (typeOfColor === "rgb") handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor, handleCreateRandomHexColor, handleCreateRandomRgbColor]);

    return (
        <div
            style={{
              width: "100vw",
              height: "100vh",
              background: color,
            }}
            className="d-flex flex-column justify-content-center align-items-center text-center"
        >
            <div className="mb-3">
                <button
                  className="btn btn-primary me-2"
                  onClick={() => setTypeOfColor("hex")}
                >
                  Create HEX Color
                </button>
                <button
                  className="btn btn-secondary me-2"
                  onClick={() => setTypeOfColor("rgb")}
                >
                  Create RGB Color
                </button>
                <button
                  className="btn btn-success"
                  onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}
                >
                  Generate Random Color
                </button>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center text-white">
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
                <h1>{color}</h1>~
            </div>
        </div>
    );
};

export default RandomColor;
