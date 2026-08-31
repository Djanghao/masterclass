# PHP. T - O(m*n), M - O(n).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4378114/](https://leetcode.com/problems/most-visited-sector-in-a-circular-track/solutions/4378114/)

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
     * @param Integer $n
     * @param Integer[] $rounds
     * @return Integer[]
     */
    function mostVisited($n, $rounds) {
        $d = array_fill(0,$n,0);
        $max = 1;
        $d[$rounds[0]-1]++;
        for($i=1;$i < count($rounds);$i++){
            $s = $rounds[$i-1]+1;
            $e = $rounds[$i]+1;
            while($s != $e){
                if($s > $n){
                    $s = 1;
                    continue;
                }
                $d[$s-1]++;
                $max = max($max, $d[$s-1]);
                $s++;
            }
        }
        $res = [];
        foreach($d as $k => $v){
            if($v == $max){
                $res[] = $k+1;
            }
        }
        return $res;
    }
}
```