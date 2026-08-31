# Solution Reach a Number

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-a-number/solutions/4784338/](https://leetcode.com/problems/reach-a-number/solutions/4784338/)

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
     * @param Integer $target
     * @return Integer
     */
    function reachNumber($target) {
        $target = abs($target);
        
        $steps = 0;
        $sum = 0;
        while ($sum < $target || ($sum - $target) % 2 != 0) {
            $steps++;
            $sum += $steps;
        }
        
        return $steps;
    }
}

```