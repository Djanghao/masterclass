# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/6084047/](https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/6084047/)

---

**Simulation (accepted answer)**
```
class Solution {
    func maxHeightOfTriangle(_ red: Int, _ blue: Int) -> Int {
        func height(_ a:Int, _ b:Int) -> Int {
            var vals = [a,b]
            var row = 0
            while vals[row&1] >= row+1 {
                row += 1
                vals[row&1^1] -= row
            }
            return row
        }
        return max(height(red, blue), height(blue, red))
    }
}
```