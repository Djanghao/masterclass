# C++✅ | Simplest Solution Ever Exists🤩 | Superfast🔥

**Author:** abhi_9v
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420183/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420183/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are going to traverse the matrix column wise and then storing the maximum length of number in that column index of `ans` vector.

# Approach
<!-- Describe your approach to solving the problem. -->
To find the maximum length of any number we can just convert it to a string and find it length.
In this way, we can easily find the maximum width of each column.

# Complexity
- **Time complexity:** O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
We need to traverse the matrix and perform a constant operation for every number.

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> findColumnWidth(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        vector<int> ans(n);
    
        for(int j=0; j<n; j++){
            int l=0;
            for(int i=0; i<m; i++){
                l = max(l, int(to_string(grid[i][j]).size()));
            }
            ans[j] = l;
        }
        return ans;
    }
};
```