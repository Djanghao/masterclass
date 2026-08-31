# Simple fast solution with hash map (beat 100% PHP runtime)

**Author:** DzmitryBahdanovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/4418000/](https://leetcode.com/problems/largest-unique-number/solutions/4418000/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Store information about how many times each number appears in the nums array in an associative array (map). Iterate through the map and find the maximum number that appeared only once.
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function largestUniqueNumber($nums) {
        $map = [];
        foreach($nums as $num) {
            $map[$num] += 1;
        }

        $max = -1;
        foreach($map as $num => $count) {
            if ($count === 1) {
                $max = max($max, $num);
            }
        }

        return $max;
    }
}
```