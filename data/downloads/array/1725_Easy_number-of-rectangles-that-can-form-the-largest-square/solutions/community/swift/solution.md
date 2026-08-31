# Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1021797/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1021797/)

---

Swift solution
```
class Solution {
    func countGoodRectangles(_ rectangles: [[Int]]) -> Int {
        var maxLen = 0, result = 0
        for rectangle in rectangles {
            let smallSide = min(rectangle[0], rectangle[1])
            if smallSide > maxLen {
                maxLen = smallSide
                result = 1
            } else if smallSide == maxLen {
                result += 1
            }
        }
        return result
    }
}
```