# Swift | Valid Boomerang | One-liner (Vector Cross Product)

**Author:** iosdevzone
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/1437599/](https://leetcode.com/problems/valid-boomerang/solutions/1437599/)

---

This solution uses the fact that the cross product of two colinear vectors is 0.
It subtracts the first point from each of the other points to create two vectrs and then calculates the cross product between the vectors.
```swift
class Solution {
    func isBoomerang(_ p: [[Int]]) -> Bool {
        (p[1][0]-p[0][0])*(p[2][1]-p[0][1]) - (p[1][1]-p[0][1])*(p[2][0]-p[0][0]) != 0     
    }
}
```