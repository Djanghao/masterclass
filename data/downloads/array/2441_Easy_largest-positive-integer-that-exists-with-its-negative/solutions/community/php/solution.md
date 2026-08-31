# Maximum Common Positive Integer

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5102695/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5102695/)

---

# Intuition
To find the maximum common number in the given array, we can identify positive and negative numbers separately and then check for common numbers between them.

# Approach
he approach is to iterate over the array and separate the positive and negative numbers into two different associative arrays. For each positive number, we check if its absolute value exists in the negative numbers. If it does, we update the maxCommon with the maximum of maxCommon and the current positive number. Finally, we return maxCommon if it\u2019s updated; otherwise, we return -1.

# Complexity
- Time complexity:
O(n), where n is the number of elements in the input array. We iterate through the array once to categorize positive and negative numbers and then iterate through the positive numbers to check for common ones.

- Space complexity:
O(n), where n is the number of elements in the input array. We use additional space to store positive and negative numbers separately.

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxK($nums) {
        $maxCommon = -1; // Default value if no common numbers found

        // Group positive and negative numbers into associative arrays
        $positive_numbers = [];
        $negative_numbers = [];
        foreach ($nums as $num) {
            if ($num > 0) {
                $positive_numbers[$num] = true;
            } elseif ($num < 0) {
                $negative_numbers[abs($num)] = true;
            }
        }

        // Find common numbers
        foreach ($positive_numbers as $pos => $_) {
            if (isset($negative_numbers[$pos])) {
                $maxCommon = max($maxCommon, $pos);
            }
        }

        return $maxCommon;
    }
}
```