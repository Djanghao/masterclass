# [Swift] Simple solution without working with UnicodeScalar

**Author:** blackbirdNG
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1366180/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1366180/)

---

<- Please vote if my solution was helpful to you.
Maybe it's not perfect, but I think it's more readable then working with UnicodeScalar in another solutions.
```
class Solution {
    func replaceDigits(_ s: String) -> String {        
        let latinLetters = Array("abcdefghijklmnopqrstuvwxyz")
        var charArray = Array(s)
        for i in 1..<charArray.count {
            if let intValue = Int(String(charArray[i])) {
                let previousLetter = charArray[i-1]
                for j in 0..<latinLetters.count where latinLetters[j] == previousLetter {
                    charArray[i] = latinLetters[j+intValue] 
                }
            }
        }
        return String(charArray)     
    }
}
```