# Golang Solution

**Author:** BobTheBuilder24
**Votes:** 0
**Link:** [https://leetcode.com/problems/collect-coins-in-a-tree/solutions/5581265/](https://leetcode.com/problems/collect-coins-in-a-tree/solutions/5581265/)

---

# Intuition
Prune the tree twice. Once to remove non coin terminated path. Another to reduce to the nodes that need to be visited.

# Code
```
func collectTheCoins(coins []int, es [][]int) int {
	rem := len(coins)
	g, id := make(map[int]map[int]bool), make([]int, rem)
	// Make graph and compute in degrees
	for _, e := range es {
		n1, n2 := e[0], e[1]
		if g[n1] == nil {
			g[n1] = make(map[int]bool)
		}
		if g[n2] == nil {
			g[n2] = make(map[int]bool)
		}
        id[n1]++
        id[n2]++
		g[n1][n2], g[n2][n1] = true, true
	}

    hc := false
	for i, v := range coins {
		// Find a coin
		if v == 1 {
            hc = true
			// Prune all the non coin edges
			sn := make(map[int]bool)
			prune(&rem, i, coins, &sn, &g, &id)
			break
		}
	}

    if !hc {return 0}

    q := make([]int, 0)
    for i, v := range id {
        if v == 1 { q = append(q, i)}
    }

    for k := 2; k > 0; k-- {
        nq := make([]int, 0)
        for len(q) > 0 {
            c := q[0]
            q = q[1:]
            rem--

            for p, _ :=  range g[c] {
                id[p]--
                id[c]--
                if id[p] == 1 {
                    nq = append(nq, p)
                }
            }
        }
        q = nq
    }
	// Prune all edges and parents
    if rem - 1 < 0 { return 0 }
	return (rem - 1) * 2
}

func prune(rem *int, si int, cs []int, sn *map[int]bool, g *map[int]map[int]bool, id *[]int) bool {
	var nces []int

	hc := cs[si] == 1
	(*sn)[si] = true
	for e, _ := range (*g)[si] {
		if !(*sn)[e] {
			pr := prune(rem, e, cs, sn, g, id)
			hc = hc || !pr
			if pr {
				nces = append(nces, e)
			}
		}
		(*sn)[e] = true
	}

	for _, v := range nces {
		delete((*g)[si], v)
		delete((*g)[v], si)
        (*id)[v]--
        (*id)[si]--
        if (len((*g)[v])) == 0 {delete((*g), v)}
		(*rem)--
	}

	return !hc
}
```