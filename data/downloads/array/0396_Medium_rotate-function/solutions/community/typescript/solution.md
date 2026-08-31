# maxRotateFunction

**Author:** Janelaxagh
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotate-function/solutions/4527241/](https://leetcode.com/problems/rotate-function/solutions/4527241/)

---

# Intuition
We aim to find a way to compute the maximum value of the rotation function F(k) for the given array `nums`. To do this efficiently, we can deduce a pattern and optimize the computation of F(k) by observing the changes between consecutive rotations.

# Approach
We start by initializing the `sum` variable to store the sum of all elements in `nums` and `rotation` to store the initial rotation value. We iterate through the array to calculate both the sum and the initial rotation value according to the formula.

Next, we iterate from 1 to `n - 1` to compute subsequent rotations based on the previously computed rotation value. We update `rotation` using the formula `rotation = rotation + sum - n * nums[n - i]` and keep track of the maximum rotation value encountered so far in `maxRotation`.

Finally, we return `maxRotation`, which represents the maximum value of F(k) for rotations from 0 to n - 1.

# Complexity
- Time complexity: O(n), where n is the length of the `nums` array. We perform two iterations over the array, and the computations inside the loops are constant time operations.
- Space complexity: O(1), as we use a fixed amount of extra space for storing variables regardless of the input size.

# Code
```typescript
function maxRotateFunction(nums: number[]): number {
    const n: number = nums.length;
    let sum: number = 0;
    let rotation: number = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];
        rotation += i * nums[i];
    }

    let maxRotation: number = rotation;

    for (let i = 1; i < n; i++) {
        rotation = rotation + sum - n * nums[n - i];
        maxRotation = Math.max(maxRotation, rotation);
    }

    return maxRotation;
}
```

This solution efficiently computes the maximum value of the rotation function F(k) for the given `nums` array.