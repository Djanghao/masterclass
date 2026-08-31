# PHP (xor). T - O(n), M - O(1).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/4426703/](https://leetcode.com/problems/check-if-array-is-good/solutions/4426703/)

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
     * @return Boolean
     */
    function isGood($nums) {
        $n = 0;
        $l = count($nums)-1;
        $count = 0;

        foreach($nums as $v){
            if($v > $l) return false;
            if($v === $l){
                $n++;
            } else {
                $count ^= $v;
            }
        }
        for($i = 1; $i < $l; $i++){
            $count ^= $i;
        }
        
        return $count === 0 && $n === 2;
    }
}
```