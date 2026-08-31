# Simple & Easy Solution ✅

**Author:** unkwon0
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152502/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152502/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minOperations($nums) {
        sort($nums);
        $ans = count($nums);
        $j = 1;
        $dup = 0;
        // fill array with Zero
        $dupArr = array_fill(0, count($nums), 0);
        
        for ($i = 0; $i < count($nums); $i++) {

            while ($j < count($nums) && $nums[$j] <= $nums[$i] + count($nums) - 1) {
                if ($nums[$j] == $nums[$j - 1]) {
                    $dup++;
                }
                $dupArr[$j] = $dup;
                $j++;
            }
        print_r($dup);
        echo "\
";  
        print_r($dup);
        echo "\
";        
            $ans = min($ans, $i + (count($nums) - $j) + $dup - $dupArr[$i]);
        }
        
        return $ans;
    }
}
```