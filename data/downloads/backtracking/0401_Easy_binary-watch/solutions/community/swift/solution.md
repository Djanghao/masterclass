# Swift Solution with illustration

**Author:** windsuzu
**Votes:** 4
**Link:** [https://leetcode.com/problems/binary-watch/solutions/88472/](https://leetcode.com/problems/binary-watch/solutions/88472/)

---

```
func readBinaryWatch(_ num: Int) -> [String] {
        var res = [String]()

        func findLEDs(_ h: Int, _ m: Int) -> Int {
            let hc = Array(String(h, radix: 2).characters).filter { $0 == "1" }.count
            let mc = Array(String(m, radix: 2).characters).filter { $0 == "1" }.count
            return hc + mc
        }

        for h in 0...11 {
            for m in 0...59 {
                if findLEDs(h, m) == num {
                    res.append(String(format: "%d:%02d", h, m))
                }
            }
        }

        return res
    }
```
![](https://windsuzu.github.io/leetcode-401/binary_watch.gif)