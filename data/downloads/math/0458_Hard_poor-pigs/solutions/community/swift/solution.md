# Swift

**Author:** prashant1207-
**Votes:** -1
**Link:** [https://leetcode.com/problems/poor-pigs/solutions/597236/](https://leetcode.com/problems/poor-pigs/solutions/597236/)

---

```
class Solution {
    func poorPigs(_ buckets: Int, _ minutesToDie: Int, _ minutesToTest: Int) -> Int {
        let states = minutesToTest / minutesToDie + 1
        let _buckets = log(Double(buckets))
        let _states = log(Double(states))
        return Int(ceil(_buckets / _states))
    }
}
```