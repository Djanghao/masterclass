# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/least-operators-to-express-number/solutions/3646432/](https://leetcode.com/problems/least-operators-to-express-number/solutions/3646432/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def leastOpsExpressTarget(x: Int, target: Int): Int = {
        var pos = 0
        var neg = 0
        var k = 0
        var cur = target
        while (cur > 0) {
          val rem = cur % x
          cur /= x
          if (k > 0) {
            val pos2 = math.min(rem * k + pos, (rem + 1) * k + neg)
            val neg2 = math.min((x - rem) * k + pos, (x - rem - 1) * k + neg)
            pos = pos2
            neg = neg2
          } else {
            pos = rem * 2
            neg = (x - rem) * 2
          }
          k += 1
        }
        math.min(pos, k + neg) - 1
    }
}
```