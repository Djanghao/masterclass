# Swift 105 ms

**Author:** pigmasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses-ii/solutions/2836215/](https://leetcode.com/problems/parallel-courses-ii/solutions/2836215/)

---

```
class Solution {
    func minNumberOfSemesters(_ n: Int, _ relations: [[Int]], _ k: Int) -> Int {
        var relationMasks = Array(repeating: 0, count: n)
        relations.forEach { relationMasks[$0[1] - 1] |= (1 << ($0[0] - 1)) }
        var cache: [Int: Int] = [:]
        return minNumberOfSemesters(n, k, relationMasks, 0, &cache)
    }

    private func minNumberOfSemesters(_ n: Int, _ k: Int, _ relations: [Int], _ visited: Int, _ cache: inout [Int: Int]) -> Int {
        if visited == (1 << n) - 1 { return 0 }
        if let c = cache[visited] { return c }
        var pretendents: [Int] = []
        for (i, r) in relations.enumerated() {
            let m = 1 << i
            if (visited & m) == 0 && (r & ~visited) == 0 { pretendents.append(m) }
        }
        var variants: [Int] = []
        choose(k, pretendents, 0, 0, &variants)
        var count = Int.max
        for v in variants {
            count = min(count, 1 + minNumberOfSemesters(n, k, relations, visited | v, &cache))
        }
        cache[visited] = count
        return count
    }

    // choose all subarrays of k elements from arr,
    // compute OR operation of all elements of the subarray
    // and push it to the result
    private func choose(_ k: Int, _ arr: [Int], _ from: Int, _ cur: Int, _ result: inout [Int]) {
        if arr.count - from <= k {
            var v = cur
            for i in from ..< arr.count {
                v |= arr[i]
            }
            result.append(v)
            return
        }
        for i in from ..< arr.count - k + 1 {
            if k == 1 {
                result.append(cur | arr[i])
            } else {
                choose(k - 1, arr, i + 1, cur | arr[i], &result)
            }
        }
    }
}
```