# Go, Dijkstra + min heap

**Author:** sitleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/5544565/](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts/solutions/5544565/)

---

# Code
```
type trip struct {
    city, cost, dist int
}

type loHeap []trip
func (h loHeap) Len() int { return len(h) }
func (h loHeap) Less(i, j int) bool { return h[i].cost < h[j].cost }
func (h loHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *loHeap) Push(x interface{}) { *h = append(*h, x.(trip)) }
func (h *loHeap) Pop() (x interface{}) {
    x, *h = (*h)[len(*h)-1], (*h)[:len(*h)-1]
    return x
}

func minimumCost(n int, highways [][]int, dist int) (ans int) {
    adj := make([][][2]int, n)
    for _, w := range highways {
        u, v, c := w[0], w[1], w[2]        
        adj[u] = append(adj[u], [2]int{v, c})
        adj[v] = append(adj[v], [2]int{u, c})
    }
    price := make([][]int, n)
    for i := range price {
        price[i] = make([]int, dist+1)
        for j := range price[i] {
            price[i][j] = 1<<31-1
        }
    }
    price[0][0] = 0

    h := &loHeap{trip{city: 0, cost: 0, dist: 0}}
    for h.Len() > 0 {
        p := heap.Pop(h).(trip)
        if p.cost > price[p.city][p.dist] {
            continue
        }
        for _, v := range adj[p.city] {
            nxt, c := v[0], v[1]
            if nc := p.cost + c; nc < price[nxt][p.dist] {
                price[nxt][p.dist] = nc
                heap.Push(h, trip{nxt, nc, p.dist})
            }
            if p.dist < dist {
                if nc := p.cost + c / 2;
                    nc < price[nxt][p.dist+1] {
                    price[nxt][p.dist+1] = nc
                    heap.Push(h, trip{nxt, nc, p.dist+1})
                }
            }
        }
    }
    ans = price[n-1][0]
    for _, v := range price[n-1][1:] {
        ans = min(ans, v)
    }
    if ans >= 1<<31-1 {
        return -1
    }
    return ans
}
```