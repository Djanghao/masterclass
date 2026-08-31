# [Swift] Ascii

**Author:** jayyaj1224
**Votes:** 1
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/3363754/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/3363754/)

---


```
class Solution { // 65 97
    func greatestLetter(_ s: String) -> String {
        var dic = [String:Int]()
        var greatest: String = ""

        for c in s { 
            let char = c.lowercased()
            let asc = Int(c.asciiValue!)
            if let prevAsc = dic[char] { 
                if abs(prevAsc - asc) == 32 {
                    greatest = max(greatest, c.uppercased())
                }
            } else { 
                dic[char] = asc
            }
        }
        return greatest
    }
}
```