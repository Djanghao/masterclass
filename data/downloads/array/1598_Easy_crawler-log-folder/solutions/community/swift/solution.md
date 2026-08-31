# Swift

**Author:** OrchidHunter
**Votes:** 4
**Link:** [https://leetcode.com/problems/crawler-log-folder/solutions/5450499/](https://leetcode.com/problems/crawler-log-folder/solutions/5450499/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func minOperations(_ logs: [String]) -> Int {
        logs.reduce(0){max($0+(["../":-1,"./":0][$1] ?? 1),0)}
    }
}
```

**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func minOperations(_ logs: [String]) -> Int {
        logs.reduce(0) { sum, log in
            let delta = ["../":-1,"./":0][log, default:1] // either up(../), same(./) or down
            return max(sum + delta, 0) // prevent from going higher that top level
		}
    }
}
```