# Swift💯

**Author:** OrchidHunter
**Votes:** 5
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3475377/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3475377/)

---

**Good Interview Answer (accepted answer)**

This is good interview answer because:
1) It is simple, clear and concise. (One pass through the array, not a fancy sort + binary search, etc..)
2) Doesn't use Multiplication (in theory faster)
3) Doesn't use `.reduce()`, so can short-circuit at the first zero (faster).

Note: Problem doesn't state what to return for an empty array. Given constraints state that the array always has more than one element, but this would be a good followup with your interviewer to ask to remove the constraint and handle accordingly (return zero, throw, etc).

```
class Solution {
    func arraySign(_ nums: [Int]) -> Int {
        var result = 1
        for num in nums where num < 1 {
            guard num != 0 else { return 0 }
            result = -result
        }
        return result
    }
}
```

---

**One-Liner, terse (accepted answer)**
Not for interviews.
```
class Solution {
    func arraySign(_ nums: [Int]) -> Int {
        nums.lazy.map{$0.signum()}.reduce(1,*)
    }
}
```