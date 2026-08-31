# Using DFS

**Author:** HimanshuChowdhary
**Votes:** 0
**Link:** [https://leetcode.com/problems/course-schedule-iv/solutions/5577245/](https://leetcode.com/problems/course-schedule-iv/solutions/5577245/)

---

# Intuition
solve using DFS

# Approach
1. create adjecency matrix
2. find path between query[0]query[1], if yes, append true to sol

# Complexity
- Time complexity:
O(n*n + q + p) ~ O(n*n)

- Space complexity:
O(n*n + sol)

# Code
```
class Solution {
    func checkIfPrerequisite(_ numCourses: Int, _ prerequisites: [[Int]], _ queries: [[Int]]) -> [Bool] {
        var arr = Array(repeating: Array(repeating: false, count: numCourses), count: numCourses) 
        var sol = Array(repeating: false, count: queries.count)
        for pre in prerequisites {
            arr[pre[0]][pre[1]] = true
        }
        for (i,q) in queries.enumerated() {
            sol[i] = arr[q[0]][q[1]]
            if sol[i] == false {
                // find path between q[0] -> q[1]
                sol[i] = isPathAvailable(a: q[0], b: q[1], matrix: arr) 
            }
        }
        return sol
    }

    func isPathAvailable(a: Int, b: Int, matrix: [[Bool]]) -> Bool {
        var visited = Array(repeating: false, count: matrix.count)
        // using DFS
        var stack = [Int]()
        for (i,v) in matrix[a].enumerated() {
            if v {
                stack.append(i)
                visited[i] = true
            }
        }
        while !stack.isEmpty {
            var c = stack.removeLast()
            for (i,v) in matrix[c].enumerated() {
                if !visited[i] && v {
                    stack.append(i)
                    visited[i] = true
                    if i == b {return true}
                }
            }
        }
        return false
    }
}
```