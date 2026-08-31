# Swift | Count Unique Sets

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/3376582/](https://leetcode.com/problems/optimal-partition-of-string/solutions/3376582/)

---

**Count Unique Sets (accepted answer)**
```
class Solution {
    func partitionString(_ s: String) -> Int {
        var set = Set<Character>()
        var result = 1
        
        for ch in s where !set.insert(ch).inserted {
            set = [ch]
            result += 1
        }
        
        return result
    }
}
```