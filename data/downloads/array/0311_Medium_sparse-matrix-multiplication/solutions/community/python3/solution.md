# [Python] 2 Solutions with explanation

**Author:** 101leetcode
**Votes:** 9
**Link:** [https://leetcode.com/problems/sparse-matrix-multiplication/solutions/696797/](https://leetcode.com/problems/sparse-matrix-multiplication/solutions/696797/)

---

```
class Solution:
    def multiply(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
        ## RC ##
        ## BASIC SOLUTION  ##
        ## 1. For any matrix multiplication, solution is without IF condition. but its N^3
        ## 2. As this is sparse matrix, most of the elements are 0's. so we can make it effient to run the third loop only when we have element in A matrix.
        mA, nA, nB = len(A),len(A[0]),len(B[0])
        res = [[0]*len(B[0]) for _ in range(mA)]
        for i in range(mA):
            for j in range(nA):
                if A[i][j]:
                    for k in range(nB):
                        res[i][k] += A[i][j]*B[j][k]
        return res
    
        ## 3. But Even #2 is not efficient, so we store non-zero elements in a hashmap of hashmaps and checking those calculating ans is enough
        ## (m1 * n1) x (m2 * n2) = (m1 * n2) [ n1 = m2 always, we check the same here while looping through hashmaps ]
        m1, n1 = len(A), len(A[0])
        m2, n2 = len(B), len(B[0])
        res = [[0 for i in range(n2)] for j in range(m1)]
        X, Y = [dict() for i in range(m1)], [dict() for j in range(n2)]
        
        for i in range(m1):
            for j in range(n1):
                if A[i][j] != 0:
                    X[i][j] = A[i][j]
        
        for i in range(m2):
            for j in range(n2):
                if B[i][j] != 0:
                    # watchout (j,i)
                    Y[j][i] = B[i][j]
                    
        for i in range(m1):
            for j in range(n2):
                for r in X[i]:
                    if r in Y[j]:
                        res[i][j] += X[i][r] * Y[j][r]
        return res
```