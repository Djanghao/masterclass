# PHP. T - O(26*n), M - O(26).

**Author:** user0593j
**Votes:** 0
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/4994212/](https://leetcode.com/problems/letter-tile-possibilities/solutions/4994212/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(26*n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(26)
# Code
```
class Solution {

    /**
     * @param String $tiles
     * @return Integer
     */
    function numTilePossibilities($tiles) {
        $d = [];
        for($i=0;$i<strlen($tiles);$i++){
            $d[$tiles[$i]]++;
        }
        $this->rec($d);
        return $this->res;
    }
    private $res = 0;

    function rec($arr){
        if(count($arr)===0) return;
        
        foreach($arr as $k => $v){
            $tmp = $arr;
            $this->res++;
            $tmp[$k]--;
            if($tmp[$k] === 0){
                unset($tmp[$k]);
            }
            $this->rec($tmp);
        }
    }
}
```