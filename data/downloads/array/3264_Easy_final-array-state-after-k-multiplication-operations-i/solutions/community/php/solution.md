# Simple PHP with Explanation

**Author:** SilverCircuit
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5875312/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5875312/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Loop and array search

# Complexity
- Time complexity:
7ms Beats 96.00%


- Space complexity:
19.31 mb Beats 100%

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @param Integer $multiplier
     * @return Integer[]
     */
    function getFinalState($nums, $k, $multiplier) {
        for ($i = 0; $i < $k; $i++) {
            $minIndex = array_search(min($nums), $nums); // Find the index of the first minimum value
            $nums[$minIndex] *= $multiplier; // Multiply the selected minimum value
        }
        return $nums;
    }
}

```