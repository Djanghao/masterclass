# PHP

**Author:** akarabudka
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5946943/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/5946943/)

---

```
class Solution {

    function numberOfLines($widths, $s) {
        $linesCnt = 1;
        $currLineWidth = 0;
        $sLen = strlen($s);
        $map = array_combine(range('a', 'z'), $widths);
        
        if(!$sLen){
            return [0, 0];
        }
        
        for($i = 0; $i < $sLen; $i++){
            $charLen = $map[$s[$i]];
            
            if($currLineWidth + $charLen > 100){
                $linesCnt++;
                $currLineWidth = 0;
            }
            
            $currLineWidth += $charLen;
        }
        
        return [$linesCnt, $currLineWidth];
    }
}
```