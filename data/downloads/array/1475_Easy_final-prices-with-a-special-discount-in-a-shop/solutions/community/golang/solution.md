# Go - Monotonic Stack

**Author:** goamaral
**Votes:** 4
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/3652998/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/3652998/)

---

```
func finalPrices(prices []int) []int {
    // Prices without a discount applied
    // Because we apply the first applicable discount, the values in this stack will be
    // in ascending order
    stack := make([]int, 0, len(prices))
    for i, discount := range prices {
        for len(stack) > 0 && discount <= prices[stack[len(stack)-1]] {
            prices[stack[len(stack)-1]] -= discount
            stack = stack[:len(stack)-1]
        }
        stack = append(stack, i)
    }
    return prices
}
```