# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4392980/](https://leetcode.com/problems/count-tested-devices-after-test-operations/solutions/4392980/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func countTestedDevices(_ batteryPercentages: [Int]) -> Int {
        batteryPercentages.reduce(0) {$1>$0 ? $0+1:$0}
    }
}
```

---

**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func countTestedDevices(_ batteryPercentages: [Int]) -> Int {
        batteryPercentages.reduce(0) { threshold, power in
            threshold + (power > threshold ? 1 : 0)
        }
    }
}
```
