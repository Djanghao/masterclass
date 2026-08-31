# Swift solution

**Author:** azm819
**Votes:** 3
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/4319724/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/4319724/)

---

# Complexity
- Time complexity: $$O(n * m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func countPoints(_ points: [[Int]], _ queries: [[Int]]) -> [Int] {
        queries.map { query in
            let squareRadius = query[2] * query[2]
            return points.filter { point in
                let xDiff = abs(query[0] - point[0])
                let yDiff = abs(query[1] - point[1])
                return xDiff * xDiff + yDiff * yDiff <= squareRadius
            }.count
        }
    }
}
```