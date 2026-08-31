# Solution Element Appearing More Than 25% In Sorted Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4913213/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4913213/)

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

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function findSpecialInteger($arr) {
        $n = count($arr);
        $threshold = $n / 4;

        for ($i = 0; $i < $n; $i++) {
            if ($arr[$i] == $arr[$i + $threshold]) {
                return $arr[$i];
            }
        }
        return -1;
    }
}

```