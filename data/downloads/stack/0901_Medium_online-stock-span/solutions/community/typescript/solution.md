# Monotoic Stack Solution (with step by step explanation)

**Author:** alekseyvy
**Votes:** 2
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/4208704/](https://leetcode.com/problems/online-stock-span/solutions/4208704/)

---

# Intuition
We use Monotoic stack to solve this problem
# Approach
we create monotoic stack that will be storing [price, span] array, and when we initialize it in constructor with [0, 0], in next method we declare span and set it to 1, next we check if our stack have elements and if top element ptice which is at 0 index are less or equals to current price, if true we add span of this element at index 1 to current span, and pop this element from stack, we repeat those steps until stack is empty or top most element in stack are bigger than current price, if true then we push current [price, span] into stack and return span
# Complexity
- Time complexity:
O(n) -> we iterate n times at most
- Space complexity:
O(n) -> we use stack array to store prices and span
# Code
```
class StockSpanner {
    // declare private field stack
    private stack: [[number, number]];
    constructor() {
        // initialize stack
        this.stack = [[0, 0]];
    }

    next(price: number): number {
        // declare span and set its value to 1
        let span = 1;
        // iterate in while loop over stack wuntil it has elements and topmost price in stack are less or equals to current price
        while(this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            // add stack top price span to current span
            span += this.stack[this.stack.length - 1][1];
            // pop element from stack
            this.stack.pop();
        }
        // push current price and span as array into stack
        this.stack.push([price, span]);
        // return current span
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
```