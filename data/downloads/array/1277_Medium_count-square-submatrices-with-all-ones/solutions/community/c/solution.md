# [C++] DP + Iterative, Easy solution

**Author:** prakh_r
**Votes:** 70
**Link:** [https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/643692/](https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/643692/)

---

The best description can be found in [***this video***](https://www.youtube.com/watch?v=FO7VXDfS8Gk&t=943s) with step by step approach of how to build an intuition and solution.


Below is an easy to understand the solution that follows the approach discussed in the video above.
(I could explain it in this text but I might miss a few details. It's better to go through the video to understand in entirety.)

```
class Solution {
public:
    int countSquares(vector<vector<int>>& matrix) {
        int result = 0;
        
        for(int i = 0; i<matrix.size(); i++)
        {
            for(int j = 0; j<matrix[0].size(); j++)
            {
                if(i > 0 && j > 0 && matrix[i][j]>0)
                    matrix[i][j] = min(matrix[i-1][j-1], min(matrix[i-1][j], matrix[i][j-1])) + 1;
                
                result += matrix[i][j];
            }
        }
        
        return result;
    }
};
```