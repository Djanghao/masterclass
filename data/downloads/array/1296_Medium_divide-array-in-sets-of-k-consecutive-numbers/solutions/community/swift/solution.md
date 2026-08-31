# [Swift] hashmap + greedy solution beats 100%

**Author:** GV1506
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/552597/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/552597/)

---

```
class Solution {
    func isPossibleDivide(_ nums: [Int], _ k: Int) -> Bool {
        let n = nums.count
        guard n % k == 0 else { return false }

        var map = [Int:Int]()
        for num in nums {
            map[num, default: 0] += 1
        }
        
        let keys = map.keys.sorted(by: <)
        
        for num in keys {
            if let count = map[num], count > 0 {
                for i in 1..<k {
                    guard let val = map[num + i] else { return false }
                    map[num + i] = val - count
                }
            }
        }
        
        return true
    }
}
```