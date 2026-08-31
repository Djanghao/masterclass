# Solution Maximum Sum of 3 Non-Overlapping Subarrays

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/4751825/](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/4751825/)

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
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer[]
     */
    function maxSumOfThreeSubarrays($nums, $k) {
        $n = count($nums);
        
        $sums = [];
        $currSum = 0;
        for ($i = 0; $i < $n; $i++) {
            $currSum += $nums[$i];
            if ($i >= $k) {
                $currSum -= $nums[$i - $k];
            }
            if ($i >= $k - 1) {
                $sums[] = $currSum;
            }
        }
        
        $leftMax = array_fill(0, $n, 0);
        $maxIndex = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($sums[$i] > $sums[$maxIndex]) {
                $maxIndex = $i;
            }
            $leftMax[$i] = $maxIndex;
        }
        
        $rightMax = array_fill(0, $n, 0);
        $maxIndex = $n - 1;
        for ($i = $n - 1; $i >= 0; $i--) {
            if ($sums[$i] >= $sums[$maxIndex]) {
                $maxIndex = $i;
            }
            $rightMax[$i] = $maxIndex;
        }
        
        $maxSum = 0;
        $result = [];
        for ($j = $k; $j < $n - $k; $j++) {
            $left = $leftMax[$j - $k];
            $right = $rightMax[$j + $k];
            $totalSum = $sums[$left] + $sums[$j] + $sums[$right];
            if ($totalSum > $maxSum) {
                $maxSum = $totalSum;
                $result = [$left, $j, $right];
            }
        }
        
        return $result;
    }
}

```