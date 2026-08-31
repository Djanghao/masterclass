# Division by 3 - beats 100% Swift

**Author:** rebeccamello
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/5736122/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/5736122/)

---

# Approach
Divide the number by 3 and check if there is a remainder; if there is, it means the number is not divisible by 3 and should return the array [].
On the other hand, if it is divisible, take the result of the division and add it to the array
# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func sumOfThree(_ num: Int) -> [Int] {
        if num % 3 != 0 {
            return []
        }

        var division = num / 3
        return [division-1, division, division+1]
    }
}
```