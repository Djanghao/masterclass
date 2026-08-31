# Easy One Liner Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5064349/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5064349/)

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
    def findLucky(arr: Array[Int]): Int = {
        arr.groupBy(identity).view.mapValues( _.size ).collect{case (ele,freq) if freq == ele=> ele}.toList.sorted.lastOption.getOrElse(-1)
    }
}
```