# [Swift] 1-Liner 100% faster with O(1)

**Author:** evkobak
**Votes:** 2
**Link:** [https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/1633217/](https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/solutions/1633217/)

---

```
class Solution {
    func twoEggDrop(_ n: Int) -> Int {
        Int(round(sqrt(Double(n*2))))
    }
}
```

Just tried to find some logic and correlation. I belived what key is "sqrt".
And found what sqrt(200) = 14.142... Int(14) is correct answer for 100
sqrt(400) = 20 is correct answer for 200
But for 500 sqrt(1000) = 31.622 corret answer is 32 not 31!
So we need a "round" function used this default rule:

```
var x = 5.2
x.round() // x == 5.0

var y = 5.5
y.round() // y == 6.0
```