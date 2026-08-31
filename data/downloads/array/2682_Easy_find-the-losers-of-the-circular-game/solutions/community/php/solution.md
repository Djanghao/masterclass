# PHP. T- O(n), M - O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/4447140/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/4447140/)

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
     * @param Integer $n
     * @param Integer $k
     * @return Integer[]
     */
    function circularGameLosers($n, $k) {
        $d = array_fill(0,$n,0);
        $kk = 0;
        $i = 0;
        while(true){
            $i = ($i + $kk * $k) % $n;
            $d[$i]++;
            $kk++;
            if($d[$i] > 1){
                break;
            }
        }
        $res = [];
        foreach($d as $k => $v){
            if($v == 0) $res[] = $k+1;
        }
        return $res;
    }
}
```