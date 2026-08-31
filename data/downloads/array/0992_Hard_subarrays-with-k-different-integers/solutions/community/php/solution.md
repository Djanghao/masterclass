# best result with heads store

**Author:** menesterov
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4951712/](https://leetcode.com/problems/subarrays-with-k-different-integers/solutions/4951712/)

---

# Intuition
Each step find the longest subarrray then modify it's params by next steps

# Approach

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function subarraysWithKDistinct($nums, $k) {
        $res = $start = $end = 0;
        $length = count($nums);
        $heads[$nums[0]][] = 0;
        for ($start= 0; $start < $length; $start++) {
            while (count($heads) < $k && $end+1 < $length) {
                $end++;
                $tail++;
                $heads[$nums[$end]][] = $end;
            }
            while ($tail+1 < $length && isset($heads[$nums[$tail+1]])) {
                $tail++;
                $heads[$nums[$tail]][] = $tail;
            }
            if (count($heads) == $k) {
                $res += $tail - $end + 1;
            }
            array_shift($heads[$nums[$start]]);
            if (empty($heads[$nums[$start]])) {
                unset($heads[$nums[$start]]);
                $end = $tail;
            } elseif ($end < $heads[$nums[$start]][0]) {
                $end = $heads[$nums[$start]][0];
            }
        }
        return $res;
    }
}
```