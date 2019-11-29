export const getRandomMatrix = (dimension: number): Array<Array<number>> => {
    return Array(dimension)
        .fill(dimension)
        .map(() =>
            Array(dimension)
                .fill(dimension)
                .map(() => Math.round(Math.random())),
        );
};
