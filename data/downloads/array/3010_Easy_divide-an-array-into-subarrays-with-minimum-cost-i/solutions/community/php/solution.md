# PHP. T - O(n), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4686272/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4686272/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimumCost($nums) {
        $f = $nums[0];
        $s = PHP_INT_MAX;
        $t = PHP_INT_MAX;
        for($i=1;$i<count($nums);$i++){
            if($nums[$i] <= $s){
                $t = $s;
                $s = $nums[$i];
            } else if($nums[$i] < $t){
                $t = $nums[$i];
            }
        }
        return $f+$s+$t;
    }
}
```