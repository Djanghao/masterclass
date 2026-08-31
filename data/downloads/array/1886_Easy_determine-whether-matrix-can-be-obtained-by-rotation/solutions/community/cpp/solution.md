# [C++] Solution with Rotation Working and Easy Explanation

**Author:** twoseven
**Votes:** 119
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/1254128/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/1254128/)

---

We need to check for the **0, 90, 180, 270** degree's only.

0 degree - If given matrix is same as target
90 degree - rotate matrix
180 degree - rotate previous 90 degree more 90 degree to get 180 degree rotation.
270 degree - rotate previous 180 degree more 90 degree to get 270 degree rotation.

How rotation Works?

let the matrix be-
0 1 1
0 0 1
1 0 0

first take the transpose(rows become columns and vice versa) ie. -
0 0 1
1 0 0
1 1 0

now reverse each row ie-
1 0 0
0 0 1
0 1 1

Now you can see that, this resulted matix is the 90 degree rotation of the original matrix. We need to do this 2 more time to check for 180, 270 degree's.

```
class Solution {
public:
    bool findRotation(vector<vector<int>>& mat, vector<vector<int>>& target) {
        int n = mat.size();
        if(mat == target) {     // rotation by 0 degree.
            return true;
        }
        
        int deg = 3;    // more rotations with 90, 180, 270 degree's.
        
        while(deg --) {
            for(int i = 0; i < n; i ++) {
                for(int j = i; j < n; j ++) {
                    swap(mat[i][j], mat[j][i]);     // transpose of matrix.
                }
            }
            for(int i = 0; i < n; i ++) {
                reverse(mat[i].begin(),mat[i].end());       // reverse each row.
            }
            if(mat == target) {
                return true;
            }
        }
        return false;
    }
};
```