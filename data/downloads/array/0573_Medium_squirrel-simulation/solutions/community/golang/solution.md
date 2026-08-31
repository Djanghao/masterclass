# [Go] Guys... I accidentally spent hours implementing Dijkstra

**Author:** hyrumcoop
**Votes:** 9
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/1045827/](https://leetcode.com/problems/squirrel-simulation/solutions/1045827/)

---

I've **definitely** reached my limit for coding today. The problem I had attempted before this one was a legit pathfinding problem, so that was the mindset I approached this problem with. This is even more embarassing since I consider myself a mathematician first and the solution could be found using simple coordinate geometry...

Anywas, here's how I approached it:

1. **Use Dijkstra to to find the distances from the squirrel to each nut**
2. **Use Dijkstra to find the distances from the tree to each nut**
3. **Return the minimum distance from the set of distances starting at each nut**

The code is obviously nowhere **near** optimized, but I'm posting it here mostly because of its absurdity. Enjoy my working Go code :)

```
func minDistance(height int, width int, tree []int, squirrel []int, nuts [][]int) int {
    squirrelToNut := findGridDistances(height, width, squirrel, nuts)
    treeToNut := findGridDistances(height, width, tree, nuts)
    
    min := int(^uint(0) >> 1)
    for i := range(nuts) {
        dist := squirrelToNut[i] + treeToNut[i]
        
        for j := range(nuts) {
            if (j != i) {
                dist += treeToNut[j] * 2
            }
        }
        
        if dist < min {
            min = dist
        }
    }
    
    return min
}

func findGridDistances(height int, width int, start []int, dests [][]int) []int {
    visited := make([][]bool, height)
    dists := make([]int, len(dests))
    pq := make(PriorityQueue, 0)
    
    for y := 0; y < height; y++ {
        visited[y] = make([]bool, width)
    }
    
    count := 0 // number of destinations found
    done := func() bool { return count == len(dests) }
    inBounds := func(v [2]int) bool { return (v[0] >= 0 && v[0] < height) && (v[1] >= 0 && v[1] < width)}
    
    heap.Push(&pq, &Item{start[0], start[1], 0})
    
    for !done() {
        cur := heap.Pop(&pq).(*Item)
        for ; visited[cur.Y][cur.X]; cur = heap.Pop(&pq).(*Item) {}
        
        for i, dest := range(dests) { // don't need to check destinations that have already been reached
            if cur.Y == dest[0] && cur.X == dest[1] {
                dists[i] = cur.Dist
                count++
            }
        }
        
        var adj [4][2]int
        adj[0] = [2]int{cur.Y - 1, cur.X}
        adj[1] = [2]int{cur.Y + 1, cur.X}
        adj[2] = [2]int{cur.Y , cur.X - 1}
        adj[3] = [2]int{cur.Y , cur.X + 1}
        
        d := cur.Dist + 1
        
        for _, v := range(adj) {
            if !inBounds(v) || visited[v[0]][v[1]] {
                continue
            }
            
            heap.Push(&pq, &Item{v[0], v[1], d})
        }
        
        visited[cur.Y][cur.X] = true
    }
    
    return dists
}

type Item struct {
    Y int
    X int
    Dist int
}

type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(a, b int) bool {
    return pq[a].Dist < pq[b].Dist
}

func (pq PriorityQueue) Swap(a, b int) {
    pq[a], pq[b] = pq[b], pq[a]
}

func (pq *PriorityQueue) Push(x interface{}) {
    *pq = append(*pq, x.(*Item))
}

func (pq *PriorityQueue) Pop() interface{} {
    last := len(*pq) - 1
    val := (*pq)[last]
    *pq = (*pq)[:last]
    
    return val
}
```