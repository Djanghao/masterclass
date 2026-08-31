# Swift simple solution

**Author:** rdizblue
**Votes:** 17
**Link:** [https://leetcode.com/problems/top-k-frequent-words/solutions/137674/](https://leetcode.com/problems/top-k-frequent-words/solutions/137674/)

---

```
class Solution {
    func topKFrequent(_ words: [String], _ k: Int) -> [String] {
        var frequency = [String: Int]()
        
        for word in words {
            frequency[word] = (frequency[word] ?? 0) + 1
        }
        return Array(frequency.keys.sorted{
            let freq1 = frequency[$0] ?? 0
            let freq2 = frequency[$1] ?? 0
            if freq1 == freq2 {
                return $0 < $1
            } else {
                return freq1 > freq2
            }
        }.prefix(k))
    }
}
```