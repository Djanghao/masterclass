# Beats 100%, generate all the possible bit masks then search them in the grid.

**Author:** heiseshandian
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/4822319/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/4822319/)

---

# Problem 2732: Find a Good Subset of the Matrix

## Intuition
The goal is to find a "good" subset within a given binary matrix. A good subset, in this context, refers to either a single row that consists entirely of 0s or a pair of rows where the bitwise representation of one does not overlap with the other, meaning they could complement each other in a certain bitwise operation.

## Approach
The solution follows a systematic approach:

1. **Initial Check for Zero Row**: It begins by scanning each row of the matrix to find if there exists a row that is entirely made up of 0s. If such a row is found, the function returns this row immediately as a valid "good" subset.

2. **Bitmask Generation through Backtracking**: To account for all possible combinations of rows, the solution employs a backtracking algorithm to generate pairs of bitmasks representing potential good subsets. Each bitmask corresponds to a potential row in the subset, with bit positions indicating the presence (1) or absence (0) of elements in a hypothetical good subset.

3. **Matching Rows with Bitmasks**: After generating all possible bitmask pairs, the solution converts each row of the input matrix into a numerical representation based on its binary content. It then iterates through the generated bitmask pairs to find two distinct rows that match the left and right bitmasks respectively. If such rows are found, their indices are returned as the result.

## Complexity

- **Time Complexity**: `O(n)`

- **Space Complexity**: `O(n)`

# Code
```
function goodSubsetofBinaryMatrix(grid: number[][]): number[] {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].every((v) => v === 0)) {
            return [i];
        }
    }
    const n = grid[0].length;

    const bitMasks: number[][] = [];
    const backtracking = (i: number, left: number, right: number) => {
        if (i === n) {
            bitMasks.push([left, right]);
            return;
        }

        left <<= 1;
        right <<= 1;

        // left\u53D61
        backtracking(i + 1, left | 1, right | 0);

        // left\u53D60
        backtracking(i + 1, left | 0, right | 1);
        backtracking(i + 1, left | 0, right | 0);
    };
    backtracking(0, 0, 0);

    const gridNumbers = grid.map((row) => parseInt(row.join(''), 2));

    for (let i = 0; i < bitMasks.length; i++) {
        const [left, right] = bitMasks[i];
        const index1 = gridNumbers.indexOf(left);
        const index2 = gridNumbers.indexOf(right);
        if (index1 !== -1 && index2 !== -1 && index1 !== index2) {
            return [index1, index2].sort((a, b) => a - b);
        }
    }

    return [];
}
```