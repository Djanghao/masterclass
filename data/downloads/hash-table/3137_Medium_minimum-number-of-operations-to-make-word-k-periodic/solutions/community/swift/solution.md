# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5442466/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5442466/)

---


```
class Solution {
    func minimumOperationsToMakeKPeriodic(_ word: String, _ k: Int) -> Int {
        let n = word.count
        let wordArray = Array(word)
        var segmentFrequency = [String: Int]()
        
        // Count frequency of each segment of length k
        for i in stride(from: 0, to: n, by: k) {
            let segment = String(wordArray[i..<min(i+k, n)])
            segmentFrequency[segment, default: 0] += 1
        }
        
        // Find the segment with the maximum frequency
        let maxFrequency = segmentFrequency.values.max() ?? 0
        
        // Total number of segments
        let totalSegments = n / k
        
        // Calculate the minimum operations needed
        let operations = totalSegments - maxFrequency
        
        return operations
    }
}
```