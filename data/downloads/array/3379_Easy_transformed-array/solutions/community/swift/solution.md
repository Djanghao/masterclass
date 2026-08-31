# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/transformed-array/solutions/6137644/](https://leetcode.com/problems/transformed-array/solutions/6137644/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
    func constructTransformedArray(_ nums: [Int]) -> [Int] {
        zip(0...,nums).map{[k=nums.count] i,n in nums[(i + n%k + k) % k]}
    }
}
```