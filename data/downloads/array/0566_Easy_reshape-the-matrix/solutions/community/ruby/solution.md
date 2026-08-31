# [Ruby] 2 lines solution

**Author:** ArtemTrepalin_
**Votes:** 1
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/3241143/](https://leetcode.com/problems/reshape-the-matrix/solutions/3241143/)

---

# Code
```
# @param {Integer[][]} mat
# @param {Integer} r
# @param {Integer} c
# @return {Integer[][]}
def matrix_reshape(mat, r, c)
  ans = mat.flatten.each_slice(c).to_a
  ans.size == r ? ans : mat
end
```