# Java 😎 | 100% faster 💥 | Recursion ⚠️ | With Explanation ✅

**Author:** akobirswe
**Votes:** 2
**Link:** [https://leetcode.com/problems/min-max-game/solutions/3774178/](https://leetcode.com/problems/min-max-game/solutions/3774178/)

---

# Approach
An approach to solving the "Min Max Game" problem is a recursive one, which is a valid and efficient way to find the last remaining number after applying the algorithm. Let's describe the approach step-by-step:

1. **Base Case**: Check if the length of the `nums` array is 1. If it is, then it means we have reached the last remaining number after applying the algorithm. In this case, simply return `nums[0]` as the output.

2. **Recursive Case**: If the length of the `nums` array is greater than 1, we proceed with the algorithm.
   - Create a new array called `newNums` of length `nums.length / 2`. This array will store the values of `min(nums[2 * i], nums[2 * i + 1])` for even indices and `max(nums[2 * i], nums[2 * i + 1])` for odd indices.
   - Traverse through `newNums` and calculate the values for each index based on the algorithm's rules using the `min()` and `max()` functions.
   - Now, we have a new array `newNums`, which is half the size of the original `nums` array. We call the `minMaxGame()` function recursively with `newNums` as the input.

3. **Termination Condition**: The recursion will continue until the base case is reached (i.e., the `nums` array has only one element). Once the base case is reached, the recursion will start to unwind, and the last remaining number will be returned from each recursive call.

4. **Return**: The final result will be the output of the initial recursive call, which is the last remaining number after applying the algorithm to the original `nums` array.

The logic behind this approach is to repeatedly apply the algorithm on the given array until we have only one element left. Each time we apply the algorithm, we reduce the size of the array by half (by creating the `newNums` array). This recursive process allows us to efficiently find the last remaining number.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public int minMaxGame(int[] nums) {
        if(nums.length == 1) 
            return nums[0];

        int[] newNums = new int[nums.length / 2];

        for(int i = 0; i < newNums.length; i++){
            if(i % 2 == 0)
                newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
            else
                newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
        }

        return minMaxGame(newNums);
    }
}
```