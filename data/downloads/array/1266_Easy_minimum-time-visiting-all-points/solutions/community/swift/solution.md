# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4355436/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4355436/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minTimeToVisitAllPoints(_ points: [[Int]]) -> Int {
        guard points.count > 1 else { return .zero }

        var result = 0
        var last = points[0]
        for i in 1 ..< points.count {
            result += max(abs(points[i][0] - last[0]), abs(points[i][1] - last[1]))
            last = points[i]
        }
        
        return result
    }
}

```