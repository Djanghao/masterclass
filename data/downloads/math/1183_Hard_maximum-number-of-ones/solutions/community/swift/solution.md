# 💡Swift - Expected Solution - Math

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ones/solutions/3978448/](https://leetcode.com/problems/maximum-number-of-ones/solutions/3978448/)

---

# Solution
```
class Solution {
    struct Cell {
        let count: Int
        let repeats: Int
    }
    func maximumNumberOfOnes(_ width: Int, _ height: Int, _ sideLength: Int, _ maxOnes: Int) -> Int {
        // Calculate the number of full squares in both dimensions.
        let n = height / sideLength
        let m = width / sideLength

        // Calculate the remaining cells that are not part of full squares.
        let nReminder = height % sideLength
        let mReminder = width % sideLength
        
        // Calculate counts for each of the cell types. Ignore the cell type
        // of cells that are off the matrix. We are not counting those 1s.
        let bottomRightCells = nReminder * mReminder
        let rightCellsOnly = (sideLength - nReminder) * mReminder
        let bottomCellsOnly = nReminder * (sideLength - mReminder)
        
        // Create an array to hold the counts and repeats for each cell type.
        // Prioritize placement based on which direction has more available space.
        var repeats: [Cell] = []
        repeats.append(Cell(count: bottomRightCells, repeats: n + m + 1))
        let competingCells = [
            Cell(count: rightCellsOnly, repeats: n),
            Cell(count: bottomCellsOnly, repeats: m)
        ]
        repeats.append(contentsOf: n > m ? competingCells : competingCells.reversed())
        
        // All the full squares will contain exactly `maxOnes` 1s.
        // Loop through the repeats array and allocate ones based on counts and repeats.
        var numberOfOnes = n * m * maxOnes
        var notPlacedOnes = maxOnes
        while notPlacedOnes > 0 && !repeats.isEmpty {
            let next = repeats.removeFirst()
            let placedOnes = min(notPlacedOnes, next.count) * next.repeats
            numberOfOnes += placedOnes
            notPlacedOnes -= next.count
        }

        return numberOfOnes
    }
}
```

# Complexity
- Time: $$O(1)$$
- Space: $$O(1)$$