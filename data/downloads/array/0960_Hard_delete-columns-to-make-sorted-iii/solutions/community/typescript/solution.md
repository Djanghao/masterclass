# TypeScript | Memory beats 100%

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/5768071/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solutions/5768071/)

---

# Intuition
Keep rows in order by deleting the minimum number of columns.

# Approach
Dynamic Programming (DP): Track the longest sequence of valid columns.

Compare Columns: Check if one column can follow another in all rows.

Compute Deletions: The result is the total columns minus the length of the longest valid sequence.

# Complexity
- Time complexity:
O(C2(square) \xD7 R), checking pairs of columns for each row.

- Space complexity:
O(C), for the DP array.

# Code
```typescript []
const minDeletionSize = (strs: string[]): number => {
    const numRows = strs.length;
    const numCols = strs[0].length;
    const dp: number[] = new Array(numCols).fill(1);
    let minDeletions = numCols;

    for (let i = 0; i < numCols; ++i) {
        for (let j = 0; j < i; ++j) {
            let valid = true;
            for (let k = 0; k < numRows; ++k) {
                if (strs[k][j] > strs[k][i]) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        minDeletions = Math.min(minDeletions, numCols - dp[i]);
    }

    return minDeletions;
};

```