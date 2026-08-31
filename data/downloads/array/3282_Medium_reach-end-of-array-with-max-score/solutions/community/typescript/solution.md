# Easy Typescript Solution with Full Explanation

**Author:** chetannada
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5761237/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5761237/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ because we are iterating through the input array nums once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$ because we are using a constant amount of extra space regardless of the input size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function findMaximumScore(nums: number[]): number {

    // initialize n as length of nums
    const n: number = nums.length;

    // initialize ans and iPrev as 0
    let ans: number = 0;
    let iPrev: number = 0;

    // run for loop from index 1 to n
    for (let i = 1; i < n; i++) {

        // if nums[iPrev] is less than or equal to nums[i]
        if (nums[iPrev] <= nums[i]) {

            // add score and is calculate as (i - iPrev) * nums[iPrev]
            ans += (i - iPrev) * nums[iPrev];

            // update iPrev with i
            iPrev = i;
        }
    }

    // if iPrev is not equal to n - 1
    if (iPrev !== n - 1) {

        // add score and is calculate as (n - 1 - iPrev) * nums[iPrev]
        ans += (n - 1 - iPrev) * nums[iPrev];
    }

    // return final answer
    return ans;
};
```