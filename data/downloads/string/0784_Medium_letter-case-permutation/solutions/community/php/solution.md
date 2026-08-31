# PHP 100 %

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/4796905/](https://leetcode.com/problems/letter-case-permutation/solutions/4796905/)

---

# Approach
Create all strings with a loop

# Code
```
class Solution {
    function letterCasePermutation($s) {
        $s = str_split(strtolower($s));
        $out = [""];
        for($i=0;$i<count($s);$i++){
            $out2 = [];
            $to_add = [$s[$i]];
            if(ctype_alpha($s[$i])){$to_add[] = strtoupper($s[$i]);}
            foreach($out as $x){
                foreach($to_add as $add){ $out2[] = $x.$add; }
            }
            $out = $out2;
        }
        return $out;
    }
}
```