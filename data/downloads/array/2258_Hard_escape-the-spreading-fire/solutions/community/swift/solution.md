# 100% Fast Solution with BFS

**Author:** prasannabhat018
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-spreading-fire/solutions/5774087/](https://leetcode.com/problems/escape-the-spreading-fire/solutions/5774087/)

---

# Intuition
Intuition is to get what is max safe time at which one can reach any particular index i and j. We can define safe time as the time at which there is no fire and we want maximum such time for each cell.
From minimum safe time we can calculate the maximum time to start just for that cell by knowing the distance from the source.
In a path if we have mulitple times ( minimum time to start from origin ) for Eg: 2 -> 3 -> 1 -> 4, so in this path if one has to completely traverse without getting fire. They would have to start at min(2, 3, 1, 4).
we want to get path which has maximum of such minimum indices

# Approach
- Get the time at which fire first reaches at (i, j).
    - This is essentially the distance from (i, j) to the closed fire present from (i, j).
    - We should get the closed distance from each cell to closest fire which would be O(n*m * n*m) which is expensive operation
    - Instead we can do multisource BFS to get closest distance of all the cells from fire spots all at once
- Perform a new BFS from the source (0, 0) and this time we don't maintain a vis ( this can cause the nearest one to be fixed first, but we also want to pick the same vertex if it comes from a better path, Ex: 1 -> 1 -> 4 vs 2 -> 3 -> 2 -> 4, we would want to reach 4 but via second scenario as well since that would be better answer) we maintain minTimeToReach (i, j) via some path and we use the (i, j) if we find a better path ( minTimeToReach is higher)
- handle edge case of all 10^9 if we can wait till infinite time, even if fire reaches the final cell after reaching consider it as answer and for non reachability return -1

# Complexity

- Time complexity: BFS time complexity O(V+E) ~ O(4mn)

- Space complexity: O(mn)

# Code
```swift []
class Solution {
    let neighbours = [(-1, 0), (1, 0), (0, 1), (0, -1)]
    var m: Int = 0
    var n: Int = 0
    var dp: [[Int]] = []

    func maximumMinutes(_ grid: [[Int]]) -> Int {
        self.m = grid.count
        self.n = grid[0].count
        self.dp = Array(repeating: Array(repeating: -2, count: n+2), count: m+2)
        // first do a multi source bfs
        var fireMatrix = Array(repeating: Array(repeating: Int.max, count: n), count: m)
        var queue: [[Int]] = []
        var vis = Array(repeating: Array(repeating: false, count: n), count: m)
        for i in 0..<m {
            for j in 0..<n {
                if grid[i][j] == 1 {
                    queue.append([i, j])
                    fireMatrix[i][j] = 0
                    vis[i][j] = true
                }
            }
        }
        while !queue.isEmpty {
            let times = queue.count
            for _ in 0..<times {
                let top = queue.removeFirst()
                for neighbour in neighbours {
                    let newX = top[0] + neighbour.0
                    let newY = top[1] + neighbour.1
                    if inBound(newX, newY, m, n) && 
                        !vis[newX][newY] && 
                        grid[newX][newY] == 0 {
                        if fireMatrix[top[0]][top[1]] == Int.max {
                            fireMatrix[newX][newY] = Int.max
                        } else {
                            fireMatrix[newX][newY] = fireMatrix[top[0]][top[1]] + 1
                        }
                        vis[newX][newY] = true
                        queue.append([newX, newY])
                    }
                }
            }
        }
        // then do traverse in that grid from top to bottom in bfs
        // and get the min from each path
        var maxTimeToReach = Array(repeating: Array(repeating: -1, count: n), count: m)
        maxTimeToReach[0][0] = fireMatrix[0][0] != Int.max ? fireMatrix[0][0] - 1 : Int.max
        queue = [[0, 0, maxTimeToReach[0][0]]]
        var level = 1
        
        while !queue.isEmpty {
            let times = queue.count
            for _ in 0..<times {
                let top = queue.removeFirst()
                for neighbour in neighbours {
                    let newX = top[0] + neighbour.0
                    let newY = top[1] + neighbour.1
                    guard inBound(newX, newY, m, n), grid[newX][newY] == 0  else {
                        continue
                    }
                    var removeCurrent = 1
                    if newX == (m - 1) && newY == (n-1) {
                        removeCurrent = 0
                    }
                    let currentCell = fireMatrix[newX][newY] != Int.max ? (fireMatrix[newX][newY] - level - removeCurrent) : Int.max
                    let neighbourFireStatus = min(top[2], currentCell)
                    if  (neighbourFireStatus > maxTimeToReach[newX][newY]) { // only grass
                        maxTimeToReach[newX][newY] = neighbourFireStatus
                        queue.append([newX, newY, maxTimeToReach[newX][newY]])
                    }
                }
            }
            level += 1
        }

        if maxTimeToReach[m-1][n-1] == Int.max {
            return 1000000000
        } else if maxTimeToReach[m-1][n-1] < 0 {
            return -1
        }
        return maxTimeToReach[m-1][n-1]
    }

    private func inBound(_ x: Int, _ y: Int, _ m: Int, _ n: Int) -> Bool {
        return x >= 0 && x < m && y >= 0 && y < n
    }
}
```