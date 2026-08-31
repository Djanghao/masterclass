# TypeScript: Brute Force approach

**Author:** jls_ts
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/6107220/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/solutions/6107220/)

---

# Intuition

This solution uses a brute-force approach. The idea is to count how many times we can remove a subarray from the original array, leaving the rest in ascending order.

Go through all possible subarrays in the array.
Check if removing the subarray leaves the remaining parts of the array in ascending order.

# Approach
1. Use two loops:
- The first loop selects the starting index of the subarray.
- The second loop determines the endpoint of the subarray, starting from one position after the starting index.

In each iteration of the second loop, we define the range of our subarray. Additionally, we identify two other ranges: the ***first range*** spans from the start of the array (`0`) to the beginning of the subarray, and the ***second range*** spans from the end of the subarray to the end of the array.

2. Create a helper function called **isIncreasing(start, end)** that checks if a range of the array is in ascending order. This function works as follows:
- Use a variable called `prev` to track the previous element while iterating through the array.
- Check if each element is greater than `prev`. Update `prev` as you go.

Use the helper function to verify that both ranges are in ascending order. If they are, increment the result count by one.


**Note:** The variable `prev` needs to store the value of the last element from the first range. This value should be preserved and used to continue checking the second range.


# Code
```typescript []
function incremovableSubarrayCount(nums: number[]): number {
    const n = nums.length; 
    let res = 0;
    let prev = -1; 

    const isIncreasing = (start: number, end: number):boolean => {
        for(let k = start; k < end; k++){
            if(prev >= nums[k]) return false; 
            prev = nums[k]
        }
        return true; 
    }

    for(let i = 0; i < n; i++){
        for(let j = (i + 1); j <= n ; j++){
            prev = -1
            isIncreasing(0, i) && isIncreasing(j, n) && res++
        }
    }

    return res; 
};
```