# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-inverse-pairs-array/solutions/3570739/](https://leetcode.com/problems/k-inverse-pairs-array/solutions/3570739/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n*k)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def kInversePairs(n: Int, k: Int): Int = {
      val mod = 1000000007
      val dp = Array.ofDim[Int](n+1, k+1)
      for(i <- 1 to n; j <- 0 to k)
        if(j == 0) dp(i)(0) = 1
        else dp(i)(j) = ((dp(i)(j-1).toLong + dp(i-1)(j).toLong + mod - (if(j-i >= 0) dp(i-1)(j-i) else 0)) % mod).toInt
      if(k > 0) dp(n)(k) = ((dp(n)(k).toLong + mod - dp(n)(k-1).toLong) % mod).toInt
      dp(n)(k)
    }
}
```