# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/3386796/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/3386796/)

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
    def isOneBitCharacter(bits: Array[Int]): Boolean = {
        var i = 0
        while (i < bits.length - 1) if (bits(i) == 1) i += 2 else i += 1
        i == bits.length - 1
    }
}
```