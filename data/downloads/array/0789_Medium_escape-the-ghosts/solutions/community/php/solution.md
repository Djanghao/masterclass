# Solution Escape The Ghosts

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/4788428/](https://leetcode.com/problems/escape-the-ghosts/solutions/4788428/)

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
     * @param Integer[][] $ghosts
     * @param Integer[] $target
     * @return Boolean
     */
    function escapeGhosts($ghosts, $target) {
        $distance = abs($target[0]) + abs($target[1]);
        foreach ($ghosts as $ghost) {
            $ghostDistance = abs($ghost[0] - $target[0]) + abs($ghost[1] - $target[1]);
            if ($ghostDistance <= $distance) {
                return false;
            }
        }
        return true;
    }
}

```