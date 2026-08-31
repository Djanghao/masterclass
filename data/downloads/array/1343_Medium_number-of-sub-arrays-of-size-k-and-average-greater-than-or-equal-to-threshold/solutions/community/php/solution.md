# Solution Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/4925490/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/4925490/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @param Integer $threshold
     * @return Integer
     */
    function numOfSubarrays($arr, $k, $threshold) {
        $count = 0;
        $sum = 0;

        for ($i = 0; $i < $k; $i++) {
            $sum += $arr[$i];
        }

        if ($sum / $k >= $threshold) {
            $count++;
        }

        for ($i = $k; $i < count($arr); $i++) {
            $sum += $arr[$i] - $arr[$i - $k];
            if ($sum / $k >= $threshold) {
                $count++;
            }
        }

        return $count;
    }
}

```