# Easy Scala One Liner Solution Using Maps .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/5140697/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/5140697/)

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
    def sumZero(n: Int): Array[Int] = {
        (0 until n).map(_*2-n+1).toArray
    }
}
```