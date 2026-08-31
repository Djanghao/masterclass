# Clean Swift solution with explanation

**Author:** psethi
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/1826365/](https://leetcode.com/problems/valid-word-abbreviation/solutions/1826365/)

---


```
class Solution {
    func validWordAbbreviation(_ word: String, _ abbr: String) -> Bool {
        
        var i = 0
        var j = 0
        var word = Array(word)
        var abbr = Array(abbr)
        
        while (i<word.count && j<abbr.count) {
			// if not number, just compare character and move to next index
            if !abbr[j].isNumber {
                if word[i] != abbr[j] {
                    return false
                } 
                i += 1
                j += 1
            } else {
				// Initially check if starting with 0, and after that keep moving j while the value is a number and appen to a new variable
                var num = ""
                if abbr[j] == "0" {
                    return false
                }
            
                while j < abbr.count && abbr[j].isNumber {
                    num += String(abbr[j])
                    j += 1
                }
				// Move i forward by the numbner extracted from abbr 
                i += Int(num)!
            }
        }
        
        return i==word.count && j==abbr.count
    }
}
```