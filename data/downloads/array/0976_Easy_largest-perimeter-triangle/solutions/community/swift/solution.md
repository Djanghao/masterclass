# Easy Swift solution

**Author:** yamironov
**Votes:** 6
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/491556/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/491556/)

---

Easy Swift solution
```
class Solution {
    func largestPerimeter(_ A: [Int]) -> Int {
        let a = A.sorted(by: >) // descending sort
        for i in 0..<(a.count - 2) { // loop every 3 of lengths from large to small
            if a[i + 1] + a[i + 2] - a[i] > 0 { // triangle is possible and non-empty
                return a[i + 1] + a[i + 2] + a[i]
            }
        }
        return 0 // there is no possible non-empty triangles
    }
}
```