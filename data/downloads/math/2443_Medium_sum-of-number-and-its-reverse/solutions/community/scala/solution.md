# One Liner Code .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/5068990/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/5068990/)

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
    def sumOfNumberAndReverse(num: Int): Boolean = {
        (0 to num).exists(i=> i+ i.toString().reverse.toInt == num)
    }
}
```