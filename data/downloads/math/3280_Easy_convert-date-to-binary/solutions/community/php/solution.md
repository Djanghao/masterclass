# php

**Author:** 9SdWaZ11SF
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-date-to-binary/solutions/6084572/](https://leetcode.com/problems/convert-date-to-binary/solutions/6084572/)

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
     * @param String $date
     * @return String
     */
    function convertDateToBinary($date) {
        $explodeDate = explode('-', $date);

        foreach($explodeDate as $elem) {
            $binDate[] = decbin($elem);
        }

        return implode('-', $binDate);
    }
}
```