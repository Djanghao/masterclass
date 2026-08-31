# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3169865/](https://leetcode.com/problems/categorize-box-according-to-criteria/solutions/3169865/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func categorizeBox(_ l: Int, _ w: Int, _ h: Int, _ m: Int) -> String {
        ["Neither","Bulky","Heavy","Both"][(m>=100 ? 2:0)+((max(l,w,h)>=10000||l*w*h>=1000000000) ? 1:0)]
    }
}
```

---
**Idiomatic Swift (accepted answer)**
```
class Solution {
    func categorizeBox(_ length: Int, _ width: Int, _ height: Int, _ mass: Int) -> String {
        let isBulky = max(length, width, height) >= 10_000 || (length*width*height) >= 1_000_000_000  
        let isHeavy = mass >= 100
        
        switch (isBulky, isHeavy) {
        case (true, false): return "Bulky"
        case (false, true): return "Heavy"
        case (true, true): return "Both"
        case (false, false): return "Neither"
        }
    }
}
```

