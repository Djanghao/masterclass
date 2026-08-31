# One loop | O(n) | TypeScript & JavaScript & Python

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/5282868/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/5282868/)

---

# Intuition
To make all elements in the array equal, the optimal strategy involves incrementing **\uD835\uDC5B \u2212 1** elements at a time. This is equivalent to decrementing one element (the one not incremented) to reach the smallest element in the array. The intuition is that instead of thinking of incrementing all elements but one, you can think of how many operations it takes to bring all elements down to the minimum value in the array.

# Approach
1. **Identify the Minimum Value:** Find the minimum value in the array, as all elements need to be reduced to this value.
2. **Calculate the Total Moves:** Compute the difference between each element and the minimum value. The sum of these differences gives the number of moves required to make all elements equal to the minimum value.

# Steps
1. Find the minimum value in the array.
2. Initialize a counter **sum** to keep track of the total number of moves.
3. Loop through the array and for each element, add the difference between the element and the minimum value to **sum**.
4. Return the **sum** as the result.

# Complexity
## Time complexity:
- **Finding the minimum value:** $$\uD835\uDC42(\uD835\uDC5B)$$
- **Calculating the sum of differences:** $$\uD835\uDC42(\uD835\uDC5B)$$
- **Overall Time Complexity:** $$\uD835\uDC42(\uD835\uDC5B)$$

## Space complexity:
- **Auxiliary Space:** $$\uD835\uDC42(1)$$ *(We only use a few extra variables regardless of the input size.)*
- **Overall Space Complexity:** $$\uD835\uDC42(1)$$

# Code
```TypeScript []
function minMoves(nums: number[]): number {
    const min = Math.min(...nums);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] - min;
    }
    return sum;
};
```
```JavaScript []
function minMoves(nums) {
    const min = Math.min(...nums);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] - min;
    }
    return sum;
};
```
```Python []
def minMoves(nums):
    min_val = min(nums)
    sum_moves = 0
    for num in nums:
        sum_moves += num - min_val
    return sum_moves
```
