# Javascript/Typescript easy to understand and beat 100%

**Author:** gianglv
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-magic-square/solutions/5613467/](https://leetcode.com/problems/largest-magic-square/solutions/5613467/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
const isRowSumEqual = (grid: number[][], value: number) => {
    return grid.every(row => {
        const rowSum = row.reduce((total, num) => total + num, 0)

        return rowSum === value
    })

}

const isColSumEqual = (grid: number[][], value: number) => {
    let result = true
    const length = grid.length
    for (let i = 0; i < length; i++) {
        let colSum = 0
        for (let j = 0; j < length; j++) {
            colSum += grid[j][i]
        }

        if (colSum !== value) {
            result = false
        }
    }

    return result
}

const isDiagonalEqual = (grid: number[][], value: number) => {
    let firstDiagonalSum = 0
    let secondDiagonalSum = 0
    const length = grid.length

    for (let i = 0; i < length; i++) {
        firstDiagonalSum += grid[i][i]
        secondDiagonalSum += grid[i][length - 1 - i]
    }

    return firstDiagonalSum === value && secondDiagonalSum === value
}



const isMagicSquare = (grid: number[][]) => {
    const firstRowSum = grid[0].reduce((total, num) => total + num, 0)

    return isRowSumEqual(grid, firstRowSum) && isColSumEqual(grid, firstRowSum) && isDiagonalEqual(grid, firstRowSum)
}

const hasMagicSquare = (grid: number[][], length: number) => {
    let result = false
    const cols = grid[0].length
    const rows = grid.length

    loop: for (let i = 0; i <= rows - length; i++) {
        for (let j = 0; j <= cols - length; j++) {
            const sub = []

            for (let k = 0; k < length; k++) {
                const row = []

                for (let l = 0; l < length; l++) {
                    row.push(grid[k + i][l + j])
                }
                sub.push(row)
            }

            if (isMagicSquare(sub)) {
                return true
            }

        }

    }

    return false
}

const largestMagicSquare = (grid: number[][]): number => {
    const maxGridLength = Math.min(grid.length, grid[0].length)
    let maxMagicSquare = 1

    for (let i = 2; i <= maxGridLength; i++) {
        // Check if there are any magic square
        if (hasMagicSquare(grid, i)) {
            maxMagicSquare = i
        }
    }

    return maxMagicSquare
};
```