# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/3565014/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/3565014/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log(n) * log(k))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findKthNumber(n: Int, k: Int): Int = {
      var prefix = 1
      var count = 1
      while (count < k) {
        val currCount = getCountWithPrefix(prefix, prefix + 1, n)
        if (currCount + count <= k) {
          count += currCount
          prefix += 1
        } else {
          prefix *= 10
          count += 1
        }
      }
      prefix
    }

    def getCountWithPrefix(startPrefix: Long, endPrefix: Long, max: Int): Int = {
      var count:Long = 0
      var sp = startPrefix
      var ep = endPrefix
      while (sp <= max) {
        count += math.min(max + 1, ep) - sp
        sp *= 10
        ep *= 10
      }
      count.toInt
    }
}
```