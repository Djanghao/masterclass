# PHP 87.5/100 %

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5443146/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5443146/)

---


# Code
```
class Solution {
    function validStrings($n) {
        $l = ["0","1"];
        for($i=0;$i<$n-1;$i++){
            $l2 = [];
            foreach($l as $st){
                if($st[$i]=="1"){
                    $l2[] = $st."1";
                    $l2[] = $st."0";
                }
                else{$l2[] = $st."1";}
            }
            $l = $l2;
        }
        return $l;
    }
}
```