# Simple PHP solution beats 100%

**Author:** quanvip1999
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289167/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4289167/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function maximumElementAfterDecrementingAndRearranging($arr) {
        sort($arr);
        $len = count($arr);
        $arr[0] = 1;
        for ($i = 1; $i < $len; $i++) {
            if ($arr[$i] - $arr[$i - 1] > 1) {
                $arr[$i] = $arr[$i - 1] + 1;
            } 
        }

        return $arr[$len - 1];
    }
}
```