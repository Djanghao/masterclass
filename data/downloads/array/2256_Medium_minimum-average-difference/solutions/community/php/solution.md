# Using prefix sum , beats 100%

**Author:** shakir-uz-zaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2876661/](https://leetcode.com/problems/minimum-average-difference/solutions/2876661/)

---



# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minimumAverageDifference($nums) {
    for($i=1; $i<count($nums); $i++){
            $nums[$i] += $nums[$i-1];
        }
        $position = 0;
        $min = PHP_INT_MAX;
        $len = count($nums);
        for($i=0; $i<$len; $i++){
            $left = floor($nums[$i] / ($i+1)) ;
            if($i !== $len-1){
                $right = floor(($nums[$len-1] - $nums[$i]) / ($len-1-$i));
            }
            else $right =0;
            $tmp = abs( $left  - ($right));
            if(  $tmp  < $min  ) {
                $min = $tmp;
                $position = $i;
            }
        }
        return $position;

    }
}
```