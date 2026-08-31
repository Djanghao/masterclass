# 2149. Rearrange Array Elements by Sign solve in seconda

**Author:** ayanahmedcorder
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/5465521/](https://leetcode.com/problems/rearrange-array-elements-by-sign/solutions/5465521/)

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
<?php
class Solution {
    public function rearrangeArray($nums) {
        $positive = [];
        $negative = [];

        // Separate positive and negative numbers
        foreach ($nums as $num) {
            if ($num > 0) {
                $positive[] = $num;
            } else {
                $negative[] = $num;
            }
        }

        // Merge positive and negative arrays alternately
        $result = [];
        $posIndex = 0;
        $negIndex = 0;

        // Since the array length is even, iterate half the length to fill pairs
        for ($i = 0; $i < count($positive); $i++) {
            $result[] = $positive[$posIndex++];
            $result[] = $negative[$negIndex++];
        }

        return $result;
    }
}

// Example usage:
$solution = new Solution();
$nums = [3, 1, -2, -5, 2, -4];
print_r($solution->rearrangeArray($nums));  // Output: [3, -2, 1, -5, 2, -4]

$nums = [-1, 1];
print_r($solution->rearrangeArray($nums));  // Output: [1, -1]
?>

```