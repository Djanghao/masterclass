# #FLAG Smirnov

**Author:** smirnovflag
**Votes:** 0
**Link:** [https://leetcode.com/problems/mini-parser/solutions/4666161/](https://leetcode.com/problems/mini-parser/solutions/4666161/)

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
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {

 *     // if value is not specified, initializes an empty list.
 *     // Otherwise initializes a single integer equal to value.
 *     function __construct($value = null)

 *     // Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     function isInteger() : bool
 *
 *     // Return the single integer that this NestedInteger holds, if it holds a single integer
 *     // The result is undefined if this NestedInteger holds a nested list
 *     function getInteger()
 *
 *     // Set this NestedInteger to hold a single integer.
 *     function setInteger($i) : void
 *
 *     // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *     function add($ni) : void
 *
 *     // Return the nested list that this NestedInteger holds, if it holds a nested list
 *     // The result is undefined if this NestedInteger holds a single integer
 *     function getList() : array
 * }
 */
class Solution {

    /**
     * @param String $s
     * @return NestedInteger
     */
    function deserialize(string $s) {
        return new NestedInteger($s);
    }
}
```