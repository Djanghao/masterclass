# 100% efficient

**Author:** AhsanSoftEngr
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/6061333/](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/6061333/)

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
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function maximumSubarraySum($nums, $k) {
        $n = count($nums);
        $maxSum = 0;
        $currentSum = 0;
        $window = [];
        
        for ($i = 0; $i < $n; $i++) {
            // Add the current element to the sliding window
            $window[$nums[$i]] = isset($window[$nums[$i]]) ? $window[$nums[$i]] + 1 : 1;
            $currentSum += $nums[$i];
            
            // If the window exceeds size k, shrink it
            if ($i >= $k) {
                $elementToRemove = $nums[$i - $k];
                $currentSum -= $elementToRemove;
                $window[$elementToRemove]--;
                if ($window[$elementToRemove] == 0) {
                    unset($window[$elementToRemove]);
                }
            }
            
            // Check if the current window is valid and update the max sum
            if (count($window) === $k) {
                $maxSum = max($maxSum, $currentSum);
            }
        }
        
        return $maxSum;
    }
}

```