# Easy solution

**Author:** dromaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5816319/](https://leetcode.com/problems/lexicographical-numbers/solutions/5816319/)

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
     * @return Integer[]
     */
    function lexicalOrder($n) {
        $arr = range(1, $n);
        sort($arr, SORT_LOCALE_STRING);
        return $arr;
    }
}
```