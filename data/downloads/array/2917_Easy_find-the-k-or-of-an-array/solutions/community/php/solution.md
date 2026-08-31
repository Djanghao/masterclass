# PHP. T - O(n), M - O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4621725/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4621725/)

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
O(n)
# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function findKOr($nums, $k) {
        $res = 0;
        $d = [];
        foreach($nums as $v){
            $i=0;
            while($v >0){
                $cur = $v & 1;
                $d[$i] += $cur;
                $v >>= 1;
                $i++;
            }
        }
        foreach($d as $i => $v){
            if($v >= $k){
                $res += 2 ** $i;
            }
        }
        return $res;
    }
}
```