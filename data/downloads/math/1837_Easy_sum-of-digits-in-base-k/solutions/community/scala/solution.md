# Scala bigint solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/3252192/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/3252192/)

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
    def sumBase(n: Int, k: Int): Int = {
        BigInt(n).toString(k).map(_.toString.toInt).sum
    }
}
```