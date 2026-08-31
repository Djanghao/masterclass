# Beats 100.00% of users with PHP || PHP Solution || Easy

**Author:** garimarajput748
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4459804/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4459804/)

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
     * @param String $s
     * @return Integer
     */
    function minOperations($s) {
    if (empty($s)) return 0;

    $alternateZero = 0;
    $alternateOne = 0;
    $minOperation = PHP_INT_MAX;

    for ($i = 0; $i < strlen($s); $i++) {
        if ($i % 2 === 0) {
            if ($s[$i] === '0') {
                $alternateOne++;
            } else {
                $alternateZero++;
            }
        } else {
            if ($s[$i] === '1') {
                $alternateOne++;
            } else {
                $alternateZero++;
            }
        }
    }

    return min($alternateZero, $alternateOne);
}
}
```