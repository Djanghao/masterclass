# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/1918853/](https://leetcode.com/problems/minimum-window-substring/solutions/1918853/)

---

```
class Solution {
    func minWindow(_ s: String, _ t: String) -> String {
        guard s.count >= t.count else { return "" }
        
        let sChars = Array(s)
        let tChars = Array(t)
        
        let indexs = validIndexs(sChars, tChars)
        guard s.count >= t.count else { return "" }
        
        let target = targetChars(tChars)
        let firstMatchIndex = firstMatch(sChars, indexs, target) 
        var start = firstMatchIndex.0
        var end = firstMatchIndex.1
        
        if end == -1 {
            return ""
        }
        
        var tmp: [Character: Int] = [:]
        for i in indexs {
            if i < indexs[start] {
                continue
            }
            
            if i > indexs[end] {
                break
            }
            
            let c = sChars[i]
            if let _ = tmp[c] {
                tmp[c]! += 1 
            
            } else {
                tmp[c] = 1
            }
        }
        
        var minLength = indexs[end] - indexs[start]
        var minStart = start
        
        while end < indexs.count {
            //  start +1
            let c = sChars[indexs[start]]
            
            if tmp[c]! > target[c]! {
                start += 1
                tmp[c]! -= 1
                let currentLength = indexs[end] - indexs[start]
                minLength = minLength < currentLength ? minLength : currentLength
                minStart = minLength < currentLength ? minStart : start
                continue
            
            } else {
                start += 1
                tmp[c]! -= 1
                end += 1
                while end < indexs.count {
                    let e = sChars[indexs[end]]
                    tmp[e]! += 1
                    if e == c {
                        let currentLength = indexs[end] - indexs[start]
                        minLength = minLength < currentLength ? minLength : currentLength
                        minStart = minLength < currentLength ? minStart : start
                        break
                    }
                    end += 1
                }  
            }
        }
        
        return Array(sChars[indexs[minStart]...indexs[minStart] + minLength]).join("")
    }

    
    func firstMatch(_ s: [Character], _ indexs: [Int], _ target: [Character: Int]) -> (Int, Int) {
        var target = target
        var tmp = -1
        
        func reachTarget() -> Bool {
            var res = true
            for (_, value) in target {
                if value > 0 {
                    res = false
                    break
                }
            }
            return res
        }
        
        for (i, index) in indexs.enumerated() {
            target[s[index]]! -= 1
            if reachTarget() {
                tmp = i
                break
            }
        }
        
        return (0, tmp)
    }
    

    func validIndexs(_ s: [Character], _ t: [Character]) -> [Int] {
        var res: [Int] = []
        
        for (i, c) in s.enumerated() {
            if t.contains(c) { res.append(i) }
        }
        
        return res
    }

    
    func targetChars(_ t: [Character]) -> [Character: Int] {
        var map: [Character: Int] = [:]
        
        for c in t {
            if let _ = map[c] { map[c]! += 1 } else { map[c] = 1 }
        }
        
        return map
    }

}


extension Array {
    func join(_ s: String) -> String {
        guard self.count > 0 else { return "" }
        if self.count == 1 { return "\\(self[0])" }
        var string = ""

        for i in 0..<self.count - 1 { string += "\\(self[i])\\(s)" }
        
        string += "\\(self[self.count - 1])"
        return string
    }
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.