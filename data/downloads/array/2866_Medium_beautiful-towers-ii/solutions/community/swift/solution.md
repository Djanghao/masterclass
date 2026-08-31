# Swift | Monotonic Stack

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-towers-ii/solutions/5389453/](https://leetcode.com/problems/beautiful-towers-ii/solutions/5389453/)

---

# Code
```
class Solution {
    func maximumSumOfHeights(_ heights: [Int]) -> Int {
        let n = heights.count

        // A mountain is an increasing sequence followed by a decreasing sequence.
        let increasing = increasingSums(heights)
        let decreasing = increasingSums(Array(heights.reversed()))

        // Look at all the possible peaks and take the best one.
        var res = 0
        for i in 0..<n {
            res = max(res, increasing[i] + decreasing[n - 1 - i] - heights[i])
        }
        return res

        // Computes the maximum sum of non-decreasing heights.
        func increasingSums(_ heights: [Int]) -> [Int] {
            var stack = [(index: Int, height: Int)]()
            var res = [Int]()

            for i in 0..<n {
                var last: (index: Int, height: Int)?
                while stack.last != nil, stack.last!.1 >= heights[i] {
                    last = stack.removeLast()
                    continue
                }
                stack.append((last?.0 ?? i, heights[i]))

                var val = stack.last!.0 > 0 ? res[stack.last!.0 - 1] : 0
                val += (i - stack.last!.0 + 1) * stack.last!.1
                res.append(val)
            }

            return res
        }
    }
}
```