# [Python] BFS - 3 Steps

**Author:** rowe1227
**Votes:** 12
**Link:** [https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/974190/](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/solutions/974190/)

---

**Approach:**

Perform BFS (starting with M steps at node 0) to find the 
maximum number of steps remaining after reaching each node.
```v``` is a map of node to maximum steps remaining after reaching node.

For each pair of original nodes, the number of new nodes between them is ```n```.
Say node ```a``` and ```b``` are separated by 10 nodes.
If ```v[a] = 3``` and ```v[b] = 7``` then we can reach every node between ```a``` and ```b```.

For each pair of nodes if ```v[a] + v[b] >= n``` then we can reach every node between ```a``` and ```b```.
If ```v[a] + v[b] < n``` then we can reach ```v[a] + v[b]``` nodes between ```a``` and ```b```.
Check this for every pair of original nodes.
The total nodes visited is: ```original_nodes_visited + new_nodes_visited```


<br>

```python
def reachableNodes(self, edges: List[List[int]], M: int, N: int) -> int:

	def bfs():
		"""Find the maximum remaining steps after reaching each node."""
		q = [(M, 0, -1)] # (m) steps remaining, (n) node, (p) parent
		v = {0: M}       # visited: v[node] = steps remaining after reaching node
		while q:
			next_level = []
			for m, n, p in q:
				v[n] = max(v.get(n, -math.inf), m)
				for neigh in g[n]:
					c = cost[(n, neigh)]
					if (neigh != p) and (c <= m) and (v.get(neigh, -math.inf) < (m - c)):
						next_level.append((m-c, neigh, n))
			q = next_level
		return v

	# 1. Convert list of edges to a graph
	cost = collections.defaultdict(int)        
	g = collections.defaultdict(list)
	for a, b, n in edges:
		g[a].append(b)
		g[b].append(a)
		cost[(a,b)] = cost[(b,a)] = n + 1

	# 2. Make a map v where v[node] = number of steps remaining after reaching node
	v = bfs()

	# 3. From each pair of original nodes try to visit all of the new nodes that connect them.
	new_nodes = sum(min(v.get(a, 0) + v.get(b, 0), n) for a, b, n in edges)
	original_nodes = len(v)
	
	return original_nodes + new_nodes
```