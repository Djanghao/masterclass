# Swift - Contain Virus

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/contain-virus/solutions/5497802/](https://leetcode.com/problems/contain-virus/solutions/5497802/)

---


```
class Solution {
    func containVirus(_ isInfected: [[Int]]) -> Int {
        // Copy of the original grid to modify during processing
        var grid = isInfected
        // Directions for moving up, down, left, and right
        let directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        // Variable to keep track of the total number of walls used
        var totalWalls = 0
        
        // Depth-First Search (DFS) function to explore a viral region
        func dfs(_ i: Int, _ j: Int, _ region: inout Set<[Int]>, _ frontier: inout Set<[Int]>, _ walls: inout Int) {
            let n = grid.count
            let m = grid[0].count
            // Stack for DFS traversal
            var stack = [(i, j)]
            region.insert([i, j])
            var idx = 0
            
            while idx < stack.count {
                let (x, y) = stack[idx]
                idx += 1
                
                for direction in directions {
                    let newX = x + direction.0
                    let newY = y + direction.1
                    
                    // Check if the new position is within bounds
                    if newX >= 0 && newX < n && newY >= 0 && newY < m {
                        if grid[newX][newY] == 1 && !region.contains([newX, newY]) {
                            // If the new cell is infected and not yet visited in this region
                            stack.append((newX, newY))
                            region.insert([newX, newY])
                        } else if grid[newX][newY] == 0 {
                            // If the new cell is uninfected (part of the frontier)
                            frontier.insert([newX, newY])
                            walls += 1
                        }
                    }
                }
            }
        }
        
        // Main loop to process the grid until no more infections can spread
        while true {
            var regions = [Set<[Int]>]()
            var frontiers = [Set<[Int]>]()
            var wallsList = [Int]()
            
            let n = grid.count
            let m = grid[0].count
            var visited = Set<[Int]>()
            
            // Identify all viral regions and their frontiers
            for i in 0..<n {
                for j in 0..<m {
                    if grid[i][j] == 1 && !visited.contains([i, j]) {
                        var region = Set<[Int]>()
                        var frontier = Set<[Int]>()
                        var walls = 0
                        dfs(i, j, &region, &frontier, &walls)
                        for cell in region {
                            visited.insert(cell)
                        }
                        regions.append(region)
                        frontiers.append(frontier)
                        wallsList.append(walls)
                    }
                }
            }
            
            // If there are no more viral regions, break the loop
            if regions.isEmpty {
                break
            }
            
            // Find the region with the largest frontier
            var maxFrontierIdx = 0
            for i in 1..<frontiers.count {
                if frontiers[i].count > frontiers[maxFrontierIdx].count {
                    maxFrontierIdx = i
                }
            }
            
            // Add the walls needed for the most dangerous region to the total count
            totalWalls += wallsList[maxFrontierIdx]
            
            // Quarantine the most dangerous region by marking its cells with -1
            for cell in regions[maxFrontierIdx] {
                grid[cell[0]][cell[1]] = -1
            }
            
            // Spread the virus in the remaining regions
            for i in 0..<regions.count {
                if i != maxFrontierIdx {
                    for cell in frontiers[i] {
                        grid[cell[0]][cell[1]] = 1
                    }
                }
            }
        }
        
        return totalWalls
    }
}

```