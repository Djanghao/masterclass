# PHP 100% Math | Fast

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4920256/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4920256/)

---

PHP | MATH | FAST
# Code
```
class Solution {

    /**
     * @param Integer $k
     * @return Integer
     */
    function minOperations($k) {
        $m = ceil(sqrt($k));
        return $m - 1 + intval($k / $m) - (($k % $m == 0) ? 1 : 0);
    }
}

```