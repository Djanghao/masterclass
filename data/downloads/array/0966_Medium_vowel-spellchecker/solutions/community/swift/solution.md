# Swift solution, easy to understand

**Author:** ZhenjiangLiu
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/1133483/](https://leetcode.com/problems/vowel-spellchecker/solutions/1133483/)

---

```
class Solution {
    let vowels: [Character] = ["a", "e", "i", "o", "u"]
    
    func spellchecker(_ wordlist: [String], _ queries: [String]) -> [String] {
        let exact = Set(wordlist)
        var cap = [String: String]() // key for lowercase, value for orginal value
        var mistake = [String: String]() // key for lowercase with *, value for original
        
        for word in wordlist {
            let lower = word.lowercased()
            if cap[lower] == nil { // trick is avoid override
                cap[lower] = word
            }
            
            let k = replace(word)
            if mistake[k] == nil {
                mistake[k] = word
            }
        }
        
        let ans = queries.map { (q) -> String in
            if exact.contains(q) {
                return q
            } else if let capital = cap[q.lowercased()] {
                return capital
            } else if let m = mistake[replace(q)] {
                return m
            } else {
                return ""
            }
        }
        return ans
    }
    
    private func replace(_ word: String) -> String {
        let w = word.lowercased()
        
        let arr: [Character] = Array(w).map { (c) -> Character in
            if vowels.contains(c) {
                return "*"
            } else {
                return c
            }
        }
        return String(arr)
    }
}
```