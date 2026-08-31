# php

**Author:** Ber40
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/2910765/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/2910765/)

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
     * @param Integer[] $digits
     * @return Integer[]
     */
    function findEvenNumbers($d) {
        $a = [];
        $o = [1, 3, 5, 7, 9];
        $l = count($d);
        for($i=0; $i<$l; $i++){
            if ($d[$i]!=0){
            for($j=0; $j<$l; $j++) {
                if($i!=$j){
                for($q=0; $q<$l; $q++) {
                    if ($i!=$q && $j!=$q && !in_array($d[$q], $o)){
                    $n = $d[$i]*100 + $d[$j]*10+$d[$q];
                    $a[] = $n;
                    }
                }
                }
            }
            }
        }
        sort($a);
        return array_unique($a);
    }
}
```