# Swift | One-Liner

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4797013/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4797013/)

---

**One-Liner (accepted answer)**
```
class Solution {
    func hasTrailingZeros(_ nums: [Int]) -> Bool {
        nums.lazy.filter{$0&1<1}.prefix(2).count == 2
    }
}
```

**Terse form (slower):**
```
class Solution {
    func hasTrailingZeros(_ n: [Int]) -> Bool {
        n.filter{$0&1<1}.count>1
    }
}
```
---

**ALTERNATE APPROACH**

**One-Liner (accepted answer)**
```
class Solution {
    func hasTrailingZeros(_ nums: [Int]) -> Bool {
        nums[((nums.firstIndex{$0&1<1} ?? nums.count-2)+1)...].firstIndex{$0&1<1} != nil
    }
}
```