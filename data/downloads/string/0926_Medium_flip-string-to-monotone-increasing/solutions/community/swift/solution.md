# [Swift] Readable Solution (Prefix Sum)

**Author:** Legonaftik
**Votes:** 2
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/1400102/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/1400102/)

---

```
class Solution {
    func minFlipsMonoIncr(_ s: String) -> Int {
            let chars = Array(s)
            var prefixSums: [Int] = Array(repeating: 0, count: chars.count + 1)
            for i in chars.indices {
                prefixSums[i+1] = prefixSums[i] + (chars[i] == "1" ? 1 : 0)
            }
            var answer = Int.max
            for (i, prefixSum) in prefixSums.enumerated() {
                let onesBefore = prefixSum
                let zerosAfter = (chars.count - i) - (prefixSums.last! - prefixSum)
                answer = min(answer, onesBefore + zerosAfter)
            }
            return answer
    }
}
```