# Single pass, keep track of min and max product

**Author:** ruskakimov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3578725/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/3578725/)

---

# Intuition
Keeping track of the minimum product is useful, since we can multiply it by another negative number and potentially get a new max product.

The key to dealing with edge cases is to never initialize the product with constants like $$0$$ or $$1$$, but only array members.


# Top-down DP (recursion)
```
function maxStrength(nums: number[]): number {
    const n = nums.length;

    function dp(i: number): [number, number] {
        if (i === n-1) return [nums[n-1], nums[n-1]];

        const [nextMin, nextMax] = dp(i+1);
        return [
            Math.min(nextMin, nums[i] * nextMax, nums[i] * nextMin, nums[i]),
            Math.max(nextMax, nums[i] * nextMax, nums[i] * nextMin, nums[i])
        ];
    }

    return dp(0)[1];
};
```
- Time complexity: $$O(n)$$ - linear, since there is only a single (i+1) call
- Space complexity: $$O(n)$$ - max height of the function call stack

# Bottom-up DP (reduced space)
```
function maxStrength(nums: number[]): number {
    let minProd = nums[0], maxProd = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const x = nums[i];
        [minProd, maxProd] = [
            Math.min(minProd, x, x * minProd, x * maxProd),
            Math.max(maxProd, x, x * minProd, x * maxProd)
        ];
    }

    return maxProd;
};
```
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$