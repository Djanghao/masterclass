# easy c++ solution || O(N^2) || easy to understand

**Author:** anshul_singla
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/3517380/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/3517380/)

---

# Intuition
just rotate the array 4 times (360n degrees) and check in every rotaion if the matrix is equal to target or not!!

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
public:
void rotate_matrix(vector<vector<int>>&matrix,vector<vector<int>>&target){
    int n=matrix.size();
    for(int i=0;i<n;i++){
        for(int j=0;j<i;j++){
            swap(matrix[i][j],matrix[j][i]);
        }
    }
    for(int i=0;i<n;i++){
        reverse(matrix[i].begin(),matrix[i].end());
    }
}
    bool findRotation(vector<vector<int>>& mat, vector<vector<int>>& target) {
        for(int i=0;i<4;i++){
            rotate_matrix(mat,target);
            if(mat==target) {
                return true;
            }
        }
        return false;
    }
};
```