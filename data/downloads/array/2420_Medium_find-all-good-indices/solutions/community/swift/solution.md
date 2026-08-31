# Swift dp solution O(n)

**Author:** AndreevIVdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/2622796/](https://leetcode.com/problems/find-all-good-indices/solutions/2622796/)

---

```
class Solution {
    func goodIndices(_ nums: [Int], _ k: Int) -> [Int] {
        var dpl: [Int] = .init(repeating: 1, count: nums.count)
        var dpr: [Int] = .init(repeating: 1, count: nums.count)
        var res: [Int] = []
        
        for i in 1..<nums.count - k {
            if nums[i] <= nums[i - 1] {
                dpl[i] = dpl[i - 1] + 1
            }
        }
        
        for i in (k..<nums.count - 1).reversed() {
            if nums[i] <= nums[i + 1] {
                dpr[i] = dpr[i + 1] + 1
            }
        }
        
        for i in k..<nums.count - k {
            if dpr[i + 1] >= k && dpl[i - 1] >= k {
                res.append(i)
            }
        }
        
        return res
    }
}
```