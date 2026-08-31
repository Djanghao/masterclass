# Clean golang solution

**Author:** klakovskiy
**Votes:** 3
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4719275/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4719275/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func timeRequiredToBuy(tickets []int, k int) int {
    result := 0
    c := tickets[k]
    for i, n := range tickets {
        if i == k {
            result += c
        } else if i < k {
            result += min(c, n)
        } else {
            result += min(c-1, n)
        }
    }

    return result
}
```