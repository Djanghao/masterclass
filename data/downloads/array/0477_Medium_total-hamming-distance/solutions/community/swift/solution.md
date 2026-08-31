# Swift solution

**Author:** cl0ud_runner
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/96241/](https://leetcode.com/problems/total-hamming-distance/solutions/96241/)

---

```
class Solution {
    func totalHammingDistance(_ nums: [Int]) -> Int {
        let n = nums.count
        var result = 0
        
        for i in 0..<32 {
            var bitCount = 0
            for j in 0..<n {
                bitCount += (nums[j] >> i) & 1
            }
            result += bitCount * (n - bitCount)
        }
        
        return result
    }
}
```