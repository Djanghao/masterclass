# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 12
**Link:** [https://leetcode.com/problems/scramble-string/solutions/1921919/](https://leetcode.com/problems/scramble-string/solutions/1921919/)

---

```
class Solution {
    func isScramble(_ s1: String, _ s2: String) -> Bool {
        var dp: [String: Bool] = [:]
        

        func _isScramble(_ chs1: [Character], _ chs2: [Character]) -> Bool {
            let key = String(chs1) + "-" +  String(chs2)
            if let v = dp[key] { return v }            
            if chs1.count == 1 { return chs1[0] == chs2[0] }
            var val = false

            for i in 1..<chs1.count {
                val = val || (_isScramble(Array(chs1[0..<i]), Array(chs2[0..<i])) 
                                && _isScramble(Array(chs1[i..<chs1.count]), Array(chs2[i..<chs2.count])))
                val = val || (_isScramble(Array(chs1[0..<i]), Array(chs2[chs2.count - i..<chs2.count]))
                                && _isScramble(Array(chs1[i..<chs1.count]), Array(chs2[0..<chs2.count-i]))) 
            }
            
            dp[key] = val
            return val
        }
        
        if s1.count != s2.count {
            return false
        } else {
            return _isScramble(Array(s1), Array(s2))
        }
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.