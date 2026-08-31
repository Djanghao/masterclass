# php

**Author:** nayden_bila
**Votes:** 1
**Link:** [https://leetcode.com/problems/nim-game/solutions/3391784/](https://leetcode.com/problems/nim-game/solutions/3391784/)

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
     * @return Boolean
     */
    function canWinNim($n) {

        $n = $n % 4;
        if ($n==0) return false;
        return true;
    }
}
```