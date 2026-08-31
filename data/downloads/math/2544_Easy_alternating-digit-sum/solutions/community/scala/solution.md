# Scala oneliner

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/4747763/](https://leetcode.com/problems/alternating-digit-sum/solutions/4747763/)

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
    def alternateDigitSum(n: Int): Int = {
        n.toString.zipWithIndex.map(m=> (if (m._2 % 2 == 0) 1 else -1) * (m._1.toString.toInt)).sum
    }
}
```