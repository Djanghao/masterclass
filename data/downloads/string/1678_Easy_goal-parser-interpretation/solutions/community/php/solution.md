# 100% 0ms

**Author:** kovolev
**Votes:** 1
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/3541599/](https://leetcode.com/problems/goal-parser-interpretation/solutions/3541599/)

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
     * @param String $command
     * @return String
     */
    function interpret($command) {
        return str_replace(["()", "(", ")"], ["o", "", ""], $command);
    }
}
```