# Swift Solution

**Author:** danilovdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/3311407/](https://leetcode.com/problems/shortest-completing-word/solutions/3311407/)

---

```
class Solution {
    func shortestCompletingWord(_ licensePlate: String, _ words: [String]) -> String {
        var shortest: Int = Int.max
        var result = ""
        var dict: [Character: Int] = [:]
        for ch in licensePlate.lowercased() { 
            if ch == " " || Int(String(ch)) != nil { continue }
            dict[ch, default: 0] += 1
        }
        for word in words { 
            if let str = compare(dict, word) { 
                if str.count < shortest { 
                    shortest = str.count
                    result = str
                }
            }
        }
        return result
    }
    
    private func compare(_ dict: [Character: Int], _ word: String) -> String? { 
        var dict = dict
        for ch in word { 
            if let count = dict[ch] {
                dict[ch] = count == 1 ? nil : count - 1
            }
        }
        if dict.isEmpty { return word }
        return nil
    }
}
```