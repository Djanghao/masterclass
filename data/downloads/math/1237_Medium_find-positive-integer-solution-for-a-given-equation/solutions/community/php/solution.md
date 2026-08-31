# Solution Find Positive Integer Solution for a Given Equation

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/4904514/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/4904514/)

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
     * @param  CustomFunction  $customfunction
     * @param  Integer  $z
     * @return Integer[][]
     */
    function findSolution($customfunction, $z) {
        $result = array();
        $x = 1;
        $y = 1000;
        while ($x <= 1000 && $y >= 1) {
            $val = $customfunction->f($x, $y);
            if ($val == $z) {
                $result[] = array($x, $y);
                $x++;
            } elseif ($val < $z) {
                $x++;
            } else {
                $y--;
            }
        }
        return $result;
    }
}

```