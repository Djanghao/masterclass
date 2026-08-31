# Runtime: 3ms Beats 100.00% of users with PHP

**Author:** GaGeLu2021
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solutions/4107979/](https://leetcode.com/problems/shortest-distance-to-a-character/solutions/4107979/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @param String $c
     * @return Integer[]
     */
    function shortestToChar($s, $c) {
        	$s = str_split($s);
            $pos = [];
            $result = [];
            
            foreach($s as $key=>$val){
                if($val == $c){
                $pos[] = $key;
                }
            }
            
            $lf = $rt = NULL;
            $keys = array_keys($s);
            for($i=0,$j=0;$i<sizeof($s); $i++){
                if($i>$rt){
                    $j++;
                }
                if(isset($pos[$j])) {$lf = $pos[$j];}
                if(isset($pos[$j+1])) {$rt = $pos[$j+1];}
                      
                
                if(isset($rt)){
                    $result[] = min(abs($keys[$i]-$lf), abs($keys[$i]-$rt));
                }else{
                    $result[] = abs($keys[$i]-$lf);
                }
                
                
            }
            
            return $result;
    }
}
```