# scala dp solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-sightseeing-pair/solutions/3127000/](https://leetcode.com/problems/best-sightseeing-pair/solutions/3127000/)

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
    def maxScoreSightseeingPair(values: Array[Int]): Int = {
        var res = 0
        var acc = values.head

        for (i<- 1 until values.length) {
          res = math.max(res,acc+values(i) - i)
          acc = math.max(acc, values(i) + i)
        }
        
        res
    }
}
```