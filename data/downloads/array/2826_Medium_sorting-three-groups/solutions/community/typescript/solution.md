# TypeScript, JavaScript, DP, O(N) Time. O(K) Space. Explanation, comments.

**Author:** SlayerSv
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/3933419/](https://leetcode.com/problems/sorting-three-groups/solutions/3933419/)

---

# Intuition
In this problem we basically need to find the longest non-decreasing subsequence, the rest elements need to be changed. So the answer will be ```nums.length``` minus that subsequence.

# Approach
<!-- Describe your approach to solving the problem. -->
Calculate the longest non-decreasing subsequence by storing previous best results in variables. If we find a number we check current subsequences of all numbers less or equal to our current number.

For example [1, 2, 3, 3, 1]
1) We get number 1 => We add 1 to current number of ones:
ones: 1, twos: 0, threes: 0;
2) We get number 2 => We find the max between current number of ones and twos (1) and add 1 to that number:
ones: 1, twos: 2, threes: 0;
3) We get number 3 => We find the max between current number of ones, twos and threes (2) and add 1 to that number:
ones: 1, twos: 2, threes: 3;
3) We get number 3 => We find the max between current number of ones, twos and threes (3) and add 1 to that number:
ones: 1, twos: 2, threes: 4;
4) We get number 1 => We add 1 to current number of ones:
ones - 2, twos - 2, threes - 4;

Then subract longest non-decreasing subsequnce (max number between ones, twos and threes - in our case its 4) from the size of the array, that will give us the total number of elements that need to be changed (1 in this example).
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(K) K - range of values in the array.
# Code
```
function minimumOperations(nums: number[]): number {
    let ones = 0;
    let twos = 0;
    let threes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ones++;
        }
        if (nums[i] === 2) {
            twos = Math.max(ones, twos) + 1;
        }
        if (nums[i] === 3) {
            threes = Math.max(ones, twos, threes) + 1;
        }
    }
    return nums.length - Math.max(ones, twos, threes);
};
```
Alternatively, you can use this code, which is harder to understand, but easier to use when we have more than 3 possible values in the array (numbers in this problem restricted to 1-3). It uses absolutely the same principle, but without if statements.
```
function minimumOperations(nums: number[]): number {
    const n = 3; // the range of values in the numbers array.
    const dp = new Array(n + 1).fill(0); // extra slot since array 0-based
    for (let i = 0; i < nums.length; i++) {
        const arr = []; // this will contain numbers of all values less or equal to current.
        let currNumber = nums[i];
        for (let j = 1; j <= currNumber; j++) {
            arr.push(dp[j]) // iterate through dp array and add lesser values.
        }
        dp[currNumber] = Math.max(...arr) + 1; // find max of those values and add 1.
    }
    return nums.length - Math.max(...dp);
};
```