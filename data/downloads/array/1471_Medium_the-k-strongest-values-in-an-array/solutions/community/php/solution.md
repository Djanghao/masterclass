# Solution The k Strongest Values in an Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/5045772/](https://leetcode.com/problems/the-k-strongest-values-in-an-array/solutions/5045772/)

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
     * @return Integer[]
     */
    function getStrongest($arr, $k) {
        sort($arr);
        $n = count($arr);
        $m = ($n - 1) / 2;
        $i = 0;
        $j = $n - 1;
        $ans = [];

        while ($i <= $j) {
            if (abs($arr[$i] - $arr[$m]) > abs($arr[$j] - $arr[$m])) {
                $ans[] = $arr[$i++];
            } else {
                $ans[] = $arr[$j--];
            }
        }

        return array_slice($ans, 0, $k);
    }
}

```