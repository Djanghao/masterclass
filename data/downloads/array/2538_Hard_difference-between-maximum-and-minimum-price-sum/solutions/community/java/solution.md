# max path sum | one pass | 🔥 42ms, beats 100% | [Java]

**Author:** byegates
**Votes:** 14
**Link:** [https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3074748/](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/solutions/3074748/)

---

# NOTE
this solution was originally posted by [jason7708](https://leetcode.com/jason7708/), and was top voted, not sure why it was later removed, this is the simplest and fasting solution I know, so I am posting it again.

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
[124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/description/)
This is actually a leaf to leaf path sum problem, the caveat is, you have to remove one leaf (from either end), so you have to return more values.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n), one pass after graph/tree created
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# [42ms](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/submissions/880271275/)
```java
class Solution {
    long res = 0;
    List<Integer>[] g;
    int[] price;

    record returnType(int withLeaf, int withoutLeaf) {}
    public long maxOutput(int n, int[][] edges, int[] price) {
        this.price = price;
        
        // create adjacency list graph(tree)
        g = new List[n];
        for (int i = 0; i < n; i++) g[i] = new ArrayList<>();
        for (var e : edges) {
            g[e[0]].add(e[1]);
            g[e[1]].add(e[0]);
        }

        dfs(0, -1); // you can start from any root doesn't matter, as long as it exists
        return res;
    }

    private returnType dfs(int cur, int pre) {
        int withLeaf = price[cur], withoutLeaf = 0;
        for (int child : g[cur]) if (child != pre) {
            var childMax = dfs(child, cur);
            res = Math.max(res, withLeaf + childMax.withoutLeaf);
            res = Math.max(res, withoutLeaf + childMax.withLeaf);
            withLeaf = Math.max(withLeaf, childMax.withLeaf + price[cur]);
            withoutLeaf = Math.max(withoutLeaf, childMax.withoutLeaf + price[cur]);
        }

        return new returnType(withLeaf, withoutLeaf); // single leg
    }
}
```