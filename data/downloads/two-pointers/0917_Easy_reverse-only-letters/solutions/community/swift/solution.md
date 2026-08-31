# Swift 4ms, 96.43% faster

**Author:** flute0106
**Votes:** 3
**Link:** [https://leetcode.com/problems/reverse-only-letters/solutions/650166/](https://leetcode.com/problems/reverse-only-letters/solutions/650166/)

---

```
    func reverseOnlyLetters(_ S: String) -> String {        
        let arr = Array(S)
        var letters = arr.filter({ $0.isLetter })        
        var result = [Character]()        
        for s in arr {
            result.append(s.isLetter ? letters.removeLast() : s)            
        }
        return String(result)
    }
```