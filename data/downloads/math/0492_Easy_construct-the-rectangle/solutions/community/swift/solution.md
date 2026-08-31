# Swift solution

**Author:** crusader776
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/1043836/](https://leetcode.com/problems/construct-the-rectangle/solutions/1043836/)

---

```
import Foundation

class Solution {
    func constructRectangle(_ area: Int) -> [Int] {
        var tmp = Int(sqrt(Double(area)))
        while !area.isMultiple(of: tmp) {
            tmp -= 1
        }
        return [area / tmp, tmp]
    }   
}
```