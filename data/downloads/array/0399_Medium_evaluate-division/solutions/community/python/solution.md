# Python BFS & UF(detailed explanation)

**Author:** WangQiuc
**Votes:** 151
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/270993/](https://leetcode.com/problems/evaluate-division/solutions/270993/)

---

We can treat each equation as an edge, variables as nodes and value as weight, and build a weighted graph. Then for each queries `(x, y)`, we try to find a path from `x` to `y`. The answer is the product of all edges' weights. If either `x` or `y` is not in graph or `x` and `y` are not connected in graph, the answer doesn't exist.
We can use a `defaultdict(dict) G` to build a weighted graph and `G[x][y]` will be the weight of edge `x->y` which is the value of `x / y`

So one solution is BFS (or DFS) for each query.
```
def calcEquation(equations, values, queries):
	G = collections.defaultdict(dict)
	for (x, y), v in zip(equations, values):
		G[x][y] = v
		G[y][x] = 1/v
	def bfs(src, dst):
		if not (src in G and dst in G): return -1.0
		q, seen = [(src, 1.0)], set()
		for x, v in q:
			if x == dst: 
				return v
			seen.add(x)
			for y in G[x]:
				if y not in seen: 
					q.append((y, v*G[x][y]))
		return -1.0
	return [bfs(s, d) for s, d in queries]
```

Another solution is Union Find. 

Our root map is `root` and each `root[x]` is in form of `(root(x), ratio)` where `ratio = x/root(x)`. If `x == root(x)`, then `ratio = 1.0`. So just consider root as a denominator here. Then, we process the equations. For each `x/y = v`, we union `x` to `y` or set `root(root(x)) = root(y)` as `y` is the denominator. After union all `x, y` in the equations, for each `a, b` in the queries, if `a` and `b` are not in the same union set, then `a` and `b` are not transmissable to each other so `a/b` should return `-1.0`.

Now that we have a `ratio` element in each `root[x]`, we need to update it in `find()` and `union()` as well.
In `find(x)`, we have `root[x] = (p, x/p)` where `p` is the parent node of x and not neccessarily the root node. But we will do path compression and recursively update all the parent nodes in the path to root. And `ratio` should be updated as well. Eventually `find(p)` returns updated `root[p] = (root(p), p/root(p))`. 
So `root[x]` should be updated to `(root(x), x/root(x)) = (root(p), x/p * p/root(p))) = (root[p][0], root[x][1] * root[p][1])`

For `union(x, y)` in equations processing, we make `root(root(x)) = root(y)` as mentiond previously. And for `root[root(x)]`'s `ratio`, as `root(y)` is `root(x)`'s new root, we update it to `root(x)/root(y) = (x/y) * (y/root(y)) / (x/root(x)) = x/y * root[y][1] / root[x][1]`. `x/y` is the provided equation outcome value.

For `union(x, y)` in queries, we can just simply return `x/y = (x/root(x)) / (y/root(y)) = root[x][1]/root[y][1]`.

```
def calcEquation(equations, values):
	root = {}
	
	# xr = x/parent(x), pr = parent(x)/root(x), update xr to xr*pr = x/root(x)
	def find(x):
		p, xr = root.setdefault(x, (x, 1.0))
		if x != p:
			r, pr = find(p)
			root[x] = (r, xr*pr)
		return root[x]

	# if root(x) = root(y), equations "x / y" doable as (x/root(x)) / (y/root(y)) = xr / yr
	def union(x, y, ratio):
		px, xr, py, yr = *find(x), *find(y)
		if not ratio:
			return xr / yr if px == py else -1.0
		if px != py:
			root[px] = (py, yr/xr*ratio)

	for (x, y), v in zip(equations, values):
		union(x, y, v)
	return [union(x, y, 0) if x in root and y in root else -1.0 for x, y in queries]
```