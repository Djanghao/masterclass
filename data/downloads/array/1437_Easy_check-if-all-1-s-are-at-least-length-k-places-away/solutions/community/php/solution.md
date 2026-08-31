# Php day 1

**Author:** shen_7
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/4252086/](https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/solutions/4252086/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */
    function kLengthApart($nums, $k) {
        $arrayTemp=array();
        for($i=0 ; $i<count($nums) ; $i++){
            if($nums[$i]==1){
                array_push($arrayTemp,$i);
            }
        }

        for($i=0 ; $i<count($arrayTemp)-1; $i++){
            print($arrayTemp[$i]);
            if($arrayTemp[$i+1]-$arrayTemp[$i]-1<$k){
                return false;
            }
        }

        return true;
    }
}
```