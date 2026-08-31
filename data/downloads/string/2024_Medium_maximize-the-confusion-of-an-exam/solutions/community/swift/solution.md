# Simple Swift Solution

**Author:** mahmoudsmgl
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3733943/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/3733943/)

---

# Code
```
class Solution {
        func maxConsecutiveAnswers(_ answerKey: String, _ k: Int) -> Int {
            var ar = answerKey.map { $0 }
            var mx = 0
            
            var t = 0
            var f = 0
            
            var l = 0
            var r = 0
            
            while l < ar.count && r < ar.count {
                //print("l: \\(l), r: \\(r), mx: \\(mx)")
                
                if ar[r] == "F" {
                    f += 1
                } else if ar[r] == "T" {
                    t += 1
                }
                
                if min(t, f) <= k {
                    mx = max(mx, t + f)
                    r += 1
                } else {
                    if ar[l] == "F" {
                        f -= 1
                    } else if ar[l] == "T" {
                        t -= 1
                    }
                    l += 1
                    r += 1
                }
                
            }
            
            
            return mx
        }
    }
```