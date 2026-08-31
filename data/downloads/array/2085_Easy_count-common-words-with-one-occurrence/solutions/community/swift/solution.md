# 45 ms Beats 100%

**Author:** user9878Nx
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5606786/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/5606786/)

---

# Code
```
class Solution {
    func countWords(_ words1: [String], _ words2: [String]) -> Int {
        var freq = [String:Int]()
        
        for string in words1 {
            freq[string, default: 0] += 1
        }
        
        freq = freq.filter { $0.value == 1 }
        
        for string in words2 {
            if let count = freq[string] {
                freq[string] = count + 1
            }
        }
        
        freq = freq.filter { $0.value == 2 }
        
        return freq.values.count
    }
}
```