# Go || Union Find & DFS Solutions || Beats 100%

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5997471/](https://leetcode.com/problems/reachable-nodes-with-restrictions/solutions/5997471/)

---

# Code
```golang [Union Find]
func reachableNodes(n int, edges [][]int, restricted []int) int {
	restrictedSet := make(map[int]struct{}, n)
	for _, i := range restricted {
		restrictedSet[i] = struct{}{}
	}

	isRestricted := func(i int) bool {
		_, exist := restrictedSet[i]
		return exist
	}

	uf := NewUnionFind(n)
	for _, edge := range edges {
		x, y := edge[0], edge[1]
		if isRestricted(x) || isRestricted(y) {
			continue
		}
		uf.Union(x, y)
	}

	return uf.Reachable(0)
}

type UnionFind struct {
	parent []int
	size   []int
}

func NewUnionFind(n int) UnionFind {
	uf := UnionFind{
		parent: make([]int, n),
		size:   make([]int, n),
	}
	for i := range n {
		uf.parent[i] = i
		uf.size[i] = 1
	}
	return uf
}

func (uf *UnionFind) Find(x int) int {
	if uf.parent[x] == x {
		return x
	}
	res := uf.Find(uf.parent[x])
	uf.parent[x] = res
	return res
}

func (uf *UnionFind) Reachable(x int) int {
	return uf.size[uf.Find(x)]
}

func (uf *UnionFind) Union(x, y int) bool {
	u := uf.Find(x)
	v := uf.Find(y)
	if u == v {
		return false
	}
	if uf.size[u] < uf.size[v] {
		u, v = v, u
	}
	uf.parent[v] = u
	uf.size[u] += uf.size[v]
	return true
}

```
```golang [DFS]
func reachableNodes(n int, edges [][]int, restricted []int) int {
	restrictedSet := make([]bool, n)
	for _, i := range restricted {
		restrictedSet[i] = true
	}

	neighbors := make([][]int, n)
	for _, edge := range edges {
		x := edge[0]
		y := edge[1]
		neighbors[x] = append(neighbors[x], y)
		neighbors[y] = append(neighbors[y], x)
	}

	visited := make([]bool, n)
	res := 0
	var dfs func(int)
	dfs = func(i int) {
		if restrictedSet[i] {
			return
		}
		if visited[i] {
			return
		}
		visited[i] = true
		res++
		for _, j := range neighbors[i] {
			dfs(j)
		}
	}
	dfs(0)

	return res
}
```