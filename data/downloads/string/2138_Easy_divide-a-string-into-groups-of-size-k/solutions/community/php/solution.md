# Simple solution using string functions

**Author:** oshmyheliuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/4727771/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/4727771/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
After splitting a string into equal parts needs to fill the last element to the desired size.

# Approach
<!-- Describe your approach to solving the problem. -->
Using the native PHP function `str_split` the input string is split into the the array of chunks with size `$k`.
After that, the last element in `$chunks` array is filled with `$fill` character to the size `$k` using `str_pad` function.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php
class Solution {

    /**
     * @param String $s
     * @param Integer $k
     * @param String $fill
     * @return String[]
     */
    function divideString($s, $k, $fill) {
        $chunks = str_split($s, $k);
        $total = count($chunks);
        $chunks[$total - 1] = str_pad($chunks[$total - 1], $k, $fill);
        return $chunks;
    }
}
```