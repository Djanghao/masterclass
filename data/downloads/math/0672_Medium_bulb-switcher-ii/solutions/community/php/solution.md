# Solution Bulb Switcher II

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/bulb-switcher-ii/solutions/4773834/](https://leetcode.com/problems/bulb-switcher-ii/solutions/4773834/)

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
class Solution {

    /**
     * @param Integer $n
     * @param Integer $presses
     * @return Integer
     */
    function flipLights($n, $presses) {
        if ($n == 2 && $presses == 1) return 3;
        if ($presses == 1) return min(1 << min(4, $n), 4);
        if ($presses == 2) return min(1 << min(4, $n), 7);
        if ($presses >= 3) return min(1 << min(4, $n), 8);
        return 1;
    }
}

```