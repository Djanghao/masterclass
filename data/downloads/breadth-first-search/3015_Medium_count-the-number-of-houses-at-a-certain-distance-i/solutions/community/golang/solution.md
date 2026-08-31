# Go | BFS | Simple

**Author:** b3k3r
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4652482/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4652482/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Brute force BFS. Not really Dijkstra because no PQ is used and all paths are same. Just BFS while keep track of min distance. Dijkstra-ish maybe.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2) - we do BFS 'n' times. BFS is O(n+e). For all problems we will have eithr n-1 (x == y) or n edges, hence BFS is O(n)


# Code
```
func countOfPairs(n int, x int, y int) []int {
    adjList := make([][]int, n+1)
    for i := 1; i < n; i++ {
        adjList[i] = append(adjList[i], i+1)
        adjList[i+1] = append(adjList[i+1], i)
    }
    adjList[x] = append(adjList[x], y)
    adjList[y] = append(adjList[y], x)

    ans := make([]int, n)
    
    for i := 1; i <= n; i++ {
        dist := make([]int, n+1)
        for i := range dist { dist[i] = math.MaxInt }
        queue := []int{i}
        dist[i] = 0
        for len(queue) > 0 {
            u := queue[0]  
            du := dist[u]          
            queue = queue[1:]

            for _, v := range adjList[u] {
                if dist[v] > du + 1 {
                    dist[v] = du+1                    
                    ans[dist[v]-1]++
                    queue = append(queue, v)
                }                
            }
        }
    }
    return ans
}


```