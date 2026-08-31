# PHP | solution

**Author:** zihadxomar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2759563/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2759563/)

---

Leave a comment if you need explanation 

```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $target
     * @return Integer
     */
    function makeIntegerBeautiful($n, $target) {
        $arr = str_split($n);
        $sum = array_sum($arr);
        if($sum>$target){
            $m = count($arr)-1;
            $tmp=0;
            $a =1;
            $c=1;
            $d=10;
            while($a==1){
                $e = pow($d,$c);
                $f = ($n%$e);
                $tmp = $e-$f;
                
                $tmp1 = $n+$tmp;
                $arr2 = str_split($tmp1);
                $sum = array_sum($arr2);
                if($sum<=$target){
                    return (int)$tmp;
                }
               $c++;
                
                
            }
            
        }else{
            return 0;
        }
        
    }
}
```