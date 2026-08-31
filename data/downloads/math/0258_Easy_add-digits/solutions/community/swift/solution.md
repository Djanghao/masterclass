# O(1) Swift solution: it's just a mathematical program

**Author:** WendellXY
**Votes:** 5
**Link:** [https://leetcode.com/problems/add-digits/solutions/313722/](https://leetcode.com/problems/add-digits/solutions/313722/)

---

From **Digital root** in Number Theory: Digital Root is always equal to a number mod 9, if the number is not multiple of 9
```swift
class Solution {
    func addDigits(_ num: Int) -> Int {
        return num < 10 ? num : (num % 9 == 0 ? 9 : num % 9)
    }
}
```