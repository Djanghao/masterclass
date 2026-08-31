# PHP HashMap Solution

**Author:** user3299tR
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4508795/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-empty/solutions/4508795/)

---

Time complexity: O(N).
Space complexity: O(N).

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minOperations($nums) {
        $hmap = [];
        $count = 0;
        for($i = 0; $i<count($nums); $i++){
            $hmap[$nums[$i]]++;         
        }
        foreach($hmap as $k=>$v){
            if($v == 1) return -1;
            $count+=ceil($v/3); 
        }
    return  $count;
    }
}
```