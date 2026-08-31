# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4996966/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4996966/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func timeRequiredToBuy(_ tickets: [Int], _ k: Int) -> Int {
        var result = 0
        for i in 0 ..< k {
            result += min(tickets[i], tickets[k])
        }
        result += tickets[k]
        for i in k + 1 ..< tickets.count {
            result += min(tickets[i], tickets[k] - 1)
        }
        return result
    }
}
```