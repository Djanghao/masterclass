# PHP. T - O(k), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/4737756/](https://leetcode.com/problems/range-addition-ii/solutions/4737756/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(k)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {

    /**
     * @param Integer $m
     * @param Integer $n
     * @param Integer[][] $ops
     * @return Integer
     */
    function maxCount($m, $n, $ops) {
        foreach($ops as [$x,$y]){
            if($x < $m) $m = $x;
            if($y < $n) $n = $y;
        }
        return $m*$n;
    }
}
```