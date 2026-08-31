# Beast 100% (No other submission was there :))

**Author:** thomasmani1999
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/5904637/](https://leetcode.com/problems/find-maximal-uncovered-ranges/solutions/5904637/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func findMaximalUncoveredRanges(_ n: Int, _ ranges: [[Int]]) -> [[Int]] {
        var starts = ranges.map{$0[0]}.sorted()
        var ends = ranges.map{$0[1]}.sorted()
        var result: [[Int]] = []
        var ptr = 0
        for (index,start) in starts.enumerated() {
            if ptr < start {
                result.append([ptr,start - 1])
            }
            ptr = ends[index] + 1
        }

        if ptr < n {
            result.append([ptr,n-1])
        }
        return result
    }
}
```