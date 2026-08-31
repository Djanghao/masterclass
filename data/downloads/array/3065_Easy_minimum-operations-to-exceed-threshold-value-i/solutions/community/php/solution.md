# PHP Solution: Easy Approach

**Author:** sadi-tanvir
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/5427629/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/5427629/)

---

# Complexity
- Time complexity: **O(n)**

- Space complexity: **O(1)**

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
   function minOperations($nums, $k) {
        $count = 0;
        for ($i = 0; $i < count($nums); $i++) if ($k > $nums[$i]) $count++;
        return $count;
    }
}
```