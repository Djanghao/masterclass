# Solution 658. Find K Closest Elements

**Author:** Suyono-Sukorame
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/4769712/](https://leetcode.com/problems/find-k-closest-elements/solutions/4769712/)

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

    function findClosestElements($arr, $k, $x) {
        $left = 0;
        $right = count($arr) - $k;
        while ($left < $right) {
            $mid = ($left + $right) >> 1;
            if ($x - $arr[$mid] > $arr[$mid + $k] - $x) {
                $left = $mid + 1;
            } else {
                $right = $mid;
            }
        }
        return array_slice($arr, $left, $k);
    }
}

```