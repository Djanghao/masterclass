# PHP 100 %

**Author:** fredo30400
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-prime-difference/solutions/5028684/](https://leetcode.com/problems/maximum-prime-difference/solutions/5028684/)

---

# Code
```
class Solution {
    function isprime($x){
        if ($x==2){return true;}
        if ($x%2==0 || $x<2){return false;}
        for($i=3;$i<=intval(sqrt($x));$i++){
            if ($x%$i==0){return false;}
        }
        return true;
    }
    function maximumPrimeDifference($nums) {
        $start = 0;
        $end = 0;
        $l = count($nums);
        for($i=0;$i<$l;$i++){
            if($this->isprime($nums[$i])){$start = $i;break;}
        }
        for($i=$l-1;$i>=0;$i--){
            if($this->isprime($nums[$i])){$end = $i;break;}
        }
        return $end - $start;
    }
}
```