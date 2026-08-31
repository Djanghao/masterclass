# Solution Kth Smallest Number in Multiplication Table

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/4751516/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/4751516/)

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
     * @param Integer $m
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function findKthNumber($m, $n, $k) {
        $left = 1;
        $right = $m * $n;

        while ($left < $right) {
            $mid = $left + floor(($right - $left) / 2);
            if ($this->countLessEqual($mid, $m, $n) < $k) {
                $left = $mid + 1;
            } else {
                $right = $mid;
            }
        }

        return $left;
    }

    function countLessEqual($target, $m, $n) {
        $count = 0;
        for ($i = 1; $i <= $m; $i++) {
            $count += min(floor($target / $i), $n);
        }
        return $count;
    }
}

```