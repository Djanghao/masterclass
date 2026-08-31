# [Python3] O(MN) histogram model

**Author:** ye15
**Votes:** 132
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/721999/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/721999/)

---

Algo 
In the first step, stack `mat` row by row to get the "histogram model". For example, 
```
mat = [[1,0,1],
       [1,1,0],
       [1,1,0]]
```
becomes 
```
mat = [[1,0,1],
       [2,1,0],
       [3,2,0]]
```
In the second step, traverse the stacked matrix row by row. At each position `i, j`, compute the number of all-1 submatrices like below. 

Define a `stack` to store indices of non-decreasing height, and a variable `cnt` for the number of all-1 submatrices at given position (`i, j`). Take the height of row `i` as an example, say `h = mat[i]`. At column `j`, if `h[j-1] <= h[j]`, it is apparent that `cnt[j] = cnt[j-1] + h[j]`, since every case that contributes to `cnt[j-1]` could be added a new column of 1's from the `j`th column to contribute to `cnt[j]`. 

The tricky part is when `h[j-1] > h[j]`. In this case, we need to "hypothetically" lower `h[j-1]` to `h[j]` to get an updated `cnt*[j-1]` before adding `h[j]` to get `cnt[j]`. Suppose that the histogram is like below to reflect `3,3,3,2`. To compute `cnt[3]`, we have to adjust `cnt[2]` to a hypothetical height of 2 by removing top row before adding the new column to get `cnt[3]`. The specific operation is done using a mono-stack which stores indices of non-decreasing height. Whenever a new height comes in, pop out the heights in the stack that are higher than the new height while removing the quota contributed by the extra height (between poped height and new height). 

```
* * * 
* * * * 
* * * *
```

```
class Solution:
    def numSubmat(self, mat: List[List[int]]) -> int:
        m, n = len(mat), len(mat[0])
        
        #precipitate mat to histogram 
        for i in range(m):
            for j in range(n):
                if mat[i][j] and i > 0: 
                    mat[i][j] += mat[i-1][j] #histogram 
        
        ans = 0
        for i in range(m):
            stack = [] #mono-stack of indices of non-decreasing height
            cnt = 0
            for j in range(n):
                while stack and mat[i][stack[-1]] > mat[i][j]: 
                    jj = stack.pop()                          #start
                    kk = stack[-1] if stack else -1           #end
                    cnt -= (mat[i][jj] - mat[i][j])*(jj - kk) #adjust to reflect lower height

                cnt += mat[i][j] #count submatrices bottom-right at (i, j)
                ans += cnt
                stack.append(j)

        return ans
```