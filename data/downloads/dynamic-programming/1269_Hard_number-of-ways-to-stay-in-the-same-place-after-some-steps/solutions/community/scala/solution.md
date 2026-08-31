# Scala O(n * k) explained 15 liners solution

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4675728/](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/solutions/4675728/)

---

# Intuition
At each step, the number of ways to get at a given position $$i$$ in the array is the sum of the ways to get to the  $$[i - 1, i + 1]$$ cells at the previous step.
There's no need to keep a whole matrix: we only need space to compute the current state given the previous one.
It's also useful to trade 2 extra cells in addition to $$arrLen$$ to be put at the extrems, so we save computation time (and code) at a minimal price.

# Approach

# Complexity
- Time complexity:
$$O(n * k)$$
where $$n$$ is the number of steps and $$k$$ is the array length

- Space complexity:
$$O(k)$$

# Code
```
object Solution {
  private val modulo = 1000000007
  def numWays(steps: Int, arrLen: Int): Int = {
    val dp = Array.fill(2)(Array.ofDim[Int](arrLen + 2)) // 2 extra cells here, so we don't have to do checks like if (j > 0) and if (j < arrLen - 1)
    dp(0)(1) = 1
    (1 to steps).foreach { i =>
      val prev = dp(i & 1 ^ 1)
      val next = dp(i & 1)
      (1 to arrLen).foreach { j =>
        next(j) = prev(j)       // stayed at previous step
        next(j) += prev(j - 1)  // moved right from previous step
        next(j) %= modulo
        next(j) += prev(j + 1)  // moved left from previous step
        next(j) %= modulo
      }
    }
    dp(steps & 1)(1)
  }
}
```