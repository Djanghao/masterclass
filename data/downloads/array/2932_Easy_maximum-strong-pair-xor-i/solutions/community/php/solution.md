# PHP. T - O(n**2), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/4611004/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/4611004/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n**2)
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
    function maximumStrongPairXor($nums) {
        sort($nums);
        $res = 0;
        for($i=0;$i<count($nums);$i++){
            $j=$i+1;
            while(abs($nums[$i]-$nums[$j])<=min($nums[$i],$nums[$j]) && $j < count($nums)){
                $res = max($res,$nums[$i]^$nums[$j]);
                $j++;
            }
        }
        return $res;
    }
}
```