# ⚡️ Swift BFS, Easy to understand

**Author:** ash_asoyan
**Votes:** 3
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/2833303/](https://leetcode.com/problems/sliding-puzzle/solutions/2833303/)

---

# Code
```
class Solution {
    /* Possible swaps of '0' for every initial position
       To understand in better look at this example:

       0 1 2 
       3 4 5

      If '0' appears on the position 0, then we can swap it only with
      positons 1 and 3, cause of 4-directional move condition.
    */
    var dirs = [
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4]
    ]

    func slidingPuzzle(_ board: [[Int]]) -> Int {
        var visited = Set<[Int]>()
        let dest = [1, 2, 3, 4, 5, 0]
        let start = board.flatMap{ $0 }

        visited.insert(start)
        var queue = [start]

        var moves = 0

        while !queue.isEmpty {
            let len = queue.count 

            for _ in 0..<len {
                let curr = queue.removeFirst()

                if curr == dest {
                    return moves
                }

                let indexOfZero = curr.index(of: 0)!

                for dir in dirs[indexOfZero, default:[]] {
                    var currCopy = curr
                    currCopy[indexOfZero] = currCopy[dir]
                    currCopy[dir] = 0

                    if !visited.contains(currCopy) {
                        queue.append(currCopy)
                        visited.insert(currCopy)
                    }
                }
            }

            moves += 1
        }
        
        return -1
    }
}
```