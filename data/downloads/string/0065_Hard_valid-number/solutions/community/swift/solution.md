# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 11
**Link:** [https://leetcode.com/problems/valid-number/solutions/1915679/](https://leetcode.com/problems/valid-number/solutions/1915679/)

---

```
class Solution {
    func isNumber(_ s: String) -> Bool {
        let chs = chars(s)
        guard chs.count > 0 else { return false }
        let components = splitByE(chs)
        
        if components.count > 2 { return false }
        if components.count == 2 && (components[0].count == 0 || components[1].count == 0) { return false }
        if components.count == 2 { return isValidComponent0(components[0]) && isValidComponent1(components[1]) }
        if components.count == 1 { return isValidComponent0(components[0]) }

        return true
    }

    func isValidComponent0(_ chs: [Character]) -> Bool{
        let nums: [Character] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        var dotCount = 0
        
        for (i, c) in chs.enumerated() {
            if c == "." {
                var hasNumberBefore = false
                var hasNumberAfter = false
                
                dotCount += 1
                if i > 0 { hasNumberBefore = nums.contains(chs[i - 1]) }
                if i < chs.count - 1 { hasNumberAfter = nums.contains(chs[i + 1]) }
                if (hasNumberBefore || hasNumberAfter) == false { return false }
            }
            
            if i == 0 {
                if c == "+" || c == "-" {
                    var hasNumberAfter = false
                    if chs.count > 1 { hasNumberAfter = nums.contains(chs[1]) || chs[1] == "." }
                    if hasNumberAfter == false { return false }
                }
            } else {
                if c == "+" || c == "-" { return false }
            }
        }
        
        if dotCount > 1 { return false }
        return true
    }

    
    func isValidComponent1(_ chs: [Character]) -> Bool{
        let nums: [Character] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        
        for (i, c) in chs.enumerated() {
            if i == 0 {
                if c == "." { return false }
                if c == "+" || c == "-" {
                    var hasNumberAfter = false
                    if chs.count > 1 { hasNumberAfter = nums.contains(chs[1]) }
                    if hasNumberAfter == false { return false }
                }
            } else {
                if c == "+" || c == "-" || c == "." { return false }
            }
        }
        
        return true
    }

    
    func splitByE(_ chs: [Character]) -> [[Character]] {
        var res: [[Character]] = []
        var tmp: [Character] = []
        
        for c in chs {
            if c == "e" || c == "E" {
                res.append(tmp)
                tmp = []
            
            } else {
                tmp.append(c)
            }
        }
        
        res.append(tmp)
        return res
    }

    
    func chars(_ s: String) -> [Character] {
        let validChars: [Character] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "e", "E", "+", "-", "."]
        var chs: [Character] = []
        
        for c in s {
            chs.append(c)
            
            if validChars.contains(c) == false {
                chs = []
                break
            }
        }
        
        return chs
    }
    
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.