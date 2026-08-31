# Swift Solution using Dijkstra's

**Author:** liampronan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6008040/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6008040/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n*m*log(nm))$$
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
        
        minHeap.insert(Path(r: 0, c: 0, timePassed: 0))
        while let currPath = minHeap.popMin() {
            if currPath.r == moveTime.count - 1 && currPath.c == moveTime[0].count - 1 {
                return currPath.timePassed
            }
            
            for (dR, dC) in [(-1,0), (1,0), (0, -1), (0, 1)] {
                let newRow = currPath.r + dR, newCol = currPath.c + dC
                guard (0..<moveTime.count).contains(newRow) && (0..<moveTime[0].count).contains(newCol) else { continue }
                let timeAtNewCell = currPath.timePassed >= moveTime[newRow][newCol] ? currPath.timePassed + 1 : moveTime[newRow][newCol] + 1
                guard timeAtNewCell < visitedWithTime[newRow][newCol]  else { continue }
                visitedWithTime[newRow][newCol] = timeAtNewCell
                minHeap.insert(Path(r: newRow, c: newCol, timePassed: timeAtNewCell))
            }
        }
        return -1
    }
}

struct Path: Comparable {
    let r: Int
    let c: Int
    let timePassed: Int

    static func == (lhs: Self, rhs: Self) -> Bool {
        return lhs.r == rhs.r && lhs.c == rhs.c && lhs.timePassed == rhs.timePassed
    }

    static func < (lhs: Self, rhs: Self) -> Bool {
        if lhs.timePassed == rhs.timePassed {
            if lhs.r == rhs.r { return lhs.c < rhs.c }
            return lhs.r < rhs.r 
        }
        return lhs.timePassed < rhs.timePassed
    }
}

```