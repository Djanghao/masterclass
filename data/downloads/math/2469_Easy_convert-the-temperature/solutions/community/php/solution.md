# php

**Author:** 9SdWaZ11SF
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-the-temperature/solutions/6084556/](https://leetcode.com/problems/convert-the-temperature/solutions/6084556/)

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
     * @param Float $celsius
     * @return Float[]
     */
    function convertTemperature($celsius) {
        return [
            $celsius + 273.15,
            $celsius * 9/5 + 32
        ];
    }
}
```