# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1445427/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1445427/)

---

Swift solution
```
class Solution {
    func firstDayBeenInAllRooms(_ nextVisit: [Int]) -> Int {
        let n = nextVisit.count, div = 1_000_000_007
        var firstDays = [Int](repeating: 0, count: n), returnDays = [Int](repeating: 0, count: n)
        for i in 0..<(n - 1) {
            let returnDay = (1 + 2 * firstDays[i] - firstDays[nextVisit[i]]) % div
            returnDays[i] = returnDay >= 0 ? returnDay : returnDay + div
            firstDays[i + 1] = 1 + returnDays[i]
        }
        return firstDays[n - 1] % div
    }
}
```