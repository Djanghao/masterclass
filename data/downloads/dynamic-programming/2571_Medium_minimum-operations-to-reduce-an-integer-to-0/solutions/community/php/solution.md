# Nearest degree with recursive very easy

**Author:** azizbekeshonaliyev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3203883/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3203883/)

---


# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function minOperations($n) {
        
        $p = 0;
        
        while(true) {
            if(2 ** $p - $n > 0) break;
            elseif(2 ** $p - $n == 0) return 1;
            $p++;
        }
        
        $closest = min(($n - 2 ** ($p - 1)), (2 ** $p - $n));
        
        return $this->minOperations($closest) + 1;
    }    
}
```