# php simple solution

**Author:** effigiesss
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/4035682/](https://leetcode.com/problems/longest-alternating-subarray/solutions/4035682/)

---



# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function alternatingSubarray($nums) {
        $result = 0;
        $ln = count($nums);
        
        for($i = 0; $i < $ln; $i++) {
            $curMax = 0;
            $carry = 0;
            
            for($j = $i + 1; $j < $ln; $j++) {
                $sum = $nums[$j] - $nums[$j - 1];

                if ($carry === 0) {
                    if ($sum === 1) {
                        $curMax += 2;
                        $carry = $sum;
                    } else {
                        break;
                    }

                    continue;
                }

                if ($sum + $carry === 0) {
                    $curMax++;
                    $carry = $sum;
                    
                    continue;
                } 

                break;
            }

            if ($curMax > $result) {
                $result = $curMax;
            }
        }
        
        return $result > 0? $result: -1;
    }
}
```