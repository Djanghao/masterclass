# Easy solution with explaination

**Author:** iashi_g
**Votes:** 12
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/3421887/](https://leetcode.com/problems/row-with-maximum-ones/solutions/3421887/)

---

# Intuition
The basic idea is to iterate over all rows of the matrix, and count the number of ones in each row. We keep track of the row with the maximum count of ones seen so far, and update it whenever we find a row with a larger count.

# Approach
To count the number of ones in a row, we simply iterate over all elements of the row and add up the ones.

Finally, we return the index of the row with the maximum count of ones, along with the count itself, as a vector of two integers. If there are multiple rows with the maximum count, we return the one with the smallest row number, which is the first one encountered in the loop.

# Complexity
- Time complexity:
The solution has a time complexity of O(mn), which is the size of the matrix, since we need to iterate over all its elements. This is optimal, since we need to examine all rows and elements to determine the maximum count of ones.

- Space complexity:
Space complexity is O(1), since we aren't using any extra space.

# Code
```
class Solution {
public:
    vector<int> rowAndMaximumOnes(vector<vector<int>>& mat) {
        int m = mat.size();
        int n = mat[0].size();
        int maxCount = 0;
        int maxRow = 0;
        for (int i = 0; i < m; i++) {
            int count = 0;
            for (int j = 0; j < n; j++) {
                count += mat[i][j];
            }
            if (count > maxCount) {
                maxCount = count;
                maxRow = i;
            }
        }
        return {maxRow, maxCount};
    }
};
```