# Finally I figured out why my Prim's didn't work! Why pipes[a][b] != pipes[b][a]???

**Author:** WangQiuc
**Votes:** 43
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/366081/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/366081/)

---

I spent whole morning trying to figure out why my Prim's didn't pass!

My solution failed at a test case with 60 nodes. I just can't image how to debug on that and I could't figure out what's the issue in my solution until I saw @dylan20's [post](https://leetcode.com/problems/optimize-water-distribution-in-a-village/discuss/365986/Python-Dijkstra). Thank you so much!
The issue turned out to be the way I built my graph.
```
	for u, v, w in pipes:
		graph[u][v] = graph[v][u] = w
```
The test case, however, have occasions as `pipes[a][b] != pipes[b][a]`! That makes `graph[u][v]` could cost more than it should be if I naive setting `graph[u][v] = w`. Instead, it should be like:
```
graph[u][v] = graph[v][u] = min(graph[v].get(u, float('inf')), w)
```
After I fixed that, the solution just passed:
```
def minCostToSupplyWaterPrim(n, wells, pipes):
	seen, graph = set(), defaultdict(dict)
	for u, v, w in pipes:
		graph[u][v] = graph[v][u] = min(graph[v].get(u, float('inf')), w)
	cost, undone, pq = 0, n, [(w, i) for i, w in enumerate(wells, 1)]
	heapq.heapify(pq)
	while pq:
		c, x = heapq.heappop(pq)
		if x not in seen:
			cost += c
			undone -= 1
			if not undone:
				break
			seen.add(x)
			for y, w in graph[x].items():
				if y not in seen:
					heapq.heappush(pq, (w, y))
	return cost
```
But why cost connection `house1` and `house2`, and `house2` and `house1` are different?! That doesn't make sense to me. But still so glad that I've found the issue. Could be a challenge in the interview or work.

**Meanwhile Kruskal's doesn't suffer from this issue as it iterates costs in the sorted way.**
```
def minCostToSupplyWaterKruskal(n, wells, pipes):
	p = list(range(n+1))

	def find(x):
		if x != p[x]:
			p[x] = find(p[x])
		return p[x]

	def union(x, y):
		px, py = find(x), find(y)
		if px != py:
			p[py] = px
			return True
		return False

	cost, undone = 0, n
	for u, v, w in sorted([[0,i,w] for i, w in enumerate(wells,1)] + pipes, key=lambda x:x[2]):
		if union(u, v):
			cost += w
			undone -= 1
		if not undone:
			break
	return cost
```
We can set `0` as water source that connected with each well which needs to be eventually unioned.
