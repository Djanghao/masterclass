# Swift 2 line O(n)

**Author:** lintsu
**Votes:** 14
**Link:** [https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/656710/](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/solutions/656710/)

---

```swift
class Solution {
    func kidsWithCandies(_ candies: [Int], _ extraCandies: Int) -> [Bool] {
        let requiredCount = (candies.max() ?? 0) - extraCandies

        return candies.map({ $0 >= requiredCount })
    }
}
```