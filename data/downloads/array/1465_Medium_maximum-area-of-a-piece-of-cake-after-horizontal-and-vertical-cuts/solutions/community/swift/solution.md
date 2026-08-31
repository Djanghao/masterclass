# Swift Solution

**Author:** leetsaber
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2228008/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/2228008/)

---

```
class Solution {
    func maxArea(_ h: Int, _ w: Int, _ horizontalCuts: [Int], _ verticalCuts: [Int]) -> Int {
        let largestHChunk = getLargestChunk(horizontalCuts.sorted(), h)
        let largestVChunk = getLargestChunk(verticalCuts.sorted(), w)
        return (largestHChunk * largestVChunk) % 1000000007
    }
    
    private func getLargestChunk(_ cuts: [Int], _ limit: Int) -> Int {
        var largestChunk = Int.min
        var startChunk = 0
        for cut in cuts {
            let chunkSize = cut - startChunk
            largestChunk = max(largestChunk, chunkSize)
            startChunk = cut
        }
        
        largestChunk = max(largestChunk, limit - startChunk)
        return largestChunk
    }
}
```