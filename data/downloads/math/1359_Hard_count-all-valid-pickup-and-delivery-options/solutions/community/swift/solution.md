# 100% | DP | One liner | Swift

**Author:** webvizitor
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4027455/](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/solutions/4027455/)

---


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    func countOrders(_ n: Int) -> Int {
        stride(from: 2, through: n, by: 1).reduce(1) { ($0 * (2 * $1 - 1) * $1) % 1_000_000_007 }
    }
}
```