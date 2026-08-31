# Typescript | Prefixsum with Dynamic Programming beats 100% | Short solution

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/5501389/](https://leetcode.com/problems/count-subarrays-with-more-ones-than-zeros/solutions/5501389/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given a prefix, we know the amount of valid subsequences is the sum of the count of prefixes which are lower than the current one. If we keep track of the elements with a given prefix, then if the prefix goes up by one we add them to the sum and if they go down then we subtract the amount of elements.

# Approach
<!-- Describe your approach to solving the problem. -->
Define a map to store the amount of elements. Then the prefix a and the solution counter sol. Iterate through all elements in nums. 

1. nums[i] is 0: Subtract the amount of elements from the previous prefix from the sum and add the sum to the solution. Increment the current prefix to the soltion.
2. nums[i] is 1: Add the amount of elements with the current prefix + 1 (If nums[i] is 1 itself is valid) to the sum and add the sum to the solution.

Increment the current prefix by one. Increment prefix if nums[i] is one and decrement if nums[i] is zero. At the end return the solution modulo the number given.

Note: Just started learning Typescript. Apologies for code cleaniness in advance.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
function subarraysWithMoreZerosThanOnes(nums: number[]): number {
    let dp: Map<number, number> = new Map();
    let a: number = 0, su: number = 0, sol: number = 0;

    nums.forEach(it => {
        sol += su += (it == 0) ? - dp.get(a-1) || 0 : (dp.get(a) || 0) + 1;
        dp.set(a, (dp.get(a) || 0) + 1);
        a += 2 * it - 1;
    });

    return sol % (1e9 + 7);
};
```