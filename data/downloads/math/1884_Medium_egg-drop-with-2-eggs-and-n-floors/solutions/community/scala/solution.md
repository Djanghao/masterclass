# scala dp solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/3667559/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/3667559/)

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
  def twoEggDrop(n: Int): Int = {
    val dp = Array.fill(2, 1010)(Integer.MAX_VALUE)
    for(i <- 0 to n) dp(0)(i) = i
    dp(0)(0) = 0
    dp(1)(0) = 0
    for{i <- 1 to n
        j <- 1 to i}{
      dp(1)(i) = dp(1)(i) min (dp(0)(j-1) + 1 max dp(1)(i-j) + 1)
    }
    dp(1)(n)
  }
}
```