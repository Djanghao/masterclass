# Simple Solution

**Author:** chanshiyucx
**Votes:** 1
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5499770/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5499770/)

---

# Intuition

First, find the minimum value in each row of the matrix. Then, find the maximum value in the column where the minimum value is located. If the maximum value of the column is the same as the minimum value of the row, it meets the answer requirements.

To avoid repeatedly searching for the maximum value of a column, cache the maximum value of each column after it is found to optimize performance.

# Approach

1. Initialization\uFF1A
   - Initialize a array to store the answer.
   - Initialize a map to store the maximum of each column.
2. Iterate over the matrix rows. For each row:
   - Find the minimum and its column.
   - Find the maximum of this column.
   - If the maximum of the column is stored in the map, retrieve it.
   - Otherwise, iterate over the column to find the maximum and store it in the map.
   - If the maximum value of the column is the same as the minimum value of the row, it is one of the answers.
3. After the iteration, return the asnwer.

# Code
```
function luckyNumbers(matrix: number[][]): number[] {
  const ans: number[] = []
  const colMax = new Map<number, number>()

  const findColMax = (col: number): number => {
    if (colMax.has(col)) {
      return colMax.get(col)!
    }
    const column = matrix.map((row) => row[col])
    const max = Math.max(...column)
    colMax.set(col, max)
    return max
  }

  for (const row of matrix) {
    const min = Math.min(...row)
    const minIndex = row.indexOf(min)
    const max = findColMax(minIndex)
    if (min === max) {
      ans.push(min)
    }
  }

  return ans
}

```