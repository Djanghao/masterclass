# Go - memoize using bool array instead of bitmask

**Author:** Kartikeya_Pophali
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/2997597/](https://leetcode.com/problems/campus-bikes-ii/solutions/2997597/)

---

Memoize bikes allocated using 10 element array of bool --> 10 bikes maximum

```

func assignBikes(workers [][]int, bikes [][]int) int {
    dist := createDistanceMatrix(workers, bikes)
    m, n := len(bikes), len(workers)
    var visited [10]bool
    memo := make(map[[10]bool]int)
    
    var assign func(w int) int
    assign = func(w int) int {
        if w == n { 
            return 0
        }
        if sum, ok := memo[visited]; ok {
            return sum
        }
        
        sum := math.MaxInt
        for b := 0; b < m; b++ {
            if !visited[b] {
                visited[b] = true
                sum = min(dist[w][b] + assign(w+1), sum)
                visited[b] = false
            }
        }
        
        memo[visited] = sum
        return sum
    }
    
    return assign(0)
}

func createDistanceMatrix(workers, bikes [][]int) [][]int {
    abs := func(i int) int {
        if i < 0 { return -i }
        return i
    }
    
    distance := func(w, b int) int {
        wx, wy := workers[w][0], workers[w][1]
        bx, by := bikes[b][0], bikes[b][1]
        return abs(wx - bx) + abs(wy - by)
    }
    
    dist := make([][]int, len(workers))
    for w := 0; w < len(workers); w++ {
        dist[w] = make([]int, len(bikes))
        for b := 0; b < len(bikes); b++ {
            dist[w][b] = distance(w, b)
        }
    }
    
    return dist
}

func min(i, j int) int {
    if i < j { return i }
    return j
}

```