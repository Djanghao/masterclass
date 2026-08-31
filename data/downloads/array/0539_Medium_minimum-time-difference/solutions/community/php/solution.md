# PHP solution

**Author:** bhargavrangani00
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/5793116/](https://leetcode.com/problems/minimum-time-difference/solutions/5793116/)

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
```php []
class Solution {

    /**
     * @param String[] $timePoints
     * @return Integer
     */
    function findMinDifference($timePoints) {
        // Convert times to minutes
        $minutes = [];
        foreach ($timePoints as $time) {
            list($h, $m) = explode(':', $time);
            $minutes[] = $h * 60 + $m;
        }

        // Sort times in ascending order
        sort($minutes);

        // Find minimum difference across adjacent elements
        $min_diff = INF;
        for ($i = 0; $i < count($minutes) - 1; $i++) {
            $min_diff = min($min_diff, $minutes[$i + 1] - $minutes[$i]);
        }

        // Consider the circular difference between last and first element
        $min_diff = min($min_diff, 24 * 60 - $minutes[count($minutes) - 1] + $minutes[0]);

        return $min_diff;
    }
}
```