# Python Iteration by Node's Degree

**Author:** WangQiuc
**Votes:** 17
**Link:** [https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/1010208/](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/1010208/)

---

Inspired by [jdshen](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/discuss/1008950/Simple-C%2B%2B-solution), we can iterate each node and check their validity by their degree. As node with larger degree more tends to be an ancestor.

For each node `x`, we find out its parent `p`. `p` is the node that has been visited (in the set `ancestor`) and has the lowest degree in `g[x]` (connected with `x` in `pairs`). Then `g[x]` must be a subset of `g[p] | {p}` since `x`'s ancestors are `p` + `p`'s ancestors and `x` +`x`'s descendants are all `p`'s descendants.
If `x` has no parent, it's the root whose degree should be `n-1`.

We only need to check `p` for `x` as if all `p-x` relations are solid, the entire tree is well founded.

Another reason we check `p` is that `p` could be exchanged with `x`. If it is (`len(g[p]) == len(g[x])` and remember, we have checked `g[x].issubset(g[p]|{p})`), we have more than one way to contruct the tree.

```
def checkWays(pairs):
    g = collections.defaultdict(set)
    for x, y in pairs:
        g[x].add(y)
        g[y].add(x)
    n, mul = len(g), False
    ancestor = set()
    for x in sorted(g.keys(), key=lambda i: -len(g[i])):
        p = min((g[x] & ancestor), key=lambda i: len(g[i]), default=0)  # find x's parent p
        ancestor.add(x)
        if p:
            if not g[x].issubset(g[p]|{p}):
                return 0
            mul |= len(g[p]) == len(g[x])
        elif len(g[x]) != n-1:
            return 0
    return 1 + mul
```
Note: `g[x].issubset(g[p]|{p})` is low efficient. Given value scale (`[1,500]`) is small it can still pass the test cases.