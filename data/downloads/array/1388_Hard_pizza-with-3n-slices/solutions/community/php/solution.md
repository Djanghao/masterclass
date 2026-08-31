# Solution Pizza With 3n Slices

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/pizza-with-3n-slices/solutions/4961751/](https://leetcode.com/problems/pizza-with-3n-slices/solutions/4961751/)

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
     * @param Integer[] $slices
     * @return Integer
     */
    function maxSizeSlices($slices) {
        $solve = function ($index, $endIndex, $slices, $n, &$dp) use (&$solve) {
            if ($n == 0 || $index > $endIndex) {
                return 0;
            }
            if ($dp[$index][$n] != -1) {
                return $dp[$index][$n];
            }
            $take = $slices[$index] + $solve($index + 2, $endIndex, $slices, $n - 1, $dp);
            $notTake = 0 + $solve($index + 1, $endIndex, $slices, $n, $dp);
            return $dp[$index][$n] = max($take, $notTake);
        };

        $k = count($slices);
        $dp1 = array_fill(0, $k, array_fill(0, $k, -1));
        $case1 = $solve(0, $k - 2, $slices, $k / 3, $dp1);

        $dp2 = array_fill(0, $k, array_fill(0, $k, -1));
        $case2 = $solve(1, $k - 1, $slices, $k / 3, $dp2);
        
        return max($case1, $case2);
    }
}

```