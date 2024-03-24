function countCellsWithinDistance(grid, d) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
    const visited = new Set();

    // Helper function to check if a cell is within d steps
    function isWithinDistance(x1, y1, x2, y2, d) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2) <= d;
    }

    // Check each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] > 0) {
                // For each positive cell, check all cells within d distance
                for (let x = Math.max(0, i - d); x <= Math.min(rows - 1, i + d); x++) {
                    for (let y = Math.max(0, j - d); y <= Math.min(cols - 1, j + d); y++) {
                        const key = `${x},${y}`;
                        if (!visited.has(key) && isWithinDistance(i, j, x, y, d)) {
                            visited.add(key);
                            count++;
                        }
                    }
                }
            }
        }
    }

    return count;
}

// Example tests
const example1 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1]
];
console.log(`Example 1, d=2: ${countCellsWithinDistance(example1, 2)}`); // Expected to be 8

const example2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
];
console.log(`Example 2, d=2: ${countCellsWithinDistance(example2, 2)}`); // Expected to be 6


