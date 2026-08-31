# Easy to understand Swift solution

**Author:** RyshchukDmytro
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5972158/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5972158/)

---

# Code
```swift []
class Solution {
    func numberCount(_ a: Int, _ b: Int) -> Int {
        var count = 0

        for i in a...b {
            let str = String(i)
            if str.count == Set(Array(str)).count {
                count += 1
            }
        }   

        return count
    }
}
```