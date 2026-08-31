# C++ | Easiest w/ Matrix Creation & Filling ✅

**Author:** prantik0128
**Votes:** 56
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/2100113/](https://leetcode.com/problems/transpose-matrix/solutions/2100113/)

---

**Please upvote the post if you like it  :)**

So, basically we are given an 2D **matrix** of` m*n` and we need to return the **transpose** of this 
**matrix**

***Basic Brute/ Intuitive Approach (C++) :***
```
class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        int n = matrix.size();
        int m = matrix[0].size();
        
        vector<vector<int>> res(m,vector<int> (n,0)); // matrix creation
        for(int i=0;i<n;i++){
            for(int j=0;j<m;j++){
                res[j][i] = matrix[i][j]; // filling the matrix in transpose form
            }
        }
        return res;
    }
};
```
****
**Time Complexity : O(n*m)**, where `n` is the **row** and `m` is the **column**
**Space Complexity : O(n*m)**