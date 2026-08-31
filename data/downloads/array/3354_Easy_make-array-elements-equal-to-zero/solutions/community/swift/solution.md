# [Swift] Beats 100% | Solve with O(n)

**Author:** 0xz3r0
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6053334/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6053334/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```swift []
class Solution {
    func countValidSelections(_ nums: [Int]) -> Int {
        let n = nums.count
        var count = 0

        func simulate(start: Int, direction: Int) -> Bool {
            var curr = start
            var numsCopy = nums
            var dir = direction

            while 0 <= curr && curr < n {
                if numsCopy[curr] == 0 {
                    curr += dir
                } else {
                    numsCopy[curr] -= 1
                    dir = -dir
                    curr += dir
                }
            }

            return numsCopy.allSatisfy { $0 == 0 }
        }

        for start in 0..<n {
            if nums[start] == 0 {
                if simulate(start: start, direction: 1) {
                    count += 1
                }
                if simulate(start: start, direction: -1) {
                    count += 1
                }
            }
        }

        return count
    }
}
```