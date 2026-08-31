# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4434243/](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4434243/)

---

# Complexity
- Time complexity: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func maxWidthOfVerticalArea(_ points: [[Int]]) -> Int {
        let points = points.map { $0[0] }.sorted(by: <)
        var last = points[0]
        var result = 0
        for i in 1 ..< points.count {
            result = max(result, points[i] - last)
            last = points[i]
        }
        return result
    }
}

```