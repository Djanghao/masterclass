# The easiest solution, a few lines

**Author:** Khoma_
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/5185813/](https://leetcode.com/problems/split-strings-by-separator/solutions/5185813/)

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
     * @param String[] $words
     * @param String $separator
     * @return String[]
     */
    function splitWordsBySeparator($words, $separator) {
        $arr = [];
        foreach ($words as $word) {
            $arr = array_merge($arr, explode($separator, $word));
        } return array_filter($arr);
    }
}
```