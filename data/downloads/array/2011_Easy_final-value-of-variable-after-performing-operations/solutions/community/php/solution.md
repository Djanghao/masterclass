# easy code

**Author:** mirkomilmirabdullaevich
**Votes:** 5
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/4399132/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/4399132/)

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
     * @param String[] $operations
     * @return Integer
     */
    function finalValueAfterOperations($a) {
        $r = 0;
        foreach($a as $i)
            $r += (($i[1] === '+') ? 1 : -1);

        return $r;
    }
}
```