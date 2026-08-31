# Simple Iteration using Arrays

**Author:** Noah-Elliott
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/5338840/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/5338840/)

---

# Intuition
Iterate, check.

# Approach
Arrays are fast in PHP, so splitting up the digits to an array would likely work well.

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function nextBeautifulNumber($n) {
        while (true) {
            $n++;
            $a = array_count_values(str_split($n));
            foreach ($a as $k => $v) {
                if ($k != $v) continue 2;
            }
            return $n;
        }
    }
}
```