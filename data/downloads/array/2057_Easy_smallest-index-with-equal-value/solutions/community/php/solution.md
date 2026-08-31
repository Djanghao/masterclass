# php day 1

**Author:** shen_7
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4252655/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4252655/)

---



# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function smallestEqual($nums) {
        for($i=0 ; $i<count($nums) ; $i++){
            if($nums[$i]%10==$i%10){
                return $i;
            }
        }

        return -1;
    }
}
```