# PHP Two Pointers Solution

**Author:** nikolay_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/3647317/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/3647317/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function countHillValley($nums) {
        $j = 0;
        $count = 0;

        // Iterate through the array, excluding the first and last elements
        for($i = 1; $i < count($nums)-1; $i++) {
            
            // Check if the current element is part of a hill
            if($nums[$i] > $nums[$j] && $nums[$i] > $nums[$i + 1]) {
                $count++;
                $j = $i;
            }
            
            // Check if the current element is part of a valley
            if($nums[$i] < $nums[$j] && $nums[$i] < $nums[$i + 1]) {
                $count++;
                $j = $i;
            }
        }

        return $count;
    }
}
```