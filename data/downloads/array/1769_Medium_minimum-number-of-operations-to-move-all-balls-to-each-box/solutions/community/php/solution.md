# PHP (20-30ms). T - O(n), M - O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/4572421/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/4572421/)

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
     * @param String $boxes
     * @return Integer[]
     */
    function minOperations($boxes) {
        $d1 = [];
        $boxes = str_split($boxes); 
        foreach($boxes as $k => $v){
            $d1[] = $v + ($d1[$k-1] ?? 0);
        }
        $d3 = [];
        for($i = 0; $i < count($boxes);$i++){
            $d3[$i] = ($d1[$i-1] ?? 0)+($d3[$i-1] ?? 0);
        }
        $d2 = array_fill(0,count($boxes),0);
        for($i = count($boxes)-1;$i>= 0;$i--){
            $d2[$i] = $boxes[$i] + ($d2[$i+1] ?? 0);
        }
        $d4 = array_fill(0,count($boxes),0);
        for($i = count($boxes)-1;$i >= 0;$i--){
            $d4[$i] = ($d4[$i+1] ?? 0) + ($d2[$i+1] ?? 0);
        }
        $res = [];
        for($i = 0; $i < count($boxes);$i++){
            
            $res[] = $d3[$i]+$d4[$i];
        }
        return $res;
    }
}
```