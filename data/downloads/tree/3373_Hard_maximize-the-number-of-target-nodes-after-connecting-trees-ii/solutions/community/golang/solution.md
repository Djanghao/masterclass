# Go | BFS | O(m) time

**Author:** ligt
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6099001/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6099001/)

---

# Code
```golang []
import (
    "github.com/emirpasic/gods/v2/queues/linkedlistqueue"
)

func maxTargetNodes(edges1 [][]int, edges2 [][]int) []int {
    n, m := len(edges1) + 1, len(edges2) + 1
    g1, g2 := createAdj(edges1), createAdj(edges2)

    oddCnt := 0
    evenCnt := 0

    q := linkedlistqueue.New[int]()
    q.Enqueue(0)
    isEven := true
    visited := make([]bool, m)
    for !q.Empty() {
        for range q.Size() {
            node, _ := q.Dequeue()
            if visited[node] {
                continue
            }
            if isEven {
                evenCnt++
            } else {
                oddCnt++
            }
            visited[node] = true
            for _, nextNode := range g2[node] {
                if visited[nextNode] {
                    continue
                }
                q.Enqueue(nextNode)
            }
        }
        isEven = !isEven
    }

    best := max(oddCnt, evenCnt)

    oddCnt, evenCnt = 0, 0

    q.Enqueue(0)
    isEven = true
    visited = make([]bool, n)
    evenSet := make([]int, n)
    for !q.Empty() {
        for range q.Size() {
            node, _ := q.Dequeue()
            if visited[node] {
                continue
            }
            if isEven {
                evenSet[node] = 1
                evenCnt++
            } else {
                oddCnt++
            }
            visited[node] = true
            for _, nextNode := range g1[node] {
                if visited[nextNode] {
                    continue
                }
                q.Enqueue(nextNode)
            }
        }
        isEven = !isEven
    }

    res := make([]int, n)
    for i := range n {
        res[i] = best + evenSet[i] * evenCnt + (1-evenSet[i]) * oddCnt
    }

    return res
}

func createAdj(edges [][]int) [][]int {
    m := len(edges) + 1
    g := make([][]int, m)
    for _, e := range edges {
        if g[e[0]] == nil {
            g[e[0]] = make([]int, 0)
        }
        if g[e[1]] == nil {
            g[e[1]] = make([]int, 0)
        }
        g[e[0]] = append(g[e[0]], e[1])
        g[e[1]] = append(g[e[1]], e[0])
    }
    return g
}
```