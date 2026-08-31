# [Python3] No DFS, just Union Find

**Author:** yuanzhi247012
**Votes:** 13
**Link:** [https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/2162314/](https://leetcode.com/problems/check-for-contradictions-in-equations/solutions/2162314/)

---

**Naive approach:**
Knowing a/b, a/c a/d, pre-computing:
a/a, a/b, a/c, a/d
b/a, b/b, b/c, b/d
c/a, c/b, c/c, c/d
d/a, d/b, d/c, d/d
If a new equation e.g. "b/d=2.0" comes, just compare it with old "b/d" in the above table and see if they are same.

**Union Find Approach:**
Knowing a/b, a/c, a/d, union them into one group, and computing:
a/root
b/root
c/root
d/root
This can later be used to convert to any pair.
e.g. if we want to know "b/d", it can be obtained by:
	b/d = (b/root) * (root/d)
This approach takes much less time because we only calculate O(n) equations instead of O(n^2).

Having y/x=3, We can union x and y, and set weights[x][y]=3, meaning that x\\*3==y.
If we see x and y are already unioned, and we try to union them again with another weight, then we can check contradiction by comparing whether the new weight and the old weight are same.

**tryUnion(x,y, w):** try to union x and y, with a weight of "w". Returns "has contradiction" or "no contradiction"
**find(x):** return the "deepest" parent of x, and guarantee that the weight from x to its deepest parent is calculated and stored in table weights[x][find(x)]. 

We simply go through equations one-pass and execute "**tryUnion**" on them, if any returns "has contradiction", the final answer is "has contradiction".

**Python3**
```
    def checkContradictions(self, equations: List[List[str]], values: List[float]) -> bool:
        weights = defaultdict(lambda: defaultdict(lambda: 1))
        uf = {}
        def find(x):
            uf.setdefault(x,x)
            if uf[x]!=x:
                y = find(uf[x])
                weights[x][y] = weights[x][uf[x]]*weights[uf[x]][y]
                uf[x]=y
            return uf[x]
        def tryUnion(x,y,w):
            xp,yp = find(x),find(y)
            if xp==yp:
                expected = weights[x][xp]*(1/weights[y][yp])
                return abs(w-expected)>10**-6
            uf[xp] = yp
            weights[xp][yp] = w*weights[y][yp]*(1/weights[x][xp])
            return False
        return any(tryUnion(b,a,v) for (a,b),v in zip(equations,values))
```