# Swift very easy and concise solution

**Author:** blest
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-nesting/solutions/3922826/](https://leetcode.com/problems/array-nesting/solutions/3922826/)

---

```
class Solution {
    func arrayNesting(_ nums: [Int]) -> Int {
        let n = nums.count
        var depth = [Int](repeating: 0, count: n)

        for var start in 0..<n {
            var d = 1
            while depth[start] == 0 {
                depth[start] = d
                start = nums[start]
                d += 1
            }
        }
        return depth.max()!
    }
}
```