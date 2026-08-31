# Python DFS in a Tree

**Author:** WangQiuc
**Votes:** 5
**Link:** [https://leetcode.com/problems/frog-position-after-t-seconds/solutions/532486/](https://leetcode.com/problems/frog-position-after-t-seconds/solutions/532486/)

---

We can use DFS to search the entire Tree and aggregately update the probability. We pass down time we left and aggregated probability. So dfs is like `dfs(x, t, p)`


4 cases when we visit a node `x`:
1. Time is up and we didn't reach our target, return `0`
2. Current node is our target, time is just up or can't jump to any unvisitied node, return aggregate probability `p`
3. Current node is our target, time is not up and there are unvisitied nodes to jump to, return `0`
4. Current node is not our target and time is not up, let `q` to be the list of unvisitied nodes we can jump to, then return `sum(dfs(y, t - 1, p * 1 / len(q)) for y in q)`

`T` is a tree so no cycle, only revisit case is revisiting node's parent (due to undirected edge). So we pass down parent as well. Let `y` is current visit node, `x` is `y`'s parent, `z` is `y`'s child, `z` can't be `x`. So our `q` will be `[z for z in T[y] if z != x]`

```
def frogPosition(n, edges, time, target):
    T = collections.defaultdict(set)
    for u, v in edges:
        T[u].add(v)
        T[v].add(u)

    def dfs(x, y, t, p):
        if t < 0:
            return 0
        zs = [z for z in T[y] if z != x]
        if y == target:
            return 0 if (t and zs) else p
        q = 1 / len(zs)
        return sum(dfs(y, z, t-1, p*q) for z in zs)

    return dfs(-1, 1, time, 1)
```