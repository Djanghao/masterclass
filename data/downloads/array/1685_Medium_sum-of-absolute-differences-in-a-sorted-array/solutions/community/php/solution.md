# Solution Sum of Absolute Differences in a Sorted Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/5281536/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/5281536/)

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
    public function getSumAbsoluteDifferences($nums) {
        $total_sum = 0;
        $n = count($nums);
        
        for ($i = 0; $i < $n; $i++) {
            $total_sum += $nums[$i];
        }

        $ans = [];
        $curr_sum = 0;
        
        for ($i = 0; $i < $n; $i++) {
            $curr_sum += $nums[$i];
            $Rsum = $total_sum - $curr_sum;
            $Lsum = $curr_sum - $nums[$i];
            $Lsum = ($i * $nums[$i]) - $Lsum;
            $Rsum = $Rsum - ($n - ($i + 1)) * $nums[$i];
            $ans[] = $Lsum + $Rsum;
        }
        
        return $ans;
    }
}

```