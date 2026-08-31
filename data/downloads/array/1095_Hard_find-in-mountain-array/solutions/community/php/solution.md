# Solution Find in Mountain Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/4885546/](https://leetcode.com/problems/find-in-mountain-array/solutions/4885546/)

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
/**
 * // This is MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     function get($index) {}
 *     function length() {}
 * }
 */

class Solution {
    /**
     * @param Integer $target
     * @param MountainArray $mountainArr
     * @return Integer
     */
    function findInMountainArray($target, $mountainArr) {
        $n = $mountainArr->length();
        
        $left = 0;
        $right = $n - 1;
        while ($left < $right) {
            $mid = $left + intdiv($right - $left, 2);
            if ($mountainArr->get($mid) < $mountainArr->get($mid + 1)) {
                $left = $mid + 1;
            } else {
                $right = $mid;
            }
        }
        $peakIndex = $left;
        
        $left = 0;
        $right = $peakIndex;
        while ($left <= $right) {
            $mid = $left + intdiv($right - $left, 2);
            $midValue = $mountainArr->get($mid);
            if ($midValue === $target) {
                return $mid;
            } elseif ($midValue < $target) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
        
        $left = $peakIndex;
        $right = $n - 1;
        while ($left <= $right) {
            $mid = $left + intdiv($right - $left, 2);
            $midValue = $mountainArr->get($mid);
            if ($midValue === $target) {
                return $mid;
            } elseif ($midValue > $target) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
        
        return -1;
    }
}

```