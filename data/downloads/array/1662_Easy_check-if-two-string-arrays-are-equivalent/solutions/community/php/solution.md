# Easy solution in php

**Author:** moozika
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4640843/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4640843/)

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
     * @param String[] $word1
     * @param String[] $word2
     * @return Boolean
     */
    function arrayStringsAreEqual($word1, $word2) {
        $implode1 = implode('', $word1);
        $implode2 = implode('', $word2);

        if ($implode1 === $implode2) {
            return true;
        } else {
            return false;
        }
    }
}
```