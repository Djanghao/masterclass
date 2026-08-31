# [Python 3] Segment tree, explained

**Author:** huangshan01
**Votes:** 3
**Link:** [https://leetcode.com/problems/beautiful-pairs/solutions/3392026/](https://leetcode.com/problems/beautiful-pairs/solutions/3392026/)

---

Refer to [this editorial](https://leetcode.com/problems/range-sum-query-mutable/editorial/) for the type of tree I chose.

The target Manhattan distance consists of two parts `abs(A[i] - A[j])` and `abs(B[i] - B[j])`.

If we sort the indices by `(A[i], i)`, namely idx hereinafter, then part one is fixed: assuming `i >= j` hereinafter, it equals `A[i] - A[j]`.

Second part can be either `B[i] - B[j]` or `B[j] - B[i]`, depending or which quantity is greater.

Split into two scenarios, 
- For all `B[j] <= B[i]`, `distance = A[i] - A[j] + B[i] - B[j]`. Regroup by index, and we find the `smallest distance = (A[i] + B[i]) + mininum(-A[j] - B[j])`.
- For all `B[j] >= B[i]`, `distance = A[i] - A[j] + B[j] - B[i]`. Regroup by index, and we find the `smallest distance = (A[i] - B[i]) + minimum(-A[j] + B[j])`.
Note that `j` is conditional, only those indices with `A[i] >= A[j]` are valid `j`s.

We can create two segment trees that store indices of the original `A, B` arrays. The trees rank those indices differently, tree 1 prefers `smaller(-A[j] - B[j], j)`, and tree 2 prefers `smaller(-A[j] + B[j], j)`.

Both trees contain only `idx[0]` initially. Traverse `idx` from 1 to its end, query `tree 1` in the range `[0, B[idx[i]]] inclusively`, and query `tree 2` in the range `[B[idx[i]], Max(B)] inclusively`. The queries return two best candiate indices for the current index `idx[i]`, and we compute which one gives smaller distance to update answer according to the two scenarios above.

In code, tree[-1] is actually tree 1, and tree[1] is tree 2, just for coding convenience.

# Code
```python []
class Solution:
    def beautifulPair(self, A: List[int], B: List[int]) -> List[int]:
        def mini(i, j, sel):
            # sel = -1 => tree 1
            # sel = 1  => tree 2
            return min((-A[i] + sel * B[i], i), (-A[j] + sel * B[j], j))[1]

        def update(b2t, i, sel):
            b2t += m
            while b2t:
                j = tree[sel][b2t]
                res = mini(i, j, sel)
                if res != i:
                    return
                tree[sel][b2t] = res
                b2t //= 2

        def query(lo, hi, sel):
            lo += m
            hi += m
            res = -1
            while lo <= hi:
                if lo & 1:
                    res = mini(res, tree[sel][lo], sel)
                    lo += 1
                if not hi & 1:
                    res = mini(res, tree[sel][hi], sel)
                    hi -= 1
                lo //= 2
                hi //= 2
            return res
        
        n = len(A)
        ma = max(max(A), max(B))
        m = ma + 1
        
        idx = sorted(range(n), key = lambda x: (A[x], x))

        # since trees init with -1 
        # making B[-1] + A[-1] less than 0, and B[-1] - A[-1] very large, s.t. -1 is never chosen as an answer
        A += [-100_000_000 - 1]
        B += [100_000_000]
        tree = [None, [-1] * (2 * m), [-1] * (2 * m)]

        update(B[idx[0]], idx[0], 1)
        update(B[idx[0]], idx[0], -1)
        
        ans = None

        def best(x, y, z):
            return min(
                        (A[x] + B[x] - A[y] - B[y], (min(x, y), max(x, y))),
                        (A[x] - B[x] - A[z] + B[z], (min(x, z), max(x, z))),
                        (abs(A[ans[0]] - A[ans[1]]) + abs(B[ans[0]] - B[ans[1]]), (ans[0], ans[1])) if ans != None else (inf, (-1, -1))
                    )[1]

        for i in range(1, n):
            b, x = B[idx[i]], idx[i]
            y = query(0, b, -1) # query tree 1
            z = query(b, ma, 1) # query tree 2
            ans = best(x, y, z)
            update(b, x, -1) # update tree 1
            update(b, x, 1) # update tree 2
        return ans

```