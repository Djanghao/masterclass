# Simple TypeScript solution O(nxm) time, O(1) space!

**Author:** djanbolotov16
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5752692/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5752692/)

---

# Intuition
My first thought for solving this problem is that we need to check two conditions for the grid. First, all elements in each column should be the same. Second, in the first row, no two adjacent elements should be equal. If either of these conditions fails, we return false.
# Approach
We iterate through each column and check if all the elements in that column are the same. If we find any mismatch, we immediately return false.
Simultaneously, we check that no two adjacent elements in the first row are equal. If they are, we return false.
If both checks pass for all columns, we return true.
# Complexity
- Time complexity:
Let n be the number of rows and m be the number of columns. For each column, we check all rows, which gives a time complexity of O(n\xD7m).
- Space complexity:
We use no additional space apart from the grid itself, so the space complexity is O(1).
# Code
```typescript []
function satisfiesConditions(grid: number[][]): boolean {
    for(let i = 0; i < grid[0].length; i++) {
        for(let j = 0; j < grid.length - 1; j++) {
            if(grid[j][i] !== grid[j + 1][i]) return false;
        }
        if(i + 1 < grid[0].length) {
            if(grid[0][i] === grid[0][i+1]) return false;
        }
    }
    return true;
};
```