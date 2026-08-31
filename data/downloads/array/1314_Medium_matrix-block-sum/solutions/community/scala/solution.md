# DP scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-block-sum/solutions/3185181/](https://leetcode.com/problems/matrix-block-sum/solutions/3185181/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def matrixBlockSum(mat: Array[Array[Int]], k: Int): Array[Array[Int]] = {
        val lenM = mat.length
        val lenN = mat.head.length
        val res = Array.ofDim[Int](lenM, lenN)
        val acc = Array.ofDim[Int](lenM+1, lenN+1)
        for (i<-1 until acc.length; j<-1 until acc.head.length) {
          acc(i)(j) = acc(i-1)(j) + acc(i)(j-1) + mat(i-1)(j-1) - acc(i-1)(j-1)
        }
        for (i<-mat.indices; j<-mat.head.indices) {
            res(i)(j) = acc(math.min(lenM, i+k+1))(math.min(lenN, j+k+1)) - acc(math.max(0, i-k))(math.min(lenN, j+k+1)) - acc(math.min(lenM, i+k+1))(math.max(0, j-k)) + acc(math.max(0, i-k))(math.max(0, j-k))
        }
        res
    }
}
```