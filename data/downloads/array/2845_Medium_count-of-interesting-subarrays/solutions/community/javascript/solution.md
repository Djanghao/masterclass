# 3 solutions with explained thought process

**Author:** maxim-dovydenok
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3995641/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3995641/)

---

# Approach 1: Brute force [Not accepted]

## Intuition
We can go through each possible subarray `[l..r]` and count interesting values in this array. If count has remainder k, then this array is interesting, count it.

# Complexity
- Time complexity:
$$O(n^3)$$ 

- Space complexity:
$$O(1)$$

# Code
```
/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    let interestingArrays = 0;

    // Go through each possible subarray [l..r], count interesting values in this array.
    for (let l = 0; l < nums.length; l++) {
        for (let r = l + 1; r <= nums.length; r++) {
            let count = 0;
            for (let i = l; i <= r; i++) {
                if (nums[i] % modulo === k) {
                    count++;
                }
            }

            if (count % modulo === k) {
                interestingArrays++
            }
        }
    }

    return interestingArrays;
};
```

# Approach 2: Prefix sum [Not accepted]

## Intuition
First thing we should notice, is that we don't care about the values in `nums` array, we only care if this values are dividable by `modulo` with remainder `k`.

So we can probably count interesting values in the array quicker. By builing a prefix map ahead of time we can then count number of intersting values in $$O(1)$$ instead of $$O(n)$$.

To build a prefix map we can iterate nums and increment counter by 1 every time we see an interesting value.

Example: `modulo = 2`, `k = 1`, `nums=[0,1,2,3,4,5,6,7,8]`
|nums|-|0|*1*|2|*3*|4|*5*|6|*7*|8|
|-|-|-|-|-|-|-|-|-|-|-|
|prefix|0|0|1|1|2|2|3|3|4|4|

Then to count number of values in array `[l..r]` we can get count of values in `[0..l]` and substract it from number of values in `[0..r]`. In example above interesting values in `[2..5]` are `3, 5`, so count is `count(5) - count(2) = 3 - 1 = 2` which is correct.

# Complexity
- Time complexity:
$$O(n^2)$$ 

- Space complexity:
$$O(n)$$

# Code
```
/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    // don't care about values, only care if remainder is K
    const interestingValues = nums.map(n => n % modulo === k ? 1 : 0);

    // count how many values in [0..i] has remainder equal to K (interesting values)
    // 1-based array to say that before first element, there're no interesting values
    const prefix = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; i++) {
        prefix[i] = prefix[i - 1] + interestingValues[i - 1];
    }

    let interestingArrays = 0;

    // Go through each possible subarray [l..r],
    // count of interesting values is count of values before and including the right side - count of values before the left side.
    for (let l = 0; l < nums.length; l++) {
        for (let r = l + 1; r <= nums.length; r++) {
            const count = prefix[r] - prefix[l];

            if (count % modulo === k) {
                interestingArrays++
            }
        }
    }

    return interestingArrays;
};
```

# Approach 3: Prefix sum and HashMap [Accepted]

## Intuition
We can probably do better, but how? Probably by removing one of the loops. So if we remove inner loop, then outer loop will have to count all arrays that start with i? Or we can remove outer loop, then on every iteration we'll count all interesting arrays that end at i.

Lets check how many values `[0..i]` array has, and if it has more values than needed, then we can check if we already saw arrays with this amount of values, and if we did, then we can start out interesting array not at 0, but at the end of one of the arrays that we saw before, since we don't care where exactly the ends of these arrays are (since we only care about number of such arrays) we can store counts of such arrays in a HashMap.

We initialize HashMap with `0 => 1` because we know that if `[0..i]` has correct number of interesting values, then it needs 0 values from previous array, and we should count it as 1 interesting array.

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(n)$$

# Code
```
/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    const interestingValues = nums.map(n => n % modulo === k ? 1 : 0);
    const prefix = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; i++) {
        prefix[i] = prefix[i - 1] + interestingValues[i - 1];
    }

    let interestingArrays = 0;

    const counters = { 0: 1 };
    for (let i = 0; i < nums.length; i++) {
        // `k` is how many values our array needs (case when number of values is higher or equal to modulo will be handled later)
        // we know that array [0..i] has `prefix[i + 1]` interesting values
        // then `prefix[i + 1] - k` is how many extra interesting values array [0..i] has
        let extraValues = prefix[i + 1] - k;

        // `extraValues` can be negative - [0..i] has less values than needed, it's not possible to have an interesting array yet
        if (extraValues >= 0) {
            // `extraValues` can be 0 - [0..i] is an interesting array
            // `extraValues` can be positive - [0..i] has more values than needed (we should start our array not at 0, but somewhere further)

            // Handle the case when [0..i] has more values than modulo, we can divide by modulo and work only with remainder
            extraValues = extraValues % modulo

            // Our `counters` map will store counts of arrays that have X values, so if [0..i] has extra values, then we can start not at 0, but at the end of one of the arrays that has X values
            interestingArrays += (counters[extraValues] || 0)
        }

        // Count our [0..i] array in counters map, so that later array can skip this number of values
        const n = prefix[i + 1] % modulo
        counters[n] = (counters[n] || 0) + 1
    }

    return interestingArrays;
};
```