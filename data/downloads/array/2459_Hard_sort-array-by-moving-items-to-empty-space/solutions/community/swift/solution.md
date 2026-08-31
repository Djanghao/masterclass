# Swift: Beats 100%

**Author:** ashish-badak
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/5524675/](https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/solutions/5524675/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution {
    func sortArray(_ nums: [Int]) -> Int {
        let numCount = nums.count
        if numCount < 3 { return 0 }

        var positions: [Int: Int] = [:]
        for (pos, num) in nums.enumerated() {
            positions[num] = pos
        }

        func movesToSortNums(positions: [Int: Int], offset: Int) -> Int {
            var positions = positions
            var idealPositionOfZero = offset * (numCount - 1)
            var moves = 0
            var i = 1
            var misplacedNum: Int

            while i < numCount {
                if positions[0] == idealPositionOfZero {
                    while positions[i] == (i - offset) {
                        i += 1
                        if i == numCount { return moves }
                    }
                    misplacedNum = i
                } else {
                    misplacedNum = positions[0]! + offset
                }
                (positions[0], positions[misplacedNum]) = (positions[misplacedNum], positions[0])
                moves += 1
            } 

            return moves
        }

        let leadingZeroSortingMoves = movesToSortNums(positions: positions, offset: 0)
        if leadingZeroSortingMoves == 0 { return 0 }
        
        return min(leadingZeroSortingMoves, movesToSortNums(positions: positions, offset: 1))
    }
}
```