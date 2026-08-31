# Go, Union-Find

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/4981705/](https://leetcode.com/problems/optimize-water-distribution-in-a-village/solutions/4981705/)

---

# Code
```
type uf struct {
	root []int
	rank []int
}

func newUF(n int) *uf {
	root := make([]int, n)
	rank := make([]int, n)
	for i := range root {
		root[i] = i
		rank[i] = 1
	}
	return &uf{root: root, rank: rank}
}

func (u *uf) isConnected(x, y int) bool {
    return u.find(x) == u.find(y)
}

func (u *uf) find(x int) int {
	if u.root[x] == x {
		return x
	}
	u.root[x] = u.find(u.root[x])
	return u.root[x]
}

func (u *uf) union(x, y int) bool {
	pX := u.find(x)
	pY := u.find(y)
	if pX != pY {
		if u.rank[pX] > u.rank[pY] {
			u.root[pY] = pX
		} else if u.rank[pX] < u.rank[pY] {
			u.root[pX] = pY
		} else {
			u.root[pY] = pX
			u.rank[pX]++
		}
        return true
	}
    return false
}

func minCostToSupplyWater(n int, wells []int, pipes [][]int) int {
    uf := newUF(n+1)
    costs := make([][3]int, 0, n+len(pipes))
    for i, cost := range wells {
        costs = append(costs, [3]int{0, i+1, cost})
    }
    for _, pipe := range pipes {
        costs = append(costs, [3]int{pipe[0], pipe[1], pipe[2]})
    }

    sort.Slice(costs, func(i, j int) bool {
        return costs[i][2] < costs[j][2]
    })

    total := 0
    for _, cost := range costs {
        if uf.union(cost[0], cost[1]) {
            total += cost[2]
        }
    }
    return total
}
```