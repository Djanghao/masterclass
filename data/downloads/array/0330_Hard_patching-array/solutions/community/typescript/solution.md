# Simple Greedy | TypeScript & JavaScript | Beats 100%

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/patching-array/solutions/4918106/](https://leetcode.com/problems/patching-array/solutions/4918106/)

---

# Intuition
The goal is to determine the minimum number of patches needed to ensure that the array can represent any number in the range **[1, n]** *(inclusive)*. By greedily selecting the smallest number possible to add to the array at each step, we aim to maximize the range covered by the array without unnecessarily increasing its size.

---


# Approach
1. Initialize three variables: **additions** to keep track of the number of patches added, **i** as the index for the input array **nums**, and **sum** to track the cumulative sum covered by the current array.
1. Iterate until the sum reaches or exceeds **n**:
    - If the current element in **nums** can be added to the sum (i.e., **nums[i] <= sum + 1**), add it and move to the next element in **nums**.
    - Otherwise, add the next number (i.e., **sum + 1**) to the array to cover the gap and increment **additions**.
Return the total number of additions made.

---


# Complexity
- Time complexity:
The time complexity of this approach is $O(log (n))$ in the worst case. This is because at each step, we either increment **i** or double **sum**, which results in at most *log\u2082(n)* iterations.

- Space complexity:
The space complexity is $O(1)$ as we are using only a constant amount of extra space for storing variables regardless of the input size.

# Code
```TypeScript []
function minPatches(nums: number[], n: number): number {
    let additions: number = 0, i: number = 0, sum: number = 0;

    while (sum < n) {
        if (i < nums.length && nums[i] <= sum + 1) {
            sum += nums[i], i++;
        }
        else {
            sum += sum + 1;
            additions++;
        }
    }
    return additions;
};
```
```JavaScript []
function minPatches(nums, n) {
    let additions = 0, i = 0, sum = 0;

    while (sum < n) {
        if (i < nums.length && nums[i] <= sum + 1) {
            sum += nums[i], i++;
        }
        else {
            sum += sum + 1;
            additions++;
        }
    }
    return additions;
};
```

