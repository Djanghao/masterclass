# functional solution

**Author:** ldkars
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4247896/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4247896/)

---



# Code
```
class Solution {
    func sumIndicesWithKSetBits(_ nums: [Int], _ k: Int) -> Int {
        return nums
            .enumerated()
            .compactMap { String($0.offset, radix: 2) }
            .filter { $0.reduce(0) { $1 == "1" ? $0 + 1 : $0 } == k }
            .compactMap { Int($0, radix: 2) }
            .reduce(0) { $0 + nums[$1] }
    }
}
```