# O(MN)/O(1) WITHOUT checking odd/even sum, very easy and clean solution beats 100% [Python/C++/Rust]

**Author:** talalshafei
**Votes:** 0
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/6109406/](https://leetcode.com/problems/diagonal-traverse/solutions/6109406/)

---

To go up `r-1`
To go down `r+1`
To go right `c+1`
To go left `c-1`

W need to alternate between up & right `(r-1, c+1)` or down & left `(r+1, c-1)`, so we can difine a direction varialbe and call it `d`.

When we reach limits, we must go to the next diagonal.
`r<0 or r==m or c<0 or c==n`
When we reach beyond a limit we must go back to the previous state, for example `if r<0: r=0`
After that we reverse the direction `d=-d`

Edge casess:
when we reach `r==m` we must reset `r=m-1` but also `c` must go to the next state but not the one with the old direction but the new one so to comput it we must undo the step we did and add a step to `c = -d +1`, vice versa for `r` when `c==n-1`


# Code
```python3 []
class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        m, n = len(mat), len(mat[0])
        ans, r, c = [], 0, 0
        d = 1 # r-d and c+d # we start by going up
        
        for _ in range(m*n):
            ans.append(mat[r][c])
            r, c = r-d, c+d

            if r<0 or r==m or c<0 or c==n:  
                if r==m: 
                    r=m-1
                    c+= -d + 1 # undo the step and go to next one
                if c==n: 
                    c=n-1
                    r+= d + 1

                if r<0: r=0
                if c<0: c=0

                d = -d # reverse direction

        return ans
```
```cpp []
class Solution {
public:
    vector<int> findDiagonalOrder(vector<vector<int>>& mat) {
        int m=mat.size(), n=mat[0].size();
        vector<int>ans;
        for(int r=0, c=0, d=1, i=0; i<m*n; i++){
            ans.push_back(mat[r][c]);
            r-= d; c+=d;
            if(r<0 or r==m or c<0 or c==n){
                if(r==m){ r=m-1; c -= d - 1; }
                if(c==n){ c=n-1; r += d + 1; }
                if(r<0) r=0;
                if(c<0) c=0;
                d = -d;
            }
        }
        return ans;
    }
};
```
```rust []
impl Solution {
    pub fn find_diagonal_order(mat: Vec<Vec<i32>>) -> Vec<i32> {
        let (m, n, mut r, mut c, mut d) = (mat.len() as i32, mat[0].len() as i32, 0, 0, 1); 
        let mut ans = Vec::new();
        
        for _ in 0..(m*n){
            ans.push(mat[r as usize][c as usize]);
            r -= d; c += d;
            if r<0 || r==m || c<0 || c==n {
                if r==m { r=m-1; c -= d-1; }
                if c==n { c=n-1; r += d+1; }
                if r<0 { r=0; }
                if c<0 { c=0; }
                d = -d;
            }
        }
        return ans;
    }
}
```