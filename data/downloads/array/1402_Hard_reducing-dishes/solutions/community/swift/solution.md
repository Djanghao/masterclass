# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 2
**Link:** [https://leetcode.com/problems/reducing-dishes/solutions/3356572/](https://leetcode.com/problems/reducing-dishes/solutions/3356572/)

---

# Intuition
Sort array in decreasing order.
Iterate through elements.

Keep a prefix sum inside `elementsSum`.
Add its value to the `sum` variable.
Stop when `elementsSum` is negative.

# Performance
5ms, 13.8MB

# Complexity
- Time complexity: O(n * log(n))

- Space complexity: O(n) \u2014 since we are creating a sorted copy of input array (thanks @dfomin)

# Code
```
class Solution {
    func maxSatisfaction(_ satisfaction: [Int]) -> Int {
        let sorted = satisfaction.sorted(by: >)

        var sum = 0
        var elementsSum = 0
        for element in sorted {
            elementsSum += element
            guard elementsSum > 0 else { return sum }

            sum += elementsSum
        }

        return sum
    }
}
```
---

If my LeetCode solution was helpful, kindly upvote it to support my contributions and aid others in their coding journey! \uD83D\uDE0A\uD83D\uDC4D