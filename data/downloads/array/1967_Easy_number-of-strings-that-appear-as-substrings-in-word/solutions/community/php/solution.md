# PHP

**Author:** leettastic
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/4153554/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/4153554/)

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
     * @param String[] $patterns
     * @param String $word
     * @return Integer
     */
    function numOfStrings($patterns, $word) {
        $count = 0;
        foreach ($patterns as $p) {
            if (str_replace($p, '', $word) != $word)
                $count++;
        }

        return $count;
    }
}
```