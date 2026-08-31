# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/3815958/](https://leetcode.com/problems/find-right-interval/solutions/3815958/)

---

# Code
```
class Solution {
    func findRightInterval(_ intervals: [[Int]]) -> [Int] {
        var (n, map) = (intervals.count, [[Int]]())
        var ans = [Int](repeating: 0, count: n)

        for i in 0..<n {
            map.append([intervals[i][0], i])
        }

        map.sort(by: { $0[0] < $1[0] })
        
        for i in 0..<n {
            var (l, target, r) = (0, intervals[i][1], n-1)

            while l<=r {
                let mid = (l+r)/2
                map[mid][0] >= target ? (r = mid - 1) : (l = mid + 1)
            }

            l<n ? (ans[i] = map[l][1]) : (ans[i] = -1)
        }

        return ans
    }
}
```