# O(n) Sliding Window Explained

**Author:** jamesBaxtuh
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4401238/](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4401238/)

---

**Intuition:**

When faced with the problem of finding the minimum size of a subarray in an infinite array (represented by `nums`) whose sum is greater than or equal to a given target value (`target`), the thought process involves considering a dynamic approach that can handle both an infinite array and efficiently find the solution.

**Sliding Window with Duplication:** Leveraging the sliding window technique not only allows efficient exploration of subarrays but can also handle the infinite array constraint.

   - By creating a "virtual" duplicate of the original array, we effectively create an array that repeats indefinitely. This duplication addresses the concept of an infinite array by allowing us to explore subarrays that may wrap around the array's boundaries.
   
   - The sliding window technique, when used with this duplicated array, efficiently explores subarrays and finds the minimum size subarray that meets the target condition. We can expand and shrink the window as needed, maintaining a running sum of elements within the window.

   - The sliding window technique allows us to explore the infinite array in a systematic manner and efficiently find the solution with a time complexity of O(n), where `n` is the number of elements considered in the duplicated array. This approach elegantly handles both the infinite array and the target sum condition.

**Approach:**

1. **Duplicate the Array:** To simplify the problem, we first duplicate the `nums` array by creating a new array called `temp`. This duplication is necessary to handle cases where the subarray may wrap around from the end of the array to the beginning.

2. **Calculate the Total Sum:** We calculate the total sum of elements in the original `nums` array and store it in `sumNums`. This sum helps us determine how many times we can repeat the `nums` array to reach or exceed the target.

3. **Determine the Repeating Factor:** We calculate two values:
   - `q`: The integer quotient when `target` is divided by `sumNums`. It represents how many times we can completely repeat the `nums` array.
   - `rem`: The remainder when `target` is divided by `sumNums`. This represents the remaining sum needed to reach the target after repeating the array.

4. **Check for a Special Case:** If `rem` is zero, it means we can achieve the target by simply repeating the entire `nums` array `q` times. In this case, we return `q * nums.length`, which is the length of the original array multiplied by the number of times it is repeated.

5. **Update the Target:** If `rem` is not zero, we update the `target` to be equal to `rem`. This means we need to find a subarray that sums to the remaining target value.

6. **Sliding Window Technique:** We use a two-pointer approach (`i` and `j`) to iterate through the `temp` array. `i` represents the right boundary of the current subarray, and `j` represents the left boundary. We also maintain a running sum (`sum`) of elements between `j` and `i`.

7. **Shrinking the Subarray:** While the `sum` is greater than the `target`, we increment `j` and subtract `temp[j]` from `sum`. This operation shrinks the subarray size, ensuring that the sum is less than or equal to the target.

8. **Finding Subarrays with Target Sum:** Whenever `sum` becomes equal to the `target`, we calculate the length of the current subarray as `(i - j + 1)` and update `ans` with the minimum of the current `ans` value and the length of the subarray.

9. **Check if Subarray Found:** After the loop, we check if `ans` has been updated from its initial value (which is set to infinity). If `ans` has been updated, it means we found at least one subarray that sums to the target, so we return `q * nums.length + ans`.

10. **No Subarray Found:** If `ans` remains equal to its initial value, it indicates that no subarray satisfies the condition. In this case, we return `-1` to signify that no such subarray exists.

**Complexity:**

- Time Complexity: O(n), where n is the total number of elements in the `temp` array
    - **Runtime: 74ms (beats 93.75%)**
- Space Complexity: O(n) due to the `temp` array
    - Memory: **56.2mb (beats 43.75%)**

# Code
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function minSizeSubarray(nums, target) {
    // Duplicate the input array to create a "virtual" infinite array.
    let temp = [...nums];
    for (let i = 0; i < nums.length; i++) {
        temp.push(nums[i]);
    }

    // Calculate the total sum of elements in the original array.
    let sumNums = 0;
    for (let i = 0; i < nums.length; i++) {
        sumNums += nums[i];
    }

    // Calculate how many times the original array can be completely repeated
    // and the remaining sum needed after repeating.
    let q = Math.floor(target / sumNums);
    let rem = target % sumNums;
    
    // Check for a special case where the target can be achieved by repeating
    // the entire original array. If so, return the result immediately.
    if (rem === 0) {
        return q * nums.length;
    }

    // Update the target to be the remaining sum after repeating.
    target = rem;
    let ans = Infinity;
    let j = 0;
    let sum = 0;
    
    // Use a sliding window approach to find the minimum size subarray.
    for (let i = 0; i < temp.length; i++) {
        sum += temp[i];
        
        // While the sum exceeds the target, shrink the window from the left.
        while (sum > target) {
            sum -= temp[j++];
        }
        
        // If the sum equals the target, update the answer with the minimum length
        // of subarray found so far.
        if (sum === target) {
            ans = Math.min(ans, i - j + 1);
        }
    }

    // If a valid subarray is found, return the result by combining the number
    // of times the original array was repeated and the minimum subarray length.
    if (ans !== Infinity) {
        return q * nums.length + ans;
    }

    // If no valid subarray is found, return -1 to indicate that it's not possible.
    return -1;
}

```