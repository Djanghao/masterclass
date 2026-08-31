# Simple code in one line

**Author:** 13B1lFipg2
**Votes:** 0
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/5918975/](https://leetcode.com/problems/thousand-separator/solutions/5918975/)

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
     * @return String
     */
    function thousandSeparator($n) {
       return number_format($n, 0, '', '.');

    }
}
```