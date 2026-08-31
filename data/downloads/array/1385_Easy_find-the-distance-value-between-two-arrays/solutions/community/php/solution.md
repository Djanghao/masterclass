# Solution Find the Distance Value Between Two Arrays

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/4956504/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/4956504/)

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
     * @param Integer[] $arr1
     * @param Integer[] $arr2
     * @param Integer $d
     * @return Integer
     */
    function findTheDistanceValue($arr1, $arr2, $d) {
        $count = 0;
        for ($i = 0; $i < count($arr1); $i++) {
            $mark = 0;
            for ($j = 0; $j < count($arr2); $j++) {
                $x = abs($arr1[$i] - $arr2[$j]);
                if ($x <= $d) {
                    $j = count($arr2) - 1;
                } else {
                    $mark++;
                }
            }
            if ($mark == count($arr2)) {
                $count++;
            }
        }
        return $count;
    }
}

```