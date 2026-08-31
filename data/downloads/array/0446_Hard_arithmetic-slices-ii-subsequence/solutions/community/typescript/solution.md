# 🔥 Beats 90% | JavaScript, Python, TypeScript | detailed explanation ✅🌟

**Author:** raviTejaY
**Votes:** 12
**Link:** [https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4520427/](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/solutions/4520427/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem can be solved with ***Dynamic Programming approach***. Use a 2D array to keep track of the number of arithmetic subsequences that end at each element of input array.
Now iterate through the elements of the array and for each element, check the difference with all previous elements. 
This way we can obtain the count of valid arithmetic subsequences.
# Approach
<!-- Describe your approach to solving the problem. -->
##### Objective:
To count the number of arithmetic subsequences in an input array `nums`.
##### Why DP is used?
Because we need to optimize the solution by breaking it down into smalled subproblems and storing the results of these subproblmens in a data structure (in this case, a 2D array or maps) so that they can be reused

##### Explanation
- initialize a `totalCount` variable to keep track of the total count of arithmetic subsequences found in the array, until the final result
- create an array `dp` of length `n` to store the count of subsequences ending at each element of `nums`.
- **outer loop**, iterates through each element in the `nums` array
- use a map for each elment `dp[i]` to store differences and their corresponding counts
- **inner loop**, iterates through all elements before the `i`th elment in `nums`.
   - `diff` calculates the difference between the current element `nums[i]` and the previous element `nums[j]`
   - `prevCount`, retrieves the count of subsequences ending at `nums[j]` that have a difference of `diff` from the map `dp[j]`. If no such count exists, it defaults to 0
   - `dp[i].set(diff, (dp[i].get(diff) || 0) + prevCount + 1)`; updates the map for the `i`th elment in `dp`. It increments the count of subsequences with a difference of `diff` ending at `nums[i]` by adding the previous count `prevCount + 1`
   - `totalCount += prevCount` increments the `totalCount` by `prevCount`. This results for all valid subsequences that end at `nums[j]` and have a common difference of `diff`.
    - After processing all elements, `totalCount` contains the total count of arithmetic subsequences in the given `nums` array

This apporach efficiently handles the problem by avoiding redundant calculations and reusing counts from previous elements

Using maps for differences ensures that we can quickly retrieve and update counts associated with specific differences 

# Complexity
- Time complexity: $$O(N ^ 2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> **using nested loops**

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> **additional `dp` and `dp[i]` arrays** 

# JavaScript
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    let totalCount = 0;
    // initialize an array to store the count of subsequences ending at each element
    const dp = new Array(n); 

    for (let i = 0; i < n; i++) {
        dp[i] = new Map(); // a Map for storing differences and their counts

        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];

            // get the count of subsequences with the same difference ending at nums[j]
            const prevCount = dp[j].get(diff) || 0;

            // increment dp[i] by the previous count
            dp[i].set(diff, (dp[i].get(diff) || 0) + prevCount + 1);

            // add the previous count to the total count
            totalCount += prevCount;
        }
    }

    return totalCount;
};
```
# Python
```
class Solution(object):
    def numberOfArithmeticSlices(self, nums):
        n = len(nums)
        totalCount = 0
         # initialize a list of dictionaries to store counts of subsequences
        dp = [{} for _ in range(n)]

        for i in range(n):
            for j in range(i):
                # calculate the difference between current and previous elements
                diff = nums[i] - nums[j]

                # get the count of subsequences with the same difference ending at nums[j]
                prevCount = dp[j].get(diff, 0)
                # update count of subsequences ending at nums[i]
                dp[i][diff] = dp[i].get(diff, 0) + prevCount + 1
                # accumulate the previous count to the total count
                totalCount += prevCount

        return totalCount
```
# TypeScript
```
function numberOfArithmeticSlices(nums: number[]): number {
    const n: number = nums.length;
        let totalCount: number = 0;

        // initialize an array of maps to store counts of subsequences
        const dp: Map<number, number>[] = new Array(n);

        for (let i = 0; i < n; i++) {
            dp[i] = new Map<number, number>();

            for (let j = 0; j < i; j++) {
                // calculate the difference between current and previous elements
                const diff: number = nums[i] - nums[j]; 

                // get the count of subsequences with the same difference ending at nums[j]
                const prevCount: number = dp[j].get(diff) || 0; 

                // update count of subsequences ending at nums[i] with the same difference
                dp[i].set(diff, (dp[i].get(diff) || 0) + prevCount + 1);

                // accumulate the previous count to the total count
                totalCount += prevCount;
            }
        }

        return totalCount;
};
```

## Thank you! Please Upvote
![intro-import.jpg](./images/0.jpeg)
