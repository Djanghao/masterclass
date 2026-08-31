# [Swift] BFS Simple Solution

**Author:** gryphoon
**Votes:** 0
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/4916582/](https://leetcode.com/problems/snakes-and-ladders/solutions/4916582/)

---

# Approach
- To find the minimum number of moves required to reach the finishing position from the starting position, we can use Breadth-First Search (BFS) algorithm.
- It is also difficult to directly determine if a position on the board contains a snake or ladder (due to the *Boustrophedon Style*). Therefore, we can first flatten the board into a single array. This allows us to treat it as a graph. If the value in the array is `-1`, it means that node is not connected to any other. However, if the value is not `-1`, it indicates that the space is linked to another space, which could be either a snake or ladder.

# Remarks
While this may not be the fastest or most concise solution, my goal is to give an alternative approach for solving this problem in Swift that is still accepted by LeetCode.

# Complexity
## Time Complexity
`O(n^2)`
## Space Complexity
`O(n^2)`

# Code
```
class Solution {
    var visitedNode: Set<Int> = Set()
    var bfsQueue: [Int] = []
    
    private func insertUniqueToQueue(position: Int) {
        if visitedNode.contains(position) { return }
        visitedNode.insert(position)
        bfsQueue.append(position)
    }
    
    func snakesAndLadders(_ board: [[Int]]) -> Int {
        visitedNode.removeAll()
        bfsQueue.removeAll()
        
        let startingPosition = 1
        let finalPosition = board.count * board.count
        
        // flatten the board first into a single array of Int
        var flattenBoard: [Int] = []
        var isMovingToRight: Bool = true
        for row in (0..<board.count).reversed() {
            if (isMovingToRight) {
                flattenBoard.append(contentsOf: board[row])
            } else {
                flattenBoard.append(contentsOf: board[row].reversed())
            }
            isMovingToRight = !isMovingToRight
        }
        
        // Finding the smallest number of steps required using BFS
        var totalSteps: Int = 0
        bfsQueue = [startingPosition]
        while !bfsQueue.isEmpty {
            var currentStepQueue = bfsQueue
            bfsQueue.removeAll()
                        
            for position in currentStepQueue {
                if position >= finalPosition {
                    return totalSteps
                }
                
                let nextPositionCandidates = Array(position + 1...position + 6)
                for nextPosition in nextPositionCandidates where nextPosition <= finalPosition {
                    if flattenBoard[nextPosition-1] != -1 {
                        insertUniqueToQueue(position: flattenBoard[nextPosition-1])
                    } else {
                        insertUniqueToQueue(position: nextPosition)
                    }
                }
            }
            
            totalSteps += 1
        }
        
        // the queue is empty and we haven't reached the finish position, it means that it's impossible to reach the finish position.
        return -1
    }
}
```