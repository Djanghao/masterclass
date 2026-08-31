# O(m log n) | Binary search | Recursion | readable and beats 100% of other submissions | Typescript

**Author:** supriya-kotturu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-peak-element-ii/solutions/5854192/](https://leetcode.com/problems/find-a-peak-element-ii/solutions/5854192/)

---

# Intuition

Current element is peak if it is greater than its surrounding elements. If we get the position of max element in the column, we can then find the peak in that row.

# Approach

**Binary search**

- `lowIdx = 0` and `highIdx = length of Columns - 1`
- find the mid column index and the position of max element in that column
- check if the element at that position is peak
	- if true, returm position
	- else, compare  current element `mat[maxRowIdx][maxColIdx]` with prev `mat[maxRowIdx][maxColIdx - 1]` and next `mat[maxRowIdx][maxColIdx] - 1`
		- if curr < prev - update highIdx to midColIdx - 1 
			- it is assumed that peak is on left side
		- if curr < next - update lowIdx to midColIdx + 1
			- it is assumed that peak is on right side
		- else update lowIdx and highIdx to midColIdx
			- peak is in current column

# Complexity
- Time complexity: O(m log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function getMaxPosInCol(mat: number[][], colIdx: number): [number, number] {
    let pos: [number, number] = [0, 0]
    let max = 0;

    for (let rowIdx = 0; rowIdx < mat.length; rowIdx++) {
        if (mat[rowIdx][colIdx] > max) {
            max = mat[rowIdx][colIdx]
            pos = [rowIdx, colIdx]
        }
    }

    return pos
}

function isPeak(mat: number[][], rowIdx, colIdx): boolean {
    const rows = mat.length
    const cols = mat[0].length

    const curr = mat[rowIdx][colIdx]
    const top = rowIdx - 1 >= 0 ? mat[rowIdx - 1][colIdx] : -1
    const down = rowIdx + 1 < rows ? mat[rowIdx + 1][colIdx] : -1
    const left = colIdx - 1 >= 0 ? mat[rowIdx][colIdx - 1] : -1
    const right = colIdx + 1 < cols ? mat[rowIdx][colIdx + 1] : -1

    return curr > top && curr > down && curr > left && curr > right
}

function helper(mat: number[][], lowIdx: number, highIdx: number): [number, number] {
    const midColIdx = Math.floor((lowIdx + highIdx) / 2)
    const [maxRowIdx, maxColIdx] = getMaxPosInCol(mat, midColIdx)

    if (isPeak(mat, maxRowIdx, maxColIdx)) return [maxRowIdx, maxColIdx]

    const curr = mat[maxRowIdx][maxColIdx]
    const prev = mat[maxRowIdx][maxColIdx - 1]
    const next = mat[maxRowIdx][maxColIdx + 1]

    if (curr < prev) return helper(mat, lowIdx, midColIdx - 1)
    else if (curr < next) return helper(mat, midColIdx + 1, highIdx)
    else return helper(mat, midColIdx, midColIdx)

function findPeakGrid(mat: number[][]): [number, number] {
    return helper(mat, 0, mat[0].length - 1)
};
```