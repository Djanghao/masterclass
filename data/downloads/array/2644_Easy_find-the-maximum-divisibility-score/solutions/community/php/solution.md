# PHP. T- O(m*n), M - O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/4435007/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/4435007/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(m*n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer[] $divisors
     * @return Integer
     */
    function maxDivScore($nums, $divisors) {
        $d = [];
        $max = 0;
        $res = 0;
        foreach($divisors as $v){
            if(isset($d[$v])) continue;
            $counter = 1;
            foreach($nums as $vv){
                if($vv % $v == 0){
                    $counter++;
                }
            }
            $d[$v] = $counter;
            if($counter === $max){
                $res = min($res, $v);
            } else if($counter > $max){
                $res = $v;
            }
            $max = max($max, $counter);
        }
        return $res;
    }
}
```