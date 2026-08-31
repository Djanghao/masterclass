# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/3369334/](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/solutions/3369334/)

---

```
class Solution {
    func maxSumTwoNoOverlap(_ nums: [Int], _ firstLen: Int, _ secondLen: Int) -> Int {
        
        let s = nums.reduce(into: [0]) { $0.append($0.last! + $1) }
        var res = 0

        func go(_ l1: Int, _ l2: Int) {
            for i in l1..<(s.count - l2) {
                let s1 = s[i] - s[i - l1]
                for j in (i + l2)..<s.count {
                    let s2 = s[j] - s[j - l2]
                    res = max(res, s1 + s2)
                }
            }
        }

        go(firstLen, secondLen)
        go(secondLen, firstLen)

        return res
    }
}
```