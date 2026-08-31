# 35 ms Beats 100.00% | easy code

**Author:** samsaumya
**Votes:** 0
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/5686239/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/5686239/)

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
```csharp []
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * interface NestedInteger {
 *
 *     // Constructor initializes an empty nested list.
 *     public NestedInteger();
 *
 *     // Constructor initializes a single integer.
 *     public NestedInteger(int value);
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     bool IsInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     int GetInteger();
 *
 *     // Set this NestedInteger to hold a single integer.
 *     public void SetInteger(int value);
 *
 *     // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *     public void Add(NestedInteger ni);
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return null if this NestedInteger holds a single integer
 *     IList<NestedInteger> GetList();
 * }
 */
public class Solution {
    
         public int DepthSumInverse(IList<NestedInteger> nestedList) =>
        GetWeightSum(nestedList, GetMaxDepth(nestedList), 0);
    
    private int GetMaxDepth(IList<NestedInteger> nestedList) =>
        nestedList.Count == 0 ? 0 : nestedList.Max(x => x.IsInteger() ? 1 : GetMaxDepth(x.GetList()) + 1);

    private int GetWeightSum(IList<NestedInteger> nestedList, int maxDepth, int depth) =>
        nestedList.Sum(x => x.IsInteger() ? x.GetInteger() * (maxDepth - depth) : GetWeightSum(x.GetList(), maxDepth, depth + 1));
        
    }

```