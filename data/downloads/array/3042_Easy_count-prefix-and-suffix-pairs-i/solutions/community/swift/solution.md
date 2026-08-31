# Runtime beats 100%, Space 50%

**Author:** zoHouse
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5448221/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5448221/)

---


# Code
```
class Solution {
    func countPrefixSuffixPairs(_ words: [String]) -> Int {
        var count = 0
        
        for i in 0..<words.count-1 {
            let word = words[i]
            for str in words[(i+1)...] {
                if isPrefixSuffix(a: word, b: str) {
                    count += 1
                }
            }
        }
        
        func isPrefixSuffix(a: String, b: String) -> Bool {
            return (b.hasPrefix(a) && b.hasSuffix(a)) ? true : false
        }
        
        return count
    }
}
```