# Solution Maximum Sum of Two Non-Overlapping Subarrays

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/4870632/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/4870632/)

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

    function maxSumTwoNoOverlap($nums, $firstLen, $secondLen) {
        $prefixSum = [0];
        $n = count($nums);
        
        for ($i = 0; $i < $n; $i++) {
            $prefixSum[$i + 1] = $prefixSum[$i] + $nums[$i];
        }
        
        $maxSum = 0;
        
        for ($i = 0; $i <= $n - $firstLen; $i++) {
            $firstSubarraySum = $prefixSum[$i + $firstLen] - $prefixSum[$i];
            
            for ($j = 0; $j <= $i - $secondLen; $j++) {
                $secondSubarraySum = $prefixSum[$j + $secondLen] - $prefixSum[$j];
                $maxSum = max($maxSum, $firstSubarraySum + $secondSubarraySum);
            }
            
            for ($j = $i + $firstLen; $j <= $n - $secondLen; $j++) {
                $secondSubarraySum = $prefixSum[$j + $secondLen] - $prefixSum[$j];
                $maxSum = max($maxSum, $firstSubarraySum + $secondSubarraySum);
            }
        }
        
        return $maxSum;
    }
}

```