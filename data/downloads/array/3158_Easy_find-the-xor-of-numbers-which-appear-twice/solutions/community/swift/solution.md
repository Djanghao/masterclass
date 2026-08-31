# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/6140985/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/6140985/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func duplicateNumbersXOR(_ nums: [Int]) -> Int {
        var set = Set<Int>()
        var result = 0
        for num in nums where !set.insert(num).inserted {
            result ^= num
        }
        return result
    }
}
```
**One-Liner (accepted answer)**
```
class Solution {
    func duplicateNumbersXOR(_ nums: [Int]) -> Int {
        (nums + Set(nums)).reduce(0,^)
    }
}
```