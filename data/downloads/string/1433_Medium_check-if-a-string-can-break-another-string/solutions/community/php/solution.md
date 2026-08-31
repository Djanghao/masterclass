# PHP O(n) time O(1) space

**Author:** skulditsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/809489/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/809489/)

---

```
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @return Boolean
     */
    function checkIfCanBreak($s1, $s2) {
        return $this->isBeat($s1, $s2) || $this->isBeat($s2, $s1);
        
    }
    
    function isBeat($s1, $s2) {
        
        for ($i = 0; $i < strlen($s1); $i++) {
            $char = ord($s1[$i]);
            if (!isset($map1[$char])) { $map1[$char] = 0; }
            $map1[$char]++;
            
            $char = ord($s2[$i]);
            if (!isset($map2[$char])) { $map2[$char] = 0; }
            $map2[$char]++;
        }
        
        
        for ($i = ord('a'); $i <= ord('z'); $i++) {
            if ($map1[$i] == 0) { continue; }
            if ($map1[$i] >= $map2[$i]) {
                $map1[$i] -= $map2[$i];
                $map2[$i] = 0;
                
                $map1[$i+1] += $map1[$i];
                $map1[$i] = 0;
            } else {
                $map2[$i] -= $map1[$i];
                $map1[$i] = 0;
            }
            
            
        }
        
        return max($map1) == 0 ;
    }
}
```