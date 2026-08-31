# Optimal Solution With 100% Time And Space Complexity .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/5308981/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/5308981/)

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
    def maxDivScore(nums: Array[Int], divisors: Array[Int]): Int = {
        var res = 0
        var curr = -1
        for (d <- divisors) {
            var score = 0
            for (it <- nums) {
                if (it % d == 0) {
                    score += 1
                }
            }
            if (score >= curr) {
                if (score == curr) {
                    res = Math.min(res, d)
                } else {
                    res = d
                }
                curr = score
            }
        }
        res
    }
}

```