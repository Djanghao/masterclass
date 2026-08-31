# PHP Faster than 100% of submissions && Uses less memory than 100% of submissions

**Author:** fatropolis1
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/891946/](https://leetcode.com/problems/minimum-absolute-difference/solutions/891946/)

---

```
class Solution {

    function minimumAbsDifference($arr) {
    sort($arr);
        $list = array();
        $min;
        
        foreach($arr as $y => $x)
        {
            if($min == '')
            {
                $min = abs($x - ($arr[$y + 1]));
            }
            if(abs($x - ($arr[$y + 1])) == $min)
            {
                array_push($list,array($x,$arr[$y+1]));
            }
            else if(abs($x - ($arr[$y + 1])) <= $min)
            {
                $list=array();
                array_push($list,array($x,$arr[$y+1]));
                $min = abs($x - ($arr[$y + 1]));
            }
        }
        
    
    
    
    
    return $list;
    }
}
```