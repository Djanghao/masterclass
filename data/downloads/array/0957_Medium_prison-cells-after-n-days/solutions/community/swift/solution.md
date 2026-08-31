# Swift simple solution with cycle

**Author:** alex-lev2312
**Votes:** 1
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/717496/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/717496/)

---

After you wrote code to calculate next day state in loop and print it in debug, you can assume, that states repeatable. So, all we gonna do is save states, find first repeated state, and get answer with ```loopStates[ N % loopLenght]```

```
class Solution {
    func prisonAfterNDays(_ cells: [Int], _ N: Int) -> [Int] {
        
        var cells = cells
        
        // Array, to calculate new day state
        var newDayCells = cells
        
        // save all possible state
        var loopStates = [[Int]]()
        
        newDayCells[cells.startIndex] = 0
        newDayCells[cells.endIndex - 1] = 0
        var set: Set<[Int]> = .init()
        for n in 0..<N {
            for i in cells.startIndex + 1..<cells.endIndex - 1 {
                newDayCells[i] = cells[i - 1] == cells[i + 1] ? 1 : 0
            }
            cells = newDayCells
            
            if set.insert(cells).inserted == false {
                // enter a cycle, so we should take one of previos value
                return loopStates[(N - 1) % n]
            } else {
                // save current state
                loopStates.append(cells)
            }
        }
        return newDayCells
    }
}
```