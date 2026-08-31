# Scala 1 liner fold solution

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/5223499/](https://leetcode.com/problems/nested-list-weight-sum/solutions/5223499/)

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
object Solution {
    def depthSum(list: List[NestedInteger], depth: Int = 1): Int = 
        list.foldLeft(0)((sum, l) => sum + (if l.isInteger then l.getInteger*depth else depthSum(l.getList.toList, depth+1)))
}
```