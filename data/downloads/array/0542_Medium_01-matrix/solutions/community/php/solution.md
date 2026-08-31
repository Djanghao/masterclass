# PHP solution

**Author:** greyslim
**Votes:** 1
**Link:** [https://leetcode.com/problems/01-matrix/solutions/3151436/](https://leetcode.com/problems/01-matrix/solutions/3151436/)

---


```
class Solution {

    /**
     * @param Integer[][] $mat
     * @return Integer[][]
     */
    function updateMatrix($mat) {
        $count1 = count($mat) - 1 ;
        $count2 = count($mat[0]) - 1;

        for($x = 0; $x <= $count1; $x++){
            for($y = 0; $y <= $count2; $y++){
                if($mat[$x][$y] != 0){
                    $mat[$x][$y] = PHP_INT_MAX;
                    if(isset($mat[$x-1][$y]))
                      $mat[$x][$y] = min($mat[$x][$y],$mat[$x-1][$y] +1);
                    if(isset($mat[$x][$y-1]))
                      $mat[$x][$y] = min($mat[$x][$y],$mat[$x][$y-1] +1);
                }
            }
        }

        for($x = $count1; $x >= 0; $x--){
            for($y = $count2; $y >= 0; $y--){
                if($mat[$x][$y] != 0){
                    if(isset($mat[$x+1][$y]))
                      $mat[$x][$y] = min($mat[$x][$y],$mat[$x+1][$y] +1);
                    if(isset($mat[$x][$y+1]))
                      $mat[$x][$y] = min($mat[$x][$y],$mat[$x][$y+1] +1);
                }
            }
        }

        return $mat;
    }
}
```