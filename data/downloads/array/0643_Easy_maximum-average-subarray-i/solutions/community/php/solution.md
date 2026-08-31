# A very simple solution in PHP

**Author:** AndreaChia1
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/5217779/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/5217779/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Float
     */
    function findMaxAverage($nums, $k) {
        if (count($nums) == 1){
            return $nums[0];
        }

        $sum = 0;
        for($i = 0; $i < $k; $i++){
            $sum += $nums[$i];
        }

        $maxSum = $sum;

        for($i = $k; $i < count($nums); $i++){
            $sum += $nums[$i] - $nums[$i - $k];
            if($sum > $maxSum){
                $maxSum = $sum;
            }
        }

        return $maxSum / $k;

    }
}
```