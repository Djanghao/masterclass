# PHP. T- O(n), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/4416022/](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/4416022/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Count all breaks in array
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
     * @return Boolean
     */
    function check($nums) {
        $breaks = 0;
        $l = count($nums);
        for($i = 1; $i <= $l; $i++){
            // last comparison between first and last values
            if($nums[$i == $l ? 0 : $i] < $nums[$i-1]){
                $breaks++;
            }
        }
        
        return $breaks < 2;
    }
}
```