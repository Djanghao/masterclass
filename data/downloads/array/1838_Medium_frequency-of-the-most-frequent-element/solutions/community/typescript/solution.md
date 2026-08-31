# Sliding Window | Optimal Solution | Java | JavaScript | TypeScript

**Author:** prajwal_nikhar
**Votes:** 2
**Link:** [https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4301052/](https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4301052/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Sorting:**

- The array nums is sorted in ascending order. Sorting is crucial for the sliding window approach, as it allows us to efficiently adjust the window based on the current element.
- 
2. **Sliding Window:**
- Two pointers, left and right, are used to define the subarray. The right pointer is advanced to include elements in the current subarray, while the left pointer is adjusted to maintain a valid subarray.

3. **Subarray Sum and Adjustments:**
- currentSum represents the sum of elements in the current subarray. The code adds the current element (nums[right]) to this sum.
- A while loop checks if the current subarray violates the condition 
    **`(sum + k < nums[right] * length)`** 
If it does, the code adjusts the subarray by removing the leftmost element and updating the sum. This ensures that the condition is satisfied.

4. **Update Maximum Frequency:**
The maximum frequency (maxFrequency) is updated by comparing it with the length of the current subarray 
    **`(right - left + 1)`**
The length represents the number of elements in the valid subarray.
Return Result:

The final result is the maximum frequency found after processing the entire array.

# Complexity 
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a-b);
    let maxFreq = 0, currSum  = 0;

    for(let l = 0, r = 0; r < nums.length; r++){
        currSum += nums[r];
        while(currSum + k < nums[r] * (r-l+1)){
            currSum -= nums[l];
            l++;
        }
        maxFreq = Math.max(maxFreq, r-l+1);
    }
    return maxFreq;
};
```
```java []
class Solution {
    public int maxFrequency(int[] nums, int k) {
        int maxFrequency = 0;
        long currentSum = 0;

        Arrays.sort(nums); // Sort the array in ascending order

        for (int left = 0, right = 0; right < nums.length; ++right) {
            currentSum += nums[right];

            while (currentSum + k < (long) nums[right] * (right - left + 1)) {
                currentSum -= nums[left]; 
                left++;
            }

            maxFrequency = Math.max(maxFrequency, right - left + 1);
        }

        return maxFrequency;
    }
}
```
```typescript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function maxFrequency(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let maxFrequency: number = 1;
    let left: number = 0;
    
    for (let right: number = 1; right < nums.length; ++right) {
        k -= (nums[right] - nums[right - 1]) * (right - left);

        while (k < 0) {
            k += nums[right] - nums[left];
            left++;
        }

        maxFrequency = Math.max(maxFrequency, right - left + 1);
    }

    return maxFrequency;
}

```

![origami.jpg](./images/0.jpeg)
