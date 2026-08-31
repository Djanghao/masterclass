# Fast solution - step by step

**Author:** Negromovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/4417884/](https://leetcode.com/problems/super-egg-drop/solutions/4417884/)

---

# Intuition

To solve the problem conveniently, we will modify it slightly. We will find the maximum building height that can be checked with y attempts. And if for some y, it turns out that the desired building is less than or equal to the maximum floor, then such y will be considered the correct answer.

For the case when we have only 1 egg (k=1), the only strategy will be to drop the egg sequentially from the first to the last floor. Thus, the result will be y=n.

Let's consider in detail the case when we have 2 eggs (k=2). We'll try to find the maximum height the building can be when we have y attempts.

1. `y=1`. When there's only 1 attempt, the building can be a maximum of 1 floor. `n=1`.
2. `y=2`. When a second attempt appears, we must throw from the highest possible floor so that if the first egg breaks, we can check all the floors below with the second egg. We will use this universal rule further. Thus, first, we throw from the 2nd floor. If the egg breaks, then with the second egg, we can check the 1st floor. And if it doesn't break, then also the 3rd floor. In the end, for 2 attempts, we can check a maximum of 3 floors. `n=3`.
3. `y=3`. We have a third attempt. Similarly to point 2, we choose the highest floor to check the intermediate floors with the second egg. In this case, it will be the 3rd floor. If the egg doesn't break, then we have only 2 attempts left. Next, we choose the highest floor, which will be the 5th floor. The remaining attempt will check either the 4th or 6th floor, depending on the result. We get `n=6`.
4. `y=4`. Similarly, with the fourth attempt. First, throw from the 4th floor, and if the egg doesn't break, then proceed as in point 3. In the end, it will be `n=10`.

We can notice that each subsequent attempt increases the number of floors we can check by one initial attempt with a broken egg. Because if the egg doesn't break, then the algorithm for the remaining attempts completely suits the previous point. We will take this rule as the basis of our solution algorithm.

# Approach

To solve, we will sequentially calculate the maximum floor height of the building for the number of attempts`y=1..\u221E` for the given number of eggs. The calculation for the next number of attempts is as follows:

1. For `k=1`, with each increase of `y` by 1, the value of `n` also increases by 1.
2. For `k=2`, with each increase of `y` by 1, the value of `n` increases by the value of `n+1` for `k=1` and `y=y-1`.
3. Thus, for `k>1`, with each increase of `y` by 1, the value of `n` increases by `n+1` for `k=k-1` and `y=y-1`.

It turns out that for each next step `y`, we need the previous values of `n` for each `k`.

Additional comments are in the solution code.

# Complexity
- Time complexity: `O(k*log(n))`

- Space complexity: `O(k)`

# Code
```
function superEggDrop(k: number, n: number): number {
    // The case with `k=1` is a special case, we resolve it separately.
    if (k === 1) {
        return n;
    }
    // We create an array where, for each `k`, we will count `nMax` at the previous step.
    let nMax: number[] = Array(k + 1).fill(0);
    // We start with a variant with a maximum of `y=1` attempt.
    for (let y = 1; ; ++y) {
        // We sequentially calculate `nMax` for each number of eggs. 
        // Since the value of `k` relies on the previous calculation with a smaller `k`, we use reverse order.
        for (let j = k; j > 0; --j) {
            // Our universal formula from point 3.
            nMax[j] += nMax[j - 1] + 1;
        }
        // If our number of attempts is sufficient to check the desired building, then this is the result.
        if (nMax[k] >= n) {
            return y;
        }
    }
}
```