# Staircase search approach

**Author:** nubiaferr
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/5519124/](https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/5519124/)

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
class Solution {
    fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
        //staircase search (start in the TOP RIGHT)
        //find the top right element and compare with target
        //if element > target, move left (column--)
        //if element < target, move down (row++)

        val rows = matrix.size
        val columns = matrix[0].size

        if (rows == 0 || columns == 0) {
            return false
        }

        if (target < matrix[0][0] || target > matrix[rows-1][columns-1]){
            return false
        }

        var i = 0
        var j = columns-1

        while (i <= rows-1 && j >= 0) {
            if(matrix[i][j] == target) {
                return true
            }

            if(matrix[i][j] < target) {
                i++ //move down
            } else {
                j--
            }
        }

        return false
    }
}
```