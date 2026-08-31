# Easy cala Solution .

**Author:** HARSHIDAS_21
**Votes:** 1
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/5248484/](https://leetcode.com/problems/faulty-keyboard/solutions/5248484/)

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
    def finalString(s: String): String = {
        if   (s.count(_   ==  'i')   ==   0)   return s
        var str = ""
        for (i <- 0 until s.length) {
            if (s(i) == 'i')   str = str.reverse
             else   str += s(i)
        }
        str
    }
}

```