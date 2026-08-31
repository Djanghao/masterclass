# Java easy and clean solution

**Author:** kadamyogesh7218
**Votes:** 29
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/2761639/](https://leetcode.com/problems/toeplitz-matrix/solutions/2761639/)

---

```
class Solution {
    public boolean isToeplitzMatrix(int[][] matrix) {
        for(int i=1;i<matrix.length;i++){
            for(int j=1;j<matrix[i].length;j++){
                if(matrix[i][j]!=matrix[i-1][j-1]){
                    return false;
                }
            }
        }
        return true;
    }
}
```