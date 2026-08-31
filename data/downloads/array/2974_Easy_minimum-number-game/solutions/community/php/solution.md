# PHP Solution: Easy Approach

**Author:** sadi-tanvir
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/5427516/](https://leetcode.com/problems/minimum-number-game/solutions/5427516/)

---

# Complexity
- Time complexity: **O(n log n)**

- Space complexity: **O(n)**

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function numberGame($nums)
        {
            $arr = [];
            sort($nums);
            for ($i = 0; $i < count($nums); $i += 2) {
                $arr[count($arr)] = $nums[$i + 1];
                $arr[count($arr)] = $nums[$i];
            }
            return $arr;
        }
}
```