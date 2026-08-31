# Php solution

**Author:** Toxic17
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3950052/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3950052/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findValueOfPartition($nums) {
         sort($nums);
        $result = $nums[count($nums)-1];
        
        for($i=count($nums)-1;$i>0;$i--){
            $result = min($result,$nums[$i]-$nums[$i-1]);
        }
        
        return $result;
    }
}
```