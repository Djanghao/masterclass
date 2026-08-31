# Solution 100%

**Author:** hrabardzmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/5585115/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/5585115/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function maxNonOverlapping($nums, $target) {
        $counter = 0;
        $resHash[0] = 0;
        foreach($nums as $key=>$value){
            $summ += $value;
            if(isset($resHash[$summ - $target])){
                $counter++;
                $summ = 0;
                unset($resHash);
                $resHash[0] = 0;
            }else{
                $resHash[$summ] = $summ;
            }
        }
        return $counter;
    }
}
```