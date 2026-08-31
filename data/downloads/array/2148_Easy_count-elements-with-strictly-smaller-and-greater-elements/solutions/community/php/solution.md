# PHP Solution

**Author:** tsymbarevych
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/2310608/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/2310608/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function countElements($nums) {
        $result = 0;
        
        foreach ($nums as $num) {
            $min = false;
            $max = false;
            
            foreach ($nums as $num1) {
                if ($num1 < $num) {
                    $min = true;    
                }
                
                if ($num1 > $num) {
                    $max = true;    
                }
                
                if ($min && $max) {
                    ++$result;
                    
                    continue 2;
                }
            }    
        }
        
        return $result;
    }
}
```