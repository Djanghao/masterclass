# Search a 2D Matrix | java | c++| kotlin | O(logMN)

**Author:** cygnus
**Votes:** 7
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/896762/](https://leetcode.com/problems/search-a-2d-matrix/solutions/896762/)

---

These two conditions  gurantees that if you connect all rows together, it is still sorted.  So this question is just a regular binary search.  Do **NOT** think it as a M row N column 2D matrix, it is just a **1D Sorted list** the lengh is M * N.

* Integers in each row are sorted from left to right.
* The first integer of each row is greater than the last integer of the previous row.

The only trick is : if you have a number x in (0, M * N -1), how to change from x to row and column number.

* row = x / N
* column = x % N.

**java**
```
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0 || matrix[0].length == 0) return false;
        int m = matrix.length, n = matrix[0].length;
        if (target < matrix[0][0] || target > matrix[m-1][n-1]) return false;
        int l = 0, r = m * n-1;
        while (l <= r)
        {
            int mid = (l + r) / 2;
            int x = mid / n;
            int y = mid % n;
            
            if (matrix[x][y] == target)
            {
                return true;
            }
            else if (matrix[x][y] < target)
            {
                l = mid + 1;
            }
            else
            {
                r = mid -1;
            }
        }
        return matrix[l/n][l%n] == target;
    }
}
```

**c++**
```
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if (matrix.size() == 0 || matrix[0].size() == 0) return false;
        int m = matrix.size(), n = matrix[0].size();
        if (target < matrix[0][0] || target > matrix[m-1][n-1]) return false;
        int l = 0, r = m * n -1;
        while (l <= r)
        {
            int mid = (l + r)/2;
            int x = mid / n;
            int y = mid % n;
            if (matrix[x][y] == target)
            {
                return true;
            }
            else if (matrix[x][y] > target)
            {
                r = mid -1;
            }
            else
            {
                l = mid + 1;
            }
        }
        return matrix[l/n][l%n] == target;
    }
};
```

**kotlin**
```
class Solution {
    fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
        if (matrix.size == 0 || matrix[0].size == 0) return false
        var m: Int = matrix.size
        var n: Int = matrix[0].size
        if (target < matrix[0][0] || target > matrix[m-1][n-1]) return false;
        var l = 0
        var r = m * n -1
        while (l <= r) {
            var mid = (l + r)/2
            val temp = matrix[mid/n][mid%n] - target
            when {
               (temp < 0) -> l = mid+1
               (temp > 0) -> r = mid-1
               (temp == 0) -> return true;
            }
        }
        return matrix[l/n][l%n] == target
    }
}
```