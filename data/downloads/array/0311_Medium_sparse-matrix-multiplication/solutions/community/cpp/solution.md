# Regular 28 ms math solution (6-8 lines)

**Author:** maljean
**Votes:** 18
**Link:** [https://leetcode.com/problems/sparse-matrix-multiplication/solutions/76214/](https://leetcode.com/problems/sparse-matrix-multiplication/solutions/76214/)

---

    class Solution {
    public:
        vector<vector<int>> multiply(vector<vector<int>>& A, vector<vector<int>>& B) {
            int m = A.size(), n = A[0].size();
            vector<vector<int>> res(m, vector<int>(B[0].size(),0));
            
            // for(int i = 0; i < m; i++){
            //     for(int k = 0; k < n; k++){
            //          for(int j = 0; j < n; j++){
            //              res[i][j] += A[i][k] * B[k][j];
            //          }
            //     }
            // }
            // imporved on upper version, this is a math solution
            for(int i = 0; i < m; i++){
                for(int k = 0; k < n; k++){
                    if(A[i][k] != 0)
                        for(int j = 0; j < B[0].size(); j++){
                            res[i][j] += A[i][k] * B[k][j];
                        }
                }
            }
            return res;
        }
    };