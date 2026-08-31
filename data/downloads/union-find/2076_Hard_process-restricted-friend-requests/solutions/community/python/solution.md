# ✅ [Python] UnionFind || Easy to Understand with Explanation

**Author:** linfq
**Votes:** 4
**Link:** [https://leetcode.com/problems/process-restricted-friend-requests/solutions/1582784/](https://leetcode.com/problems/process-restricted-friend-requests/solutions/1582784/)

---

```
class UnionFindSet(object):
    def __init__(self, n):
        self.data = range(n)

    def find(self, x):
        while x <> self.data[x]:
            x = self.data[x]
        return x

    def union(self, x, y):
        self.data[self.find(x)] = self.find(y)

    def speedup(self):
        for i in range(len(self.data)):
            self.data[i] = self.find(i)


class Solution(object):
    def friendRequests(self, n, restrictions, requests):
        uf = UnionFindSet(n)
        ret = [True] * len(requests)
        for k, [x, y] in enumerate(requests):  # Process Requests Sequentially
            xh = uf.find(x)  # backup the head of x for undo
            uf.union(x, y)  # link [x, y] and verify if any restriction triggers
            for [i, j] in restrictions:
                if uf.find(i) == uf.find(j):
                    ret[k] = False
                    break
            if not ret[k]:  # if any restriction triggers, undo
                uf.data[xh] = xh
            else:
                uf.speedup()
        return ret
```
**If you have any questoins, feel free to ask. If you like the solution and explanation, please upvote!**