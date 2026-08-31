# Javascript Monotonic Stack with Explanation

**Author:** archcorsair
**Votes:** 10
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/1904781/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/1904781/)

---

**Monostack Problems**

Monostack problems are problems that utilize `monotonic stacks` (stack with specific condtions) to find the solution.

**Algorithm**
1. We start with an empty array to act as our stack.
2. The for loop scans the elements from the input back to front. We use the stack to store numbers we have seen and pop off numbers that don't satisfy our condition (greater than our current price).
3. When we finish visiting the items in our stack and removing the greater items, we return the **current price - item at the top of the stack** as our result or current price if the stack is empty.
4. The number at the top of our stack is the next lower price.

There are `n` elements in total, each element is pushed into the stack once, and it will be popped once at most, without any redundant operation. So the total calculation scale is proportional to the element scale `n`, which is the complexity of `O(n)`.

```
const finalPrices = function(prices) {
    // monotonic stack
    const stack = [];
    const result = [];
    for (let i = prices.length - 1; i >= 0; i -= 1) {
        while (stack.length && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }
        result[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1];
        stack.push(prices[i]);
    }
    return result;
};
```

**Similar problems**
* https://leetcode.com/problems/next-greater-element-i/
* https://leetcode.com/problems/daily-temperatures/

**Reference**
* https://labuladong.gitbook.io/algo-en/ii.-data-structure/monotonicstack