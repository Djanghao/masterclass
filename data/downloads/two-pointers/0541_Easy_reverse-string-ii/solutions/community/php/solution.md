# PHP - Clean solution

**Author:** akarabudka
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/5710388/](https://leetcode.com/problems/reverse-string-ii/solutions/5710388/)

---

```
class Solution {

    function reverseStr($s, $k) {
        $sLen = strlen($s) - 1;
    
        for($i = 0; $i <= $sLen; $i += 2 * $k){
        
            $l = $i;
            $r = $i + $k - 1;
            
            if($r > $sLen){
                $r = $sLen;
            }
                        
            while($l <= $r){
                $tmp = $s[$l];
                $s[$l] = $s[$r];
                $s[$r] = $tmp;
                $l++;
                $r--;
            }
        }
        
        return $s;
    }
}
```