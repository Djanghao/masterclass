# If you're stuck on TLE in Swift, you can check this

**Author:** tzef
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/2842428/](https://leetcode.com/problems/shortest-distance-from-all-buildings/solutions/2842428/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I guess the test data changed recently
my previous successfule solution few months ago
now all get time limited exceeds result.

Not sure it's only happend to Swift or other langauage as well,
finally comes to this optimize solution,
hope the test data not grows any more :(

There're two approach to BFS, 
one from land to building, another one from building to lands

Time complexity worst case both are $$O(N^2M^2)$$,
the inner loop is the same, both have to check all matrix,
the key points is the `lands count` vs `buildings counts.`

There'a no better solution, it depends on the test data.
for example

    1 1 1
    1 0 1
    1 1 1
    this case from land just need 1 * matrix
    but from buidling need 8 * matrix

vice versa for the opposite case

    0 0 0
    0 1 0
    0 0 0

# Code
```
class Solution {
    var grid = [[Int]]()
    func shortestDistance(_ grid: [[Int]]) -> Int {
        self.grid = grid
        let buildingCount: Int = {
            var count = 0
            for row in 0..<grid.count {
                for col in 0..<grid[row].count {
                    if grid[row][col] == 1 {
                        count += 1
                    }
                }
            }
            return count
        }()

        var minDistances = Int.max
        if buildingCount < grid.count * grid[0].count / 2 {
            minDistances = bfsFromBuilding(buildingCount)
        } else {
            for row in 0..<grid.count {
                for col in 0..<grid[row].count {
                    if grid[row][col] == 0 {
                        minDistances = min(minDistances, bfsFromLands([row, col], buildingCount))
                    }
                }
            }
        }
        return minDistances == Int.max ? -1 : minDistances
    }
    
    func bfsFromBuilding(_ buildingCount: Int) -> Int {
        var buildingToLandDistance = [[Int]: Int]()
        var minDistances = Int.max
        var traverseCount = 0
        for row in 0..<grid.count {
            for col in 0..<grid[row].count {
                if grid[row][col] == 1 {
                    traverseCount += 1
                    var visitedBuildingCount = 1
                    var visited = Set<[Int]>()
                    var queue = getNeighbors([row, col])
                    var depth = 1
                    while !queue.isEmpty {
                        var nextQueue = [[Int]]()
                        for next in queue {
                            guard 
                                0..<grid.count ~= next[0], 
                                0..<grid[0].count ~= next[1],
                                grid[next[0]][next[1]] != 2,
                                !visited.contains(next)
                            else { 
                                continue 
                            }
                            visited.insert(next)
                            if grid[next[0]][next[1]] == 1 - traverseCount {
                                // indicate land visited count, 
                                // only consider the land could be visited by all buildings
                                grid[next[0]][next[1]] -= 1
                                nextQueue += getNeighbors(next)
                                buildingToLandDistance[next, default: 0] += depth
                                if traverseCount == buildingCount {
                                    minDistances = min(
                                        minDistances, 
                                        buildingToLandDistance[next, default: Int.max]
                                    )
                                }
                            }
                            if grid[next[0]][next[1]] == 1 {
                                visitedBuildingCount += 1
                            }
                        }
                        queue = nextQueue
                        depth += 1
                    }
                    // one building be isolated, impossible to get path reach all buildings
                    if visitedBuildingCount < buildingCount {
                        return Int.max
                    }
                }
            }
        }
        return minDistances
    }
    
    func bfsFromLands(_ point: [Int], _ buildingCount: Int) -> Int {
        var queue = [point]
        var depth = 0
        var distances = 0
        var visitedLands = Set<[Int]>()
        var visitedBuildings = Set<[Int]>()
        while !queue.isEmpty {
            var nextQueue = [[Int]]()
            for next in queue {
                guard 
                    0..<grid.count ~= next[0], 
                    0..<grid[0].count ~= next[1],
                    grid[next[0]][next[1]] != 2,
                    !visitedLands.contains(next),
                    !visitedBuildings.contains(next)
                else {
                    continue
                }
                if grid[next[0]][next[1]] == 0 {
                    nextQueue += getNeighbors(next)
                    visitedLands.insert(next)
                }
                if grid[next[0]][next[1]] == 1 {
                    distances += depth
                    visitedBuildings.insert(next)
                }
            }
            queue = nextQueue
            depth += 1
        }
        if visitedBuildings.count == buildingCount {
            return distances
        } else {
            // no need to traverse again for the points can't reach all buildings
            visitedLands.forEach {
                grid[$0[0]][$0[1]] == 2
            }
            return Int.max
        }
    }
    
    func getNeighbors(_ point: [Int]) -> [[Int]] {
        [
            [point[0], point[1]+1],
            [point[0], point[1]-1],
            [point[0]+1, point[1]],
            [point[0]-1, point[1]]
        ]
    }
}
```