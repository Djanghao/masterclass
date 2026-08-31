# using stack O(n) time - Javascript

**Author:** cassac
**Votes:** 13
**Link:** [https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1224254/](https://leetcode.com/problems/buildings-with-an-ocean-view/solutions/1224254/)

---

1. iterate over numbers in array
2. for each number, while the stack is not empty and the value of the index at the top of the stack is less than or equal to the current number, pop items off the stack
3. add index for current number to stack

with this approach the indices will be in sorted order and we can just return the stack as the answer after the loop

```
var findBuildings = function(heights) {
    const stack = []
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] >= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        stack.push(i)
    }
    return stack
}
```