# PHP Solution easy to get

**Author:** ramziddinrustamov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-triplets/solutions/4082610/](https://leetcode.com/problems/count-good-triplets/solutions/4082610/)

---



# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $a
     * @param Integer $b
     * @param Integer $c
     * @return Integer
     */
    function countGoodTriplets($arr, $a, $b, $c) {
        $count = count($arr);
        $result = 0;
        for($i = 0; $i < $count;$i++){
           for($j = $i+1; $j < $count;$j++){
              for($k = $j+1; $k < $count;$k++){
                if(
                  abs($arr[$i]-$arr[$j]) <= $a
                  &&
                  abs($arr[$j]-$arr[$k]) <= $b
                  &&
                  abs($arr[$i]-$arr[$k])<=$c
                ){
                  $result+=1;
                }
               }
           }
        }
        return $result;

    }
}
```