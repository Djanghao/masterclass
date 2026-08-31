# PHP 100 %

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4759692/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4759692/)

---

# Approach
letters with highest frequency stay at the end


# Code
```
class Solution {
    function lastNonEmptyString($s) {
        $d = array_count_values(str_split($s));
        $mx = max(array_values($d));
        $l = [];
        foreach(array_keys($d) as $x){
            if($d[$x]==$mx){$l[] = $x;}
        }
        $out = "";
        foreach(str_split(strrev($s)) as $letter){
            if (in_array($letter,$l)){
                $out .= $letter;
                array_splice($l,array_search($letter,$l),1);
            }
            if(count($l)==0){break;}
        }
        return strrev($out);
    }
}
```