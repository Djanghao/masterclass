# Solution Implement Rand10() Using Rand7()

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/4726647/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/4726647/)

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
/*
 * The rand7() API is already defined for you.
 * @return a random integer in the range 1 to 7
 * function rand7();
*/

class Solution {
    /**
     * @return Integer
     */
    function rand10() {
        while (true) {
            $rand49 = (rand7() - 1) * 7 + rand7();
            if ($rand49 <= 40) {
                return ($rand49 % 10) + 1;
            }
        }
    }
}

```