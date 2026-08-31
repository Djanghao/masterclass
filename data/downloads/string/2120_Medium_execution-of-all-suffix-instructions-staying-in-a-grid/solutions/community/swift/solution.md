# ✅ Beats 100%. Without swift sugar

**Author:** hortondima
**Votes:** 0
**Link:** [https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/4543685/](https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/solutions/4543685/)

---

# Intuition
As Leetcode shows us in example. Move from left to right



# Code
```
class Solution {
    func executeInstructions(_ n: Int, _ startPos: [Int], _ s: String) -> [Int] {
        var ss = Array(s)
        var ret = [Int]()
        
        while !ss.isEmpty {
            var y = startPos[0]
            var x = startPos[1]
            var move = 0
            for i in ss {
                if i == "D" {
                    if y + 1 >= n {
                        break
                    }
                    y += 1
                    move += 1
                }
                if i == "U" {
                    if y - 1 < 0 {
                        break
                    }
                    y -= 1
                    move += 1
                }
                if i == "L" {
                    if x - 1 < 0 {
                        break
                    }
                    x -= 1
                    move += 1
                }
                if i == "R" {
                    if x + 1 >= n {
                        break
                    }
                    x += 1
                    move += 1
                }
            }
            ret.append(move)
            ss.removeFirst()
        }

        
        return ret
    }
}
```