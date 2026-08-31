# Swift brute force

**Author:** AndreevIVdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/2757282/](https://leetcode.com/problems/odd-string-difference/solutions/2757282/)

---

# Code
```
class Solution {
    func oddString(_ words: [String]) -> String {
        let words = words.map{ Array($0) }
        var diffs: [[Int]: [String]] = [:]
        
        for word in words {
            var cur: [Int] = []
            for i in 1..<word.count {
                cur.append(Int(word[i].asciiValue!) - Int(word[i - 1].asciiValue!))
            }
            diffs[cur, default: []].append(String(word))
        }
        
        return diffs.first(where: { $0.value.count == 1 })!.value.first!
    }
}
```