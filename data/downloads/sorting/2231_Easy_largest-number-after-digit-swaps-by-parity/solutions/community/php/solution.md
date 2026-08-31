# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/5091584/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/5091584/)

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
    function largestInteger($num) {
    $str = strval($num);
    $arrSort = str_split($str);
    sort($arrSort);
    $even = [];
    $odd = [];
    foreach ($arrSort as $el) {
        if ((int)$el % 2 === 0) {
            array_push($even, $el);
        } else {
            array_push($odd, $el);
        }
    }
    $ans = '';
    foreach (str_split($str) as $el) {
        if ((int)$el % 2 === 0) {
            $ans .= array_pop($even);
        } else {
            $ans .= array_pop($odd);
        }
    }
    return intval($ans);
    }
}
```