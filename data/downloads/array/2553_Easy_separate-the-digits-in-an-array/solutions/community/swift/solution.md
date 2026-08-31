# One-line solution [Swift]

**Author:** ArtyZenk
**Votes:** 1
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3557609/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3557609/)

---


# Code
```
class Solution {
    func separateDigits(_ nums: [Int]) -> [Int] {
        Array(nums.map { String($0) }.reduce("", +)).compactMap { Int(String($0)) }
    }
}
```