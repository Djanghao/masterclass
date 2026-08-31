# php

**Author:** 9SdWaZ11SF
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/6088802/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/6088802/)

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
     * @param Integer[] $hours
     * @param Integer $target
     * @return Integer
     */
    function numberOfEmployeesWhoMetTarget($hours, $target) {
        return count(array_filter($hours, fn($hour) => $hour >= $target ));
    }
}
```