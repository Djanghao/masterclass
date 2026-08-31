# Swift | O(n)

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4974852/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4974852/)

---

**Sliding Window (accepted answer)**
with idiomatic String indexing \uD83D\uDE44
```
class Solution {
    func maximumLengthSubstring(_ s: String) -> Int {
        var hashmap = [Character:Int]()
        var result = 0
        var left = s.startIndex
        for right in s.indices {
            while hashmap[s[right]] == 2 {
                hashmap[s[left]]! -= 1
                left = s.index(after: left)
            } 
            hashmap[s[right], default:0] += 1
            result = max(result, s.distance(from:left, to:right) + 1) 
        }
        return result
    }
}
```