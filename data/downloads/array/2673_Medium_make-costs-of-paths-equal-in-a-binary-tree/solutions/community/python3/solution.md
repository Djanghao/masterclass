# [C++, Java, Python3] Short DFS

**Author:** tojuna
**Votes:** 71
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3494844/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3494844/)

---



# Intuition
We can move level by level from the the leaves and make sure that the adjacent nodes have equal cost. First make the cost of adjacent leaves equal. Then move one level up. Make sure that the cost of the two children are equal and so on. If they are not equal just increment the node with the lower cost to make it equal to the other node.

# Approach
Use `(2 * i + 1)` instead of `2 * i` for child node because `2 * i` will go into infinite loop when you run `dfs(0)`

# Complexity
- Time complexity: O(n)

- Space complexity: O(h)

# Code
**Python3**:
```
def minIncrements(self, n, cost):
    self.res = 0
    def dfs(i):
        if i >= len(cost): return 0
        a, b = dfs(2 * i + 1), dfs(2 * i + 2)
        self.res += abs(a - b)
        return cost[i] + max(a, b)
    dfs(0)
    return self.res
```

**C++**:
```
int minIncrements(int n, vector<int>& cost) {
    int res = 0;
    function<int(int)> dfs = [&](int i) {
        if (i >= cost.size()) return 0;
        int a = dfs(2 * i + 1), b = dfs(2 * i + 2);
        res += abs(a - b);
        return cost[i] + max(a, b);
    };
    dfs(0);
    return res;
}
```

**Java**:
```
int res = 0;
public int minIncrements(int n, int[] cost) {
    dfs(0, cost);
    return res;
}
private int dfs(int i, int[] cost) {
    if (i >= cost.length) return 0;
    int a = dfs(2 * i + 1, cost), b = dfs(2 * i + 2, cost);
    res += Math.abs(a - b);
    return cost[i] + Math.max(a, b);
}
```