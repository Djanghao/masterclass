# C# Linq

**Author:** gbamqzkdyg
**Votes:** 1
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4333975/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4333975/)

---

# Intuition
The matrix is the same as before only if all its rows are the same as before.

The row with length `n` is the same as before only when all its elements with the index `i` are equal to the element with the index `(i + k) % n`. 

# Approach
Simply traverse all elements in all rows;

# Complexity

Suppose the matrix is with the size `m * n`.

- Time complexity:
$$O(mn)$$

# Code
```
public class Solution {
    public bool AreSimilar(int[][] mat, int k) => mat.All(row => Enumerable.Range(0, row.Length).All(i => row[(i + k) % row.Length] == row[i]));
}
```