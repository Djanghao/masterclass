# c#, bottom up

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/2726983/](https://leetcode.com/problems/number-of-nodes-with-value-one/solutions/2726983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The hight of the tree is just `log(n)` so for each node we can compute its state providing that we know all queries for each node.

# Approach
<!-- Describe your approach to solving the problem. -->
1. We aggregate all queries
2. For each node we go up to the root and aggregate queries which effects the node

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(q * log())

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
public class Solution {
    private static bool IsFlipped(Dictionary<int, bool> flips, int index) {
        bool result = false;

        for (int i = index; i > 0; i /= 2)
            if (flips.TryGetValue(i, out bool value))
                result ^= value;

        return result; 
    }

    public int NumberOfNodes(int n, int[] queries) {
        Dictionary<int, bool> flips = new();

        foreach (int query in queries)
            flips[query] = flips.TryGetValue(query, out bool before) ? !before : true;

        return Enumerable
            .Range(1, n)
            .Count(index => IsFlipped(flips, index));     
    }
} 
```