# Swift  beats 100% time and space

**Author:** AdamSmsher
**Votes:** 0
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/2555594/](https://leetcode.com/problems/output-contest-matches/solutions/2555594/)

---

```
class Solution {
    func findContestMatch(_ n: Int) -> String {
        var n = n
        var arr = [String](repeating: "", count: n)
        for i in 0..<arr.count {
            arr[i] = String(i+1)
        }
        while n > 1 {
            for i in 0..<n where i < n {
                arr[i] = "(" + arr[i] + "," + arr[n - 1 - i] + ")"
            } 
            n /= 2
        }
        return arr[0]
    }
}

```