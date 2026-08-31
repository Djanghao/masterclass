# PHP using array solution | beats 100%

**Author:** nor1999
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/3013818/](https://leetcode.com/problems/number-of-distinct-averages/solutions/3013818/)

---

# Code
```
class Solution {
    function distinctAverages($nums) {
        sort($nums);
        $distinctAverages = array();

        $left = 0;
        $right = count($nums) - 1;
        while ($left <= $right) {
            $currentAverage = ($nums[$left] + $nums[$right]) / 2.0;
            if (!in_array($currentAverage, $distinctAverages)) {
                $distinctAverages[] = $currentAverage;
            }
            ++$left;
            --$right;
        }

        return count($distinctAverages);      
    }
}
```