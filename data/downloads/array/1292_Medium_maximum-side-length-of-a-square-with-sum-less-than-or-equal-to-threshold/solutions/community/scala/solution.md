# Scala sliding window solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/3328170/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/3328170/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(mn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def maxSideLength(mat: Array[Array[Int]], threshold: Int): Int = {
        val m = mat.length
        val n = mat.head.length
        val sum = Array.ofDim[Int](m+1,n+1)
        var res = 0
        var len = 1
        for (i<-1 to m; j<-1 to n) {
            sum(i)(j) = sum(i-1)(j) + sum(i)(j-1) - sum(i-1)(j-1) + mat(i-1)(j-1)
            if (i>=len && j>=len && sum(i)(j) - sum(i-len)(j) - sum(i)(j-len) + sum(i-len)(j-len) <= threshold)
            {
                res = len
                len += 1
            }
        }
        res
    }
}
```