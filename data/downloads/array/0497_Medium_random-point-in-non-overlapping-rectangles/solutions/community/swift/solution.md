# Binary search

**Author:** s4yrmc
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/4538490/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/4538490/)

---

```

class Solution {
    let rects: [[Int]]
    var prefix = [Int]()
    var total = 0

    init(_ rects: [[Int]]) {
        self.rects = rects
        var prefix = [Int]()

        var currentArea = 0
        for rect in rects {
            currentArea += (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1)
            self.prefix.append(currentArea)
        }

        self.total = currentArea
    }
    
    func pick() -> [Int] {
        let pointIndex = Int.random(in: 0...self.total)
        let rectIdx = upperBoundBinarySearch(self.prefix, pointIndex)
        let rect = self.rects[rectIdx]
        let x = Int.random(in: rect[0]...rect[2])
        let y = Int.random(in: rect[1]...rect[3])
        return [x, y]
    }

    private func upperBoundBinarySearch(_ nums: [Int], _ value: Int) -> Int {
        var left = 0
        var right = nums.count - 1

        while left < right {
            let mid = left + (right - left) / 2

            if nums[mid] > value {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return right
    }
}
