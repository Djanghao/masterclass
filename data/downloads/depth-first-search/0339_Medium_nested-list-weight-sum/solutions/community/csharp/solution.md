# [C#] DFS | One Liner

**Author:** PJz41
**Votes:** 2
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/4383891/](https://leetcode.com/problems/nested-list-weight-sum/solutions/4383891/)

---

# Approach
DFS traverse with increasing depth

# Code
```
public class Solution {
    public int DepthSum(IList<NestedInteger> nestedList, int depth = 1) 
        => nestedList.Sum(nl => nl.IsInteger() ? depth * nl.GetInteger() : DepthSum(nl.GetList(), depth + 1));
}
```

# Time Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(d)$$
max depth implict stack space