# [ Go Solution ] Great explanation and Full Description

**Author:** sansaian
**Votes:** 3
**Link:** [https://leetcode.com/problems/online-stock-span/solutions/4379583/](https://leetcode.com/problems/online-stock-span/solutions/4379583/)

---

# Intuition
The goal is to determine the number of consecutive days leading up to and including the current day, where the stock price was less than or equal to the price on the current day. The problem lends itself to a stack-based solution, where we can keep track of the prices and their spans in a way that allows us to efficiently update the span of the current day.

# Approach
The `StockSpanner` structure utilizes two stacks: one for storing the prices (`stack`) and another for storing the corresponding spans (`ansStack`). For each new price, the method `Next` iteratively compares it with the top of the `stack`. If the current price is greater, it pops from both stacks, summing up the spans. This process repeats until we find a price on the top of the stack that is greater than the current price, or the stack is empty. The span for the current price is then calculated and stored, along with the price itself.

### Steps
1. Initialize `StockSpanner` with empty `stack` and `ansStack`.
2. In the `Next` method:
   - Initialize the span (`ans`) for the current price as 1 (counting the day itself).
   - While the `stack` is not empty and the top element of `stack` is less than or equal to the current price:
     - Pop the top element from both `stack` and `ansStack`.
     - Add the span from `ansStack` to `ans`.
   - Push the current price onto `stack` and `ans` onto `ansStack`.
   - Return `ans`, which now contains the total span for the current price.

# Complexity
- Time complexity: The time complexity of the `Next` method is amortized O(1). Although it seems we are using a loop, each element gets pushed and popped from the stack only once over multiple calls to `Next`.
- Space complexity: O(N), where N is the number of calls to the `Next` method. The stacks used to store prices and spans grow in proportion to the number of prices processed.

# Code
```go
type StockSpanner struct {
    stack    []int
    ansStack []int 
}

func Constructor() StockSpanner {
    return StockSpanner{}
}

func (this *StockSpanner) Next(price int) int {
    ans := 1
    for len(this.stack) != 0 && this.stack[len(this.stack)-1] <= price {
        this.stack = this.stack[:len(this.stack)-1]
        ans += this.ansStack[len(this.ansStack)-1]
        this.ansStack = this.ansStack[:len(this.ansStack)-1]
    }
    this.stack = append(this.stack, price)
    this.ansStack = append(this.ansStack, ans)
    return ans
}
