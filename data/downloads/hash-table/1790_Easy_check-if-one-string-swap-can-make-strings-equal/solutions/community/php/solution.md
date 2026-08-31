# Php || 60% ||  100%

**Author:** LuisFelipe1
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/4960298/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/4960298/)

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
     * @param String $s1
     * @param String $s2
     * @return Boolean
     */
    function areAlmostEqual($s1, $s2) {
        
        if($s1 == $s2) return true;
        
        for($i=0; $i<strlen($s1)-1; $i++){

            for($j=0; $j<strlen($s1)-1; $j++){

                $cadena = $s1;

                $primer = $cadena[$j];
                $segundo = $cadena[$i+1];

                $cadena[$j] = $segundo;
                $cadena[$i+1] = $primer;

                if($cadena == $s2) return true;

            }
        }

        return false;

    }
}
```