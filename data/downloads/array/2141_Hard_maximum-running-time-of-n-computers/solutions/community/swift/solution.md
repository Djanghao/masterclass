# Swift Solution

**Author:** FatMonkeyPi
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/1693238/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/1693238/)

---

```
    func maxRunTime(_ n: Int, _ batteries: [Int]) -> Int {
        let b = batteries.sorted(by: >)
        var t = batteries.reduce(0, +), i = 0
        while b[i] > t / (n - i) {
            t -= b[i]
            i += 1
        }
        return t / (n - i)
    }
```