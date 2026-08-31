# PHP. T - O(n), M - O(1).

**Author:** user0593j
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-for-each-query/solutions/4927607/](https://leetcode.com/problems/maximum-xor-for-each-query/solutions/4927607/)

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
     * @param Integer $maximumBit
     * @return Integer[]
     */
    function getMaximumXor($nums, $maximumBit) {
        $number = (2**$maximumBit)-1;
        foreach($nums as $k=>$v){
            $number ^= $v;
            $nums[count($nums)-1-$k] = $number;
        }
        return $nums;
    }
}
```