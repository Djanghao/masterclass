# Simple solution - Time O(n log n) Space O(1)

**Author:** H1Bro
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3437949/](https://leetcode.com/problems/maximize-greatness-of-an-array/solutions/3437949/)

---

# Complexity
- Time complexity: O(n log n)

- Space complexity: O(1)

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maximizeGreatness($nums) {
        sort($nums);
        $count = $i = $j = 0;

        while ($i < count($nums))
        {
            if($nums[$j] < $nums[$i])
            {
                $count++;
                $j++;
            }
            $i++;
        }

        return $count;
    }
}
```