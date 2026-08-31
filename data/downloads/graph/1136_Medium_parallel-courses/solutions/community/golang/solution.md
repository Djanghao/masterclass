# Golang | Topological Sort

**Author:** anikin_aa
**Votes:** 1
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/4062316/](https://leetcode.com/problems/parallel-courses/solutions/4062316/)

---

# Intuition

Sounds like graph problem with prerequisites steps? Topological sort will help us!

# Approach

1. Build `adjList` first, as relation between `prev` and `next` courses. Also, collect `indegree` slice from each `next` node.
2. Start level order BFS, with nodes that have zero `indegree`.
3. For each popped, get neighbours from `adjList`, decrement `indegree` for each neighbour, and add to queue if indgeree == 0. Also, kepp summing `total` courses visited.
4. Return -1 if `total` != `n`, else return `res`.

# Complexity
- Time complexity: $$O(n + len(relations))$$

- Space complexity: $$O(n + len(relations))$$


# Code
```
func minimumSemesters(n int, relations [][]int) int {

    indegree := make([]int, n + 1)

    adjList := map[int][]int{}

    for _, rel := range relations {
        prev, next := rel[0], rel[1]

        adjList[prev] = append(adjList[prev], next)

        indegree[next] += 1
    }


    q := []int{}

    for idx, degree := range indegree {
        if idx == 0 {continue}

        if degree == 0 {
            q = append(q, idx)
        }
    }


    if len(q) == 0 {return -1}

    res, total := 0, 0

    for len(q) != 0 {

        n := len(q)

        total += n

        for i := 0; i < n; i++ {

            cur := q[0]
            q = q[1:]

            for _, nei := range adjList[cur] {
                indegree[nei] -= 1
                if indegree[nei] == 0 {
                    q = append(q, nei)
                }
            }

        }

        res += 1
    }

    if total != n {return -1}

    return res
}
```