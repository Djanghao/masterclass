# Go, using union-find

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/4971495/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/4971495/)

---

# Code
```
type uf struct {
    root []int
    rank []int
    count int
}

func newUF(n int) *uf {
    root := make([]int, n)
    rank := make([]int, n)
    for i := range root {
        root[i] = i
        rank[i] = 1
    }
    return &uf{root:root, count:n, rank: rank}
}

func (u *uf) find(x int) int {
    if u.root[x] == x {
        return x
    }
    u.root[x] = u.find(u.root[x])
    return u.root[x]
}


func(u *uf) union(x,y int) {
    pX := u.find(x)
    pY := u.find(y)
    if pX != pY {
        u.count--
        if u.rank[pX] > u.rank[pY] {
            u.root[pY] = pX
        } else if u.rank[pX] < u.rank[pY] {
            u.root[pX] = pY
        } else {
            u.root[pY] = pX
            u.rank[pX]++
        }
    }
}

func (u *uf) isConnected(x, y int) bool {
    return u.find(x) == u.find(y)
}



func minimumCost(n int, connections [][]int) int {
    sort.Slice(connections, func(i, j int) bool {
        return connections[i][2] < connections[j][2]
    })

    uf := newUF(n)
    totalCost := 0
    for _, connection := range connections {
        a,b,cost := connection[0]-1, connection[1]-1, connection[2]
        if !uf.isConnected(a, b) {
            uf.union(a, b)
            totalCost += cost
        }
    }
    if uf.count != 1 {
        return -1
    }
    return totalCost
}
```