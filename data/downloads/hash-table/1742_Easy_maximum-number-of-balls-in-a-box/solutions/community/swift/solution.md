# Swift Solution

**Author:** FatMonkeyPi
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1043142/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1043142/)

---

```
    func countBalls(_ lowLimit: Int, _ highLimit: Int) -> Int {
        var box = [Int: Int]()
        for i in lowLimit...highLimit {
            var temp = i, n = 0
            while temp > 0 {
                n += temp % 10
                temp /= 10
            }
            box[n, default: 0] += 1
        }
        return box.values.max()!
    }
```