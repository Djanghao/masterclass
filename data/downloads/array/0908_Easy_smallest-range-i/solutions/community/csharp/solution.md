# ⚠️ Simple Solution in Java 😎 || 100% faster 💥 || With Explanation ✅

**Author:** akobirswe
**Votes:** 2
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/3764193/](https://leetcode.com/problems/smallest-range-i/solutions/3764193/)

---

# Approach
The approach used in the given solution is as follows:

1. Initialize two variables, `max` and `min`, to the minimum and maximum possible integer values, respectively.
2. Iterate through each element `num` in the given `nums` array.
3. Update the `max` variable if `num` is greater than the current maximum.
4. Update the `min` variable if `num` is smaller than the current minimum.
5. After iterating through all elements, calculate the result `res` as the difference between `max` and `min`, subtracting twice the value of `k`.
   - The subtraction of `2 * k` ensures that we have the flexibility to increase the minimum and decrease the maximum by up to `k` units.
6. If the resulting `res` is less than 0 (i.e., the difference between `max` and `min` is already smaller than `2 * k`), return 0 since we don't need to perform any operations.
7. Otherwise, return the calculated `res` as the minimum score of `nums` after applying the operation.

The logic behind this approach is to find the maximum and minimum values in the array and then determine the minimum score by calculating the difference between them, considering the range `k`. By subtracting `2 * k` from the difference, we allow for the possibility of increasing the minimum value and decreasing the maximum value to reduce the overall score. If the resulting score is negative, it means that the difference between the maximum and minimum values is already smaller than `2 * k`, and no operations are required.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int smallestRangeI(int[] nums, int k) {
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;

        for(int num : nums){
            if(num > max) 
                max = num;
            if(num < min)
                min = num;
        }

        int res = max - min - 2 * k;

        if(res < 0) return 0;

        return res;
    }
}
```