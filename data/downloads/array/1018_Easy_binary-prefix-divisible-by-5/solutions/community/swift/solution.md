# java solution | 100% efficient

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/2305618/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solutions/2305618/)

---

```
class Solution {
    func prefixesDivBy5(_ nums: [Int]) -> [Bool] {
        var divisibleByFive = [Bool]()
        var n = 0
        for bit in nums {
            n = (n * 2 + bit) % 10
            divisibleByFive.append(n == 5 || n == 0)
        }
        return divisibleByFive
    }
}
```