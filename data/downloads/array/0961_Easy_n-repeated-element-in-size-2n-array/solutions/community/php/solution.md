# Beat 100% in time and space using PHP

**Author:** fagner0
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5967555/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5967555/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function repeatedNTimes($nums) {
        return array_search(count($nums) / 2, array_count_values($nums));
    }
}
```