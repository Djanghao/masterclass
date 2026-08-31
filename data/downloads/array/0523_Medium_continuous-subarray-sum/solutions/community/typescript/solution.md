# Simple solution with mathematical explanation

**Author:** greatpyrenees
**Votes:** 10
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/4704366/](https://leetcode.com/problems/continuous-subarray-sum/solutions/4704366/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
In this problem we want to find if a`subarray[i, j]` exists such that `sum[i, j] % k = 0`.

What is `sum[i, j]`? `sum[i, j] = sum[0, j] - sum[0, i-1]`

Given we want `sum[i, j] % k = 0`
this could be written as: `(sum[0, j] - sum[0, i-1]) % k = 0`
expanding the mod:  `sum[0, j] % k - sum[0, i-1] % k = 0`
moving things around: `sum[0, j] % k = sum[0, i-1] % k`
we can give semantic names: `cumulative % k = X`


This is the equation we are going to use in the solution.

# Approach
<!-- Describe your approach to solving the problem. -->
Using the equation above, we can iterate over nums in the given array, at each iteration, we can easily obtain the cumulative and we look for X. That means we need to store a value for X in each iteration so we can look it up later. That begs the question what is X? For each iteration `i`, possible values for X are `sum[0, i-1] % k`, `sum[0, i-2] % k`, `sum[0, i-3] % k`...etc. So as we are iterating over nums from left to right we need to store the current `cumulative % k` so that we can look it up later as a possible value for X.

We can write the following code so far:
```
function checkSubarraySum(nums: number[], k: number): boolean {
    // keep track of cumulative sum
    let cumulative = 0;

    // to store possible values for X
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        // update cumulative sum
        cumulative += nums[i];

        // if the possible value for X does not exist, add it to map
        if (map[cumulative % k] === undefined) {
            map[cumulative % k] = true;
        } 
    }
};
```

The problem wants to find if there is a subarray that satisfies the condition with a length of atleast 2. How do find that? Instead of only keeping track of possible values of X, we can also keep track of where they end. Remember that X represents the right side in the equation `sum[0, j] % k = sum[0, i-1] % k` so we need to know where that `i-1` is. If we know where `i-1` is and we know where `j` is (current iteration) then we would know the length of the subarray. So we can modify our code like the folling:
```
function checkSubarraySum(nums: number[], k: number): boolean {
    let cumulative = 0;

    const map = {};

    for (let i = 0; i < nums.length; i++) {
        cumulative += nums[i];
        
        // now we can check if there is a value for X that exists
        // and also check that it satisifes a length of 2
        if (map[cumulative % k] < i - 1) {
            return true;
        }

        if (map[cumulative % k] === undefined) {
            // when adding a possible value for X in map
            // we store where it ends, which is i
            map[cumulative % k] = i;
        } 
    }

    return false;
};
```

We are almost there but there is one edge case we need to consider. For example given `nums=[3, 3] and k=6`.

At index 1, our map will look like the following:
```
{
    '3': 0,
}
```
 substituting in `sum[0, j] % k = sum[0, i-1] % k`, we get `6 % 6 = X`, then `X = 0` and since it doesn't exist in the map the code will return false. We need to have a base case in the map so we initialize it as `const map = {'0': -1}`. Full code below.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function checkSubarraySum(nums: number[], k: number): boolean {
    let cumulative = 0;

    // for cases like [3, 3]
    const map = {'0': -1};

    for (let i = 0; i < nums.length; i++) {
        cumulative += nums[i];

        if (map[cumulative % k] === undefined) {
            map[cumulative % k] = i;
        } 
        
        if (map[cumulative % k] < i - 1) {
            return true;
        }
    }

    return false;
};
```