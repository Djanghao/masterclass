# Swift💯FP

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5980034/](https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen/solutions/5980034/)

---

**Functional Programming Style (accepted answer)**
```
class Solution {
    func stringSequence(_ target: String) -> [String] {
        target.utf8.reduce(into: [String]()) { result, key in 
            let ASCII_a = Character("a").asciiValue!
            let prev = result.last ?? ""
            result += (ASCII_a ... key).map { i in prev + String(UnicodeScalar(i)) }
        }
    }
}
```

**Rewritten as terse One-Liner (accepted answer)**
```
class Solution {
  func stringSequence(_ t: String) -> [String] {
    t.utf8.reduce([""]){r,k in r+(97...k).map{r.last!+"\\(UnicodeScalar($0))"}}.filter{$0>""}
  }
}
```