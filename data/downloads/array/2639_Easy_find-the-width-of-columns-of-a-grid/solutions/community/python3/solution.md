# ✅ Explained - Simple and Clear Python Code✅

**Author:** moazmar
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420198/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420198/)

---

# Intuition
We need to calculate the maximum width of each column in the given matrix. We can do this by iterating over each element in the matrix and keeping track of the maximum width of each column.


# Approach
1. Initialize a list widths of size n with all elements as 0.
2. Iterate over each column j in the matrix, and for each column, iterate over all rows i.
3. For each element grid[i][j], calculate its width width by finding the length of its absolute value (using abs()) and adding 1 if it is negative.
4. Update the maximum width of the column j by taking the maximum of width and the current maximum width widths[j].
5. Return the list widths containing the maximum width of each column.
# Complexity
- Time complexity:
We are iterating over all elements in the matrix once, so the time complexity is O(mn)
- Space complexity:
We are using a list of size n to store the maximum width of each column, so the space complexity is O(n).
# Code
```
class Solution:
    def findColumnWidth(self, grid: List[List[int]]) -> List[int]:
        m, n = len(grid), len(grid[0])
        widths = [0] * n  
        for j in range(n):
            for i in range(m):
                width = len(str(abs(grid[i][j])))
                if grid[i][j] < 0:
                    width += 1 
                widths[j] = max(widths[j], width)
        return widths

```