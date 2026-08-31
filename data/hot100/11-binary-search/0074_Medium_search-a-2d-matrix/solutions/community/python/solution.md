# A Python binary search solution - O(logn)

**Author:** Google
**Votes:** 174
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/26201/](https://leetcode.com/problems/search-a-2d-matrix/solutions/26201/)

---

It is basically an advanced version of the binary search

    class Solution:
        # @param matrix, a list of lists of integers
        # @param target, an integer
        # @return a boolean
        # 8:21
        def searchMatrix(self, matrix, target):
            if not matrix or target is None:
                return False
    
            rows, cols = len(matrix), len(matrix[0])
            low, high = 0, rows * cols - 1
            
            while low <= high:
                mid = (low + high) / 2
                num = matrix[mid / cols][mid % cols]
    
                if num == target:
                    return True
                elif num < target:
                    low = mid + 1
                else:
                    high = mid - 1
            
            return False