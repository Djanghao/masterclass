# [Swift] Sliding window

**Author:** muzle
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/5148409/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/5148409/)

---

# Code
```
class Solution {
    func distinctNumbers(_ nums: [Int], _ k: Int) -> [Int] {
        var result = [Int](repeating: 0, count: nums.count-k+1)
        var visited = [Int: Int]()

        for i in 0..<nums.count {
            visited[nums[i], default: 0] += 1
            guard i + 1 >= k else { continue }
            result[i-k+1] = visited.keys.count
            if visited[nums[i-k+1]] == 1 { visited[nums[i-k+1]] = nil }
            else { visited[nums[i-k+1], default: 0] -= 1 }
        }

        return result
    }
}
```