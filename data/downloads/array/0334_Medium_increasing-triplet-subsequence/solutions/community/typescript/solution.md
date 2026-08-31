# TypeScript Optimal Solution Full Explained

**Author:** adampjl
**Votes:** 5
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/3993187/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/3993187/)

---

# Intuition

For this problem there are 2 things we need to guarnentee to return true.
1. i < j < k
2. nums[i] < nums[j] < nums[k]

My (and maybe your) first approach was to do a triple nested for loop to calculate all the possible subsequences where i < j < k and then test if  nums[i] < nums[j] < nums[k]. Something like
```.
for(i in range (0, nums.length - 2))
    for (j in range(i + 1, nums.length - 1))
        for (k in range (j + 1, nums.length))
            if (nums[i] < nums[j] < nums[k])
                return true
return false
```

This is quite slow though, at O(N^3).

# Approach

There is a faster way though.

Think of the problem like this, find the 2 smallest elements, and then an element that is greater than both of those.

That doesn't sound like it meets our problem constraints, but the implementations protects us i'll explain how that is down below.

- Looking at the code, we initialize firstMin and secondMin to Infinity.
-  We set firstMin when we encounter a value lesser than firstMin.
- We set secondMin when we encounter a value that is greater than firstMin but lesser than secondMin.
- **This guaraentees as that, if secondMin is EVER set, it means that firstMin was already set, meaning that we have found a i < j && nums[i] < nums[j].**
- W**hen we hit the else, that mean firstMin < secondMin < num (which means nums[i] < nums[j] < nums[k]). And it also guaranetees i < j < k, because we just iterated to a later element and firstMin and secondMin we already set.**

# Complexity
- Time complexity: O(N). Only 1 loop through the array.

- Space complexity: O(1). No every dynamic space used.

# Code
```
function increasingTriplet(nums: number[]): boolean {
    if (nums.length  < 3) return false;

    let firstMin: number = Infinity;
    let secondMin: number = Infinity;

    for (let num of nums) {
        if (num <= firstMin) {
            firstMin = num;
        }
        else if (num <= secondMin) {
            secondMin = num;
        }
        else {
            return true;
        }
    }

    return false;
};
```