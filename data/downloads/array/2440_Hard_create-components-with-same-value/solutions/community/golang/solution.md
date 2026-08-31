# Golang | BFS

**Author:** tw13
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-components-with-same-value/solutions/2829621/](https://leetcode.com/problems/create-components-with-same-value/solutions/2829621/)

---

- Golang implementation of https://leetcode.com/problems/create-components-with-same-value/discuss/2706736/Python-Explanation-with-pictures-BFS
```
func componentValue(nums []int, edges [][]int) int {
    maxNum, minNum, sumNums, n := 0, math.MaxInt32, 0, len(nums)
    for _, num := range nums {
        maxNum = max(maxNum, num)
        minNum = min(minNum, num)
        sumNums += num
    }
    G := make(map[int]map[int]struct{})
    degree := make([]int, n)
    for _, edge := range edges {
        a, b := edge[0], edge[1]
        degree[a]++
        degree[b]++
        if _, ok := G[a]; !ok {
            G[a] = make(map[int]struct{})
        }
        G[a][b] = struct{}{}
        if _, ok := G[b]; !ok {
            G[b] = make(map[int]struct{})
        }
        G[b][a] = struct{}{}
    }
    
    for i := minNum; i < sumNums; i++ {
        if sumNums % i == 0 && bfs(i, nums, degree, G) {
            return (sumNums / i) - 1
        }
    }
    return 0
}

func bfs(target int, nums []int, degree []int, G map[int]map[int]struct{}) bool {
    V := make([]int, len(nums))
    copy(V, nums)
    deg := make([]int, len(degree))
    copy(deg, degree)
    
    q := make([]int, 0)
    for i, d := range degree {
        if d == 1 {
            q = append(q, i)
        }
    }
    
    for len(q) > 0 {
        i := q[0]
        q = q[1:]
        deg[i] = 0
        
        for nxt, _ := range G[i] {
            if V[i] != target {
                V[nxt] += V[i]
            }
            deg[nxt]--
            if deg[nxt] == 0 {
                return V[nxt] == target
            } else if deg[nxt] == 1 {
                q = append(q, nxt)
            }
        }
    }
    return false
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}

func min(x, y int) int {
    if x < y {
        return x
    }
    return y
}
```