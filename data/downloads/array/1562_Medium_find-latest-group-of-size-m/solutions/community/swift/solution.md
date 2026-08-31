# Swift Solution | 100% efficient

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-latest-group-of-size-m/solutions/2359947/](https://leetcode.com/problems/find-latest-group-of-size-m/solutions/2359947/)

---

```
// Find Latest Group of Size M
class Solution {
    func findLatestStep(_ arr: [Int], _ m: Int) -> Int {
        var groupSizes = Array(repeating: 0, count: arr.count)
        var result = -1
        var groupStarts = Set<Int>()
        for i in 0..<arr.count {
            let curr = arr[i] - 1
            var val = 1
            var prev = 0
            var next = 0
            if curr > 0 {
                val += groupSizes[curr - 1]
                prev = groupSizes[curr - 1]
                if prev == m {
                    groupStarts.remove(curr - groupSizes[curr - 1])
                }
            }
            if curr < arr.count - 1 {
                val += groupSizes[curr + 1]
                next = groupSizes[curr + 1]
                if next == m {
                    groupStarts.remove(curr + 1)
                }
            }
            if val == m {
                groupStarts.insert(curr - prev)
            }
            groupSizes[curr - prev] = val
            groupSizes[curr + next] = val
            if groupStarts.count > 0 {
                result = i + 1
            }
        }
        return result
    }
}
```