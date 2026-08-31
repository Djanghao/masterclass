# Alternating Digit Sum

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-digit-sum/solutions/6137984/](https://leetcode.com/problems/alternating-digit-sum/solutions/6137984/)

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
```php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
function alternateDigitSum($n) {
  $nums = str_split($n);
  $result = 0;
  foreach ($nums as $i => $num) {
    if ($i % 2 != 0) $result -= $num;
    if ($i % 2 == 0) $result += $num;
  }
  return $result;
}
}
```