# Swift Solution using Dijkstra's

**Author:** liampronan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6008042/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6008042/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nm*log(nm))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  $$O(n*m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
import Collections

class Solution {
    func minTimeToReach(_ moveTime: [[Int]]) -> Int {

        var minHeap = Heap<Path>()
        var visitedWithTime = Array(repeating: Array(repeating: Int.max, count: moveTime[0].count), count: moveTime.count)
        
        minHeap.insert(Path(r: 0, c: 0, timePassed: 0, nextMoveCost: 1))
        // [[0,4],[4,4]]
        while let currPath = minHeap.popMin() {
            // print(currPath)
            if currPath.r == moveTime.count - 1 && currPath.c == moveTime[0].count - 1 {
                return currPath.timePassed
            }
            
            for (dR, dC) in [(-1,0), (1,0), (0, -1), (0, 1)] {
                
                let newRow = currPath.r + dR, newCol = currPath.c + dC
                guard (0..<moveTime.count).contains(newRow) && (0..<moveTime[0].count).contains(newCol) else { continue }
                let timeAtNewCell = currPath.timePassed >= moveTime[newRow][newCol] ? currPath.timePassed + currPath.nextMoveCost : moveTime[newRow][newCol] + currPath.nextMoveCost
                // print(timeAtNewCell)
                guard timeAtNewCell < visitedWithTime[newRow][newCol]  else { continue }
                // print(newRow, newCol, timeAtNewCell)
                visitedWithTime[newRow][newCol] = timeAtNewCell
                minHeap.insert(Path(r: newRow, c: newCol, timePassed: timeAtNewCell, nextMoveCost: currPath.nextMoveCost == 1 ? 2 : 1 ))
                
            }
        }
        return -1
    }
}

struct Path: Comparable, CustomStringConvertible {
    let r: Int
    let c: Int
    let timePassed: Int
    let nextMoveCost: Int
    var description: String { "r: \\(r), c: \\(c), timePassed: \\(timePassed), nextMoveCost: \\(nextMoveCost)" }

    static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.r == rhs.r && lhs.c == rhs.c && lhs.timePassed == rhs.timePassed
    }

    static func < (lhs: Self, rhs: Self) -> Bool {
        if lhs.timePassed == rhs.timePassed {
            if rhs.nextMoveCost == rhs.nextMoveCost {
                if lhs.r == rhs.r { return lhs.c < rhs.c }
                return lhs.r < rhs.r     
            }
            
            return lhs.nextMoveCost < rhs.nextMoveCost
        }
        return lhs.timePassed < rhs.timePassed
    }
}

```