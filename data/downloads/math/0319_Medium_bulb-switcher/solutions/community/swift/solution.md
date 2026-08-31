# Simple sqrt() Solution

**Author:** user6990dN
**Votes:** 1
**Link:** [https://leetcode.com/problems/bulb-switcher/solutions/3460408/](https://leetcode.com/problems/bulb-switcher/solutions/3460408/)

---



# Code
```
class Solution {
    func bulbSwitch(_ n: Int) -> Int {
        guard n > 1 else { return n }

        return Int(sqrt(Double(n)))
    }
}
```