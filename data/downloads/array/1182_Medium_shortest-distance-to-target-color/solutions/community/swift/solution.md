# [Swift] Readable Solution (Binary Search)

**Author:** Legonaftik
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/1289548/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/1289548/)

---

```
class Solution {

    func shortestDistanceColor(_ colors: [Int], _ queries: [[Int]]) -> [Int] {

        var colorToIndices: [Int: [Int]] = [:]
        for (i, color) in colors.enumerated() {
            colorToIndices[color, default: []].append(i)
        }

        var answer: [Int] = []
        answer.reserveCapacity(queries.count)

        for query in queries {
            let fromIndex = query[0]
            let color = query[1]
            guard let indicesOfColor = colorToIndices[color] else {
                answer.append(-1)
                continue
            }

            let insertionIndex = binarySearch(sortedArray: indicesOfColor, target: fromIndex)
            let distance: Int
            if insertionIndex <= 0 {
                distance = indicesOfColor[0] - fromIndex
            } else if insertionIndex >= indicesOfColor.endIndex {
                distance = fromIndex - indicesOfColor[indicesOfColor.endIndex-1]
            } else {
                let leftDistance = fromIndex - indicesOfColor[insertionIndex-1]
                let rightDistance = indicesOfColor[insertionIndex] - fromIndex
                distance = min(leftDistance, rightDistance)
            }
            answer.append(distance)
        }

        return answer
    }

    private func binarySearch(sortedArray: [Int], target: Int) -> Int {
        var lower = sortedArray.startIndex
        var higher = sortedArray.endIndex - 1
        while lower <= higher {
            let mid = lower + (higher - lower) / 2
            let midNum = sortedArray[mid]
            if midNum < target {
                lower = mid + 1
            } else if midNum > target {
                higher = mid - 1
            } else {
                return mid
            }
        }
        return lower
    }
}
```