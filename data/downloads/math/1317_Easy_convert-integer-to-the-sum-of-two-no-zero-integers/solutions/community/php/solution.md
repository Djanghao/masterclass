# Solution Convert Integer to the Sum of Two No-Zero Integers

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/4918327/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/4918327/)

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
     * @param Integer $n
     * @return Integer[]
     */
    function getNoZeroIntegers($n) {
        for ($a = 1; $a < $n; $a++) {
            $b = $n - $a;
            if (strpos($a, '0') === false && strpos($b, '0') === false) {
                return [$a, $b];
            }
        }
        return [-1, -1];
    }
}

```