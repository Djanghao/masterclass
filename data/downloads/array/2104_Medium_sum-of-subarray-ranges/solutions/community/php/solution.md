# PHP Solution

**Author:** mohammed_aladham
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/3531719/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/3531719/)

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
     * @return Integer
     */
    function subArrayRanges($nums) {
        $ans = 0;

        for($left=0; $left<count($nums); $left++){
            $min = $nums[$left];
            $max = $nums[$left];

            for($right=$left; $right<count($nums); $right++){
                $min = min($min, $nums[$right]);
                $max = max($max, $nums[$right]);
                $ans += $max - $min; 
            }
        }

        return $ans;
    }
}
```