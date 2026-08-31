# (–TypeScript–) Concise and Smart with 3 Simple Loops

**Author:** cat24
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profit-assigning-work/solutions/5409589/](https://leetcode.com/problems/most-profit-assigning-work/solutions/5409589/)

---

This is the type of problem that is very satisfying to solve.

Since the upper limit of the constrants of the problem is not large, it will be good to prefill an array named `bestPros` with the element `0(zero)`.

Having the `bestPros` correctly setup, we can now focus on solving the problem by using 3 consecutive loops.

> Note: the `bestPros` array will be quite sparse. 

**1st loop:**
Here we are populating the `bestPros` array as follows:
- the `index`s are `difficulty[i]`;
- the values are `profit[i]`;
    > Note: we must use `Math.max()` because there are duplicates with different values and we want to capture the greatest ones.

**2nd loop:**
Here we are filling the sparse `bestPros` array in such a way that the greater profits of less difficulty will override the lesser profits of greater difficulty.

**3rd loop:**
This is the *cherry on the top* loop where we are just asking for the best profit that a particular worker can get.

I love this solution and the way we built the `bestPros` array.
The array is build in such a way that our workers always make the greatest profit for their ability.

# Complexity
- Time complexity:
    $$O(n + m)$$

- Space complexity:
    $$O(n)$$

# Code
```
const upperRangeLmt = 100001;
function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    let totalProfit: number = 0;
    const len = difficulty.length;

    const bestPros = Array.from({length: upperRangeLmt}, () => 0);

    for (let i = 0, bestProPos; i < len; i++) {
        bestProPos = difficulty[i];
        bestPros[bestProPos] = Math.max(bestPros[bestProPos], profit[i]);
    }

    for (let i = 1, prev = 0; i < upperRangeLmt; i++) {
        prev = bestPros[i] = Math.max(prev, bestPros[i]);
    }

    for (let w of worker) {
        totalProfit += bestPros[w];
    }

    return totalProfit;
};
```