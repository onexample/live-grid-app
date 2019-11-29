export const getRandomMatrix = (dimension: number): Array<Array<number>> => {
    const matrix: Array<Array<number>> = [];

    for (let x = 0; x < dimension; x++) {
        matrix[x] = [];
        for (let y = 0; y < dimension; y++) {
            if (x === 0 || y === 0 || x === dimension - 1 || y === dimension - 1) {
                matrix[x][y] = 0;
            } else {
                matrix[x][y] = Math.round(Math.random());
            }
        }
    }

    return matrix;
};

export const getNextMatrix = (data: Array<Array<number>>): Array<Array<number>> => {
    const copy = data.map(sub => sub.slice());

    const countNeighbors = (matrix: Array<Array<number>>, x: number, y: number): number => {
        let neighbors = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                neighbors += matrix[x + i][y + j];
            }
        }
        neighbors -= matrix[x][y];

        return neighbors;
    };

    for (let x = 1; x < data.length - 1; x++) {
        for (let y = 1; y < data[x].length - 1; y++) {
            const neighbors = countNeighbors(data, x, y);

            if (data[x][y] === 1 && neighbors < 2) {
                copy[x][y] = 0;
            } else if (data[x][y] === 1 && neighbors > 3) {
                copy[x][y] = 0;
            } else if (data[x][y] === 1 && (neighbors === 2 || neighbors === 3)) {
                copy[x][y] = 1;
            } else if (data[x][y] === 0 && neighbors === 3) {
                copy[x][y] = 1;
            } else {
                copy[x][y] = data[x][y];
            }
        }
    }

    return copy;
};
