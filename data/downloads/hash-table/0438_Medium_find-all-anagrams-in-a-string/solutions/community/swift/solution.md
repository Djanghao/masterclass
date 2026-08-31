# Swift - Dictionary

**Author:** pitt500
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/794532/](https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/794532/)

---

```
class Solution {
    func findAnagrams(_ s: String, _ p: String) -> [Int] {
        
        var dictP = [Character: Int]()
        var dictS = [Character: Int]()
        var result: [Int] = []
        let s = Array(s)
        let pCount = p.count
        
        for char in p {
            dictP[char, default: 0] += 1
        }
        
        for i in 0..<s.count { 
            
            //Remove first char in the dictionary
            if i >= pCount {
                let char = s[i - pCount]
                dictS[char] = dictS[char]! > 1 ? dictS[char]! - 1 : nil
            }
            
            //Find a window of pCount letters to compare
            dictS[s[i], default: 0] += 1
            
            if dictS == dictP {
                result.append(i - pCount + 1)
            } 
        }
        
        return result
    }
}
```