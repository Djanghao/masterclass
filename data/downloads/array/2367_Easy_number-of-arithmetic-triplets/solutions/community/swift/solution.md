# Swift Easy Solution

**Author:** AidaMoldaly
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/3051327/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/3051327/)

---


# Code
```
class Solution {
    func arithmeticTriplets(_ nums: [Int], _ diff: Int) -> Int {
        var uniqueNumber: Int = 0

        nums.forEach{
            if nums.contains($0 + diff), nums.contains($0 + 2 * diff) {
                uniqueNumber += 1
            }
        }
        return uniqueNumber
    }
}
```