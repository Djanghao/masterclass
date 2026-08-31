# O(N) Solution in Typescript

**Author:** dhing
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-black-blocks/solutions/5557091/](https://leetcode.com/problems/number-of-black-blocks/solutions/5557091/)

---

# Intuition

If the grid is extremely sparse, then iterating through all valid blocks on the grid, regardless of whether they have a black square or not, is extremely wasteful. Instead, find a solution which iterates through the given coordinates.

# Approach

Find all blocks that contain a black square by iterating through the given coordinates and keep track of how many black squares they contain as you are finding them using a hashmap.

# Complexity
- Time complexity:

O(N) with N ~ number of coordinates


- Space complexity:

O(M) with M ~ number of coordinates

# Code
```
function countBlackBlocks(m: number, n: number, coordinates: number[][]): number[] {
    // initialize empty array with zeros
    const result = new Array(5).fill(0);
    const directions = [
        [-1, -1],
        [-1, 0],
        [0, -1],
        [0, 0]
    ];

    // bounding boxes is a map of coordinates for any block that contains a black square
    // to the number of black squares contained within
    const blocksWithBlackSquare = new Map<string, number>();
    for (const [x, y] of coordinates) {
        for (const [dx, dy] of directions) {

            // define block coordinates
            const boundingX1 = x + dx;
            const boundingY1 = y + dy;
            const boundingX2 = boundingX1 + 1;
            const boundingY2 = boundingY1 + 1;

            // edge cases: invalid squares that fall off the grid
            if (boundingX1 < 0 || boundingY1 < 0 || boundingX2 >= m || boundingY2 >= n) {
                continue;
            }

            // hash map key based on bounding box
            const block = `${boundingX1}-${boundingY1}`;

            if (blocksWithBlackSquare.has(block)) {
                // if current hash map currently has this key, increment
                const current = blocksWithBlackSquare.get(block)
                blocksWithBlackSquare.set(block, current + 1);
            } else {
                // otherwise set to 1
                blocksWithBlackSquare.set(block, 1);
            }
        }
    }

    // update result array
    blocksWithBlackSquare.forEach((value) => {
        result[value] = result[value] + 1
    });

    // set result[0] to be all of the available bounding boxes that haven't already been represented
    // in the other array elements
    result[0] = (m - 1) * (n - 1) - result[1] - result[2] - result[3] - result[4];
    return result;
};
```