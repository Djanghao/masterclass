# Swift | Stack & Greedy

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/4091049/](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/solutions/4091049/)

---

**Stack (accepted answer)**
```
class Solution {
    func smallestSubsequence(_ s: String) -> String {
        var stack = [Character]()
        var seen = Set(stack)
        let last = Dictionary(zip(s,0...)) {$1}
        
        for (i,c) in s.enumerated() where !seen.contains(c) {
            while let top = stack.last, c < top, last[top]! > i {
                stack.popLast()
                seen.remove(top)
            }
            stack.append(c)
            seen.insert(c)
        }
        return String(stack)
    }
}
```

---

**Greedy (accepted answer)**
```
class Solution {
    func smallestSubsequence(_ s: String) -> String {
        var freq = Dictionary(s.map{($0,1)}, uniquingKeysWith: +)
        var smallest = (0,Character("~"))
        for (i,c) in s.enumerated() {
            if c < smallest.1 {smallest = (i,c)}
            freq[c]! -= 1            
            guard freq[c]! > 0 else { break }
        }
        
        return s.isEmpty ? "" : String(smallest.1) + smallestSubsequence(String(s.suffix(s.count-smallest.0-1).filter {$0 != smallest.1}))
    }
}
```