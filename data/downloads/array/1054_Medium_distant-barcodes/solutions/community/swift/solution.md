# Swift

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/distant-barcodes/solutions/5363291/](https://leetcode.com/problems/distant-barcodes/solutions/5363291/)

---

# Code
```
class Solution {
    func rearrangeBarcodes(_ barcodes: [Int]) -> [Int] {
        let n = barcodes.count

        // Sort barcodes by decreasing frequency
        let freqs = barcodes.reduce(into: [:]) { $0[$1, default: 0] += 1}
        let freqsSorted = freqs.sorted { $0.1 > $1.1 }
        let sorted = freqsSorted.flatMap { Array(repeating: $0.0, count: $0.1) }
        
        // Place the sorted barcodes in the array every 2 steps.
        var res = Array(repeating: 0, count: n)
        var i = 0
        for j in stride(from: 0, to: n, by: 2) {
            res[j] = sorted[i]
            i += 1
        }
        for j in stride(from: 1, to: n, by: 2) {
            res[j] = sorted[i]
            i += 1
        }
        return res
    }
}
```