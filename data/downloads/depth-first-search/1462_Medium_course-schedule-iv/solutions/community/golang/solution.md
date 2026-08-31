# Golang | Khan | Time O(v*e) | Space O(v^2)

**Author:** Reensef
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/5882903/](https://leetcode.com/problems/course-schedule-iv/solutions/5882903/)

---

# Complexity
- Time complexity: $$O(v*e)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(v^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func checkIfPrerequisite(numCourses int, prerequisites [][]int, queries [][]int) []bool {
    transitiveClosure := make([][]bool, numCourses)
    for i, _ := range transitiveClosure {
        transitiveClosure[i] = make([]bool, numCourses)
    }
    inDegrees := make([]int, numCourses)
    graph := make(map[int][]int)
    for _, v := range prerequisites {
        graph[v[0]] = append(graph[v[0]], v[1])
        inDegrees[v[1]]++
    }

    queue := make([]int, 0)
    for i := 0; i < numCourses; i++ {
        if inDegrees[i] == 0 {
            queue = append(queue, i)
        }
    }

    for len(queue) > 0 {
        curr := queue[0]
        queue = queue[1:]

        for _, adj := range graph[curr] {
            transitiveClosure[curr][adj] = true

            for i := 0; i < numCourses; i++ {
                transitiveClosure[i][adj] = transitiveClosure[i][adj] || transitiveClosure[i][curr]
            }

            inDegrees[adj]--
            if inDegrees[adj] == 0 {
                queue = append(queue, adj)
            }
        }
    }

    result := make([]bool, len(queries))

    for i, v := range queries {
        result[i] = transitiveClosure[v[0]][v[1]]
    }

    return result
}
```