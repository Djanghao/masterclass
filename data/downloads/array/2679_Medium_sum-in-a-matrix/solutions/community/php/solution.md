# Sum in a Matrix

**Author:** bluandesign
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/4101974/](https://leetcode.com/problems/sum-in-a-matrix/solutions/4101974/)

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
     * @param Integer[][] $nums
     * @return Integer
     */
    function matrixSum($nums)
    {
        $totals = [];
        foreach ($nums as $_k => $subnum) {
            rsort($subnum);
            $i = 0;
            while ($i < count($subnum)) {
                if (!isset($totals[$i]) || $subnum[$i] >= $totals[$i]) {
                    $totals[$i] = $subnum[$i];
                }
                $i++;
            }
        }
        return array_sum($totals);
    }
}
```