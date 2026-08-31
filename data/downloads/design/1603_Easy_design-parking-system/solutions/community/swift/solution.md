# ✅ [Solution] Swift: Design Parking System

**Author:** AsahiOcean
**Votes:** 11
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/1153994/](https://leetcode.com/problems/design-parking-system/solutions/1153994/)

---

```swift
class ParkingSystem {
    private var dict: [Int:Int] = [:]
    
    init(_ b: Int, _ m: Int, _ s: Int) {
        [b,m,s].enumerated().forEach {
            dict[$0 + 1] = $1
        }
    }
    
    func addCar(_ t: Int) -> Bool {
        dict[t, default: 1] -= 1
        return (dict[t] ?? 0) >= 0
    }
}
```