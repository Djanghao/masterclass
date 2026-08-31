# TS Prefix Sum Solution

**Author:** alena_is_here
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/5794661/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/5794661/)

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
```typescript []
class NumMatrix {
    matrix: number[][]
    prefixSum: Record<number, { prefSum: number[], limit: number }>
    constructor(matrix: number[][]) {
        this.prefixSum = {}
        this.matrix = matrix;
    }
    private _calculatePrefix(arr: number[]): number[] {
        const res: number[] = []
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i]
            res.push(total)
        }
        return res
    }
    private _prefixSum(prefSumArr: number[], left: number, right: number) {
        const preLeft = left > 0 ? prefSumArr[left - 1] : 0
        const preRight = prefSumArr[right]
        return preRight - preLeft
    }
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        const prefSumRows = []
        for (let i = row1; i <= row2; i++) {
            if (i in this.prefixSum && col2 <= this.prefixSum[i].limit) {
                prefSumRows.push(this.prefixSum[i].prefSum)
            } else {
                const prefSumForRow = this._calculatePrefix(this.matrix[i].slice(0, col2 + 1))
                prefSumRows.push(prefSumForRow)
                this.prefixSum[i] = { prefSum: prefSumForRow, limit: col2 }
            }

        }
        const sum = prefSumRows.reduce((sum, curRow) => {
            const curSum = this._prefixSum(curRow, col1, col2)
            sum = sum + curSum
            return sum;
        }, 0)
        return sum
    }
}
```