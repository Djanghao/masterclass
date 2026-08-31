# ✅ Fastest Easy to understand Solution

**Author:** MiroshnichRA
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/6123544/](https://leetcode.com/problems/count-good-meals/solutions/6123544/)

---



# Code
```swift []
class Solution {
    func countPairs(_ nums: [Int]) -> Int {
        var res = 0
        var mod = 1000000007
        var map = [Int: Int]()

        for num in nums {
            var pow = 1

            for i in 0..<22 {
                if let count = map[pow - num] {
                    res += count
                    res %= mod
                }
                pow *= 2
            }

            map[num, default: 0] += 1
        }

        return res
    }
}
```