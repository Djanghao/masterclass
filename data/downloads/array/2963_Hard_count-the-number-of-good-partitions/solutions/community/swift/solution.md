# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4389369/](https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4389369/)

---

# Complexity
- Time complexity: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    static func countPoss(_ n: Int) -> Int {
        guard n > 1 else { return 1 }
        var result = 1
        var p = 1
        var step = 1
        while step < n {
            result += p
            result %= 1_000_000_007
            p *= 2
            p %= 1_000_000_007
            step += 1
        }
        return result
    }

    func numberOfGoodPartitions(_ nums: [Int]) -> Int {
        var numToRange = [Int: ClosedRange<Int>]()
        for i in 0 ..< nums.count {
            numToRange[nums[i]] = (numToRange[nums[i]]?.lowerBound ?? i) ... i
        }
        guard numToRange.count < nums.count else { return Solution.countPoss(nums.count) }
        let ranges = numToRange.values.sorted { $0.lowerBound < $1.lowerBound }
        var rangesCount = 0
        var lastUpperBound = 0
        for range in ranges {
            if lastUpperBound > range.lowerBound {
                lastUpperBound = max(lastUpperBound, range.upperBound)
            } else {
                lastUpperBound = range.upperBound
                rangesCount += 1
            }
        }
        return Solution.countPoss(rangesCount)
    }
}
```