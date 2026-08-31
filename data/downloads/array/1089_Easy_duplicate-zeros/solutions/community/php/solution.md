# PHP

**Author:** DanielProp
**Votes:** 2
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/2986904/](https://leetcode.com/problems/duplicate-zeros/solutions/2986904/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @return NULL
     */
    function duplicateZeros(&$arr) {
        $d = 0; //number of duplicetes executed
        $originalCount = count($arr);

        foreach($arr as $i=>$num){
            if($i+$d < $originalCount){
                $arr[$i+$d] = $num;
                if($num === 0 && $i+$d+1 < $originalCount){
                    $arr[$i+$d+1] = 0;
                    $d++;
                }
            }
        }
    }
}

```