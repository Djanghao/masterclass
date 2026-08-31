# ✅ [Solution] Swift: Permutations

**Author:** AsahiOcean
**Votes:** 16
**Link:** [https://leetcode.com/problems/permutations/solutions/1700569/](https://leetcode.com/problems/permutations/solutions/1700569/)

---

```swift
class Solution {
    func permute(_ nums: [Int]) -> [[Int]] {
        let len = nums.count
        guard len >= 1 && len <= 6 else { return [] }
        
        var permutes = [[Int]](repeating: [], count: 1)
        
        for n in nums where n >= -10 && n <= 10 {
            var values: [[Int]] = []
            for var arr in permutes {
                for i in 0..<arr.count {
                    var temp = arr
                    temp.insert(n, at: i)
                    values.append(temp)
                }
                arr.append(n)
                values.append(arr)
            }
            permutes = values
        }
        
        return permutes
    }
}
```