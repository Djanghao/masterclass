# TypeScript :: Monotonic Stack

**Author:** VladyslavPetrovskyi
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/5429234/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/5429234/)

---

# Intuition
The intuition behind this problem is to use a stack to keep track of the heights of the people in a decreasing order as we traverse the list from right to left. This allows us to efficiently determine how many people each person can see to their right. 

# Approach
1. Loop through the heights from right to left.
2. For each person, pop all shorter heights from the stack, counting each pop.
3. If the stack isn't empty after popping, increment the count by one for the next taller person.
4. Push the current height onto the stack.

# Complexity
- Time complexity: O(n) - each height is pushed and popped from the stack at most once.

- Space complexity: O(n) - stack requires space proportional to the number of people in the queue.

# Code
```
// Decreasing Monotonic Stack, O(N) / O(N)
function canSeePersonsCount(heights: number[]): number[] {
    const stack = [];
    const result = new Array(heights.length).fill(0);

    for (let i = heights.length - 1; i >= 0; i--) {
        // Pop from the stack all shorter heights that can be seen by the current person
        while (stack.length > 0 && heights[i] > stack[stack.length - 1]) {
            stack.pop();
            result[i]++;
        }

        // If there is still someone in the stack, the current person can see one more person (the taller one)
        if (stack.length > 0) {
            result[i]++;
        }

        // Push the current height onto the stack
        stack.push(heights[i]);
    }

    return result;
}

```