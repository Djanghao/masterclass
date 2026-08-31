# One line Swift Solution using Gauss Formula (Math)

**Author:** Kravnik
**Votes:** 1
**Link:** [https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/1097998/](https://leetcode.com/problems/missing-number-in-arithmetic-progression/solutions/1097998/)

---

```
class Solution {
    func missingNumber(_ arr: [Int]) -> Int {
        (arr.first! + arr.last!)*(arr.count+1)/2 - arr.reduce(0, +)
    }
}
```
Gauss Formula is sum of first and last members of arithmetic progression multiplied by number of members (arr.count + 1 (missing)) and divided by 2.
```
arr.reduce(0, +)
```
Calculates the sum of all members of an array