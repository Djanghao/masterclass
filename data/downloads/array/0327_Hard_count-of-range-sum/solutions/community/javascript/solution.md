# Very simple well explained MergeSort javaScript solution

**Author:** amit_is_coding
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-range-sum/solutions/4834402/](https://leetcode.com/problems/count-of-range-sum/solutions/4834402/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this  code is based on the properties of the prefix sum array and the merge sort algorithm.
- The prefix sum array sum has a property that 
  sum[ j ] - sum[ i ] = nums[ i ] + nums[ j-1 ]

- So, to find a subarray sum that falls within the range [lower, upper], we just need to find pairs (i, j) such that 
lower <= sum[ j ] - sum[ i ] <= upper.

# Approach
<!-- Describe your approach to solving the problem. -->
The Approach can be divided into following parts
### 1. Create a prefix sums array
```
let count = 0; // Initialize count variable
  const n = nums.length; // Get the length of the input array
  const sum = new Array(n + 1).fill(0); // Create a new array to store the cumulative sum of elements
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i]; // Calculate the cumulative sum of elements
  }
  ```
The reason we use a prefix or cumulative sum array is that it allows us to calculate the sum of any subarray in constant time. Without the prefix sum array, we would need to iterate over each element in the subarray to calculate its sum, which would take linear time.

We are interested in finding the number of subarrays where the sum of the elements is within a given range. By using a prefix sum array, we can calculate the sum of any subarray by subtracting two elements in the prefix sum array.

Here's how it works:

The sum of the subarray from index i to j-1 in the nums array is sum[j] - sum[i] where sum is the prefix sum array .

We iterates over each pair of indices (i, j) such that i < j. For each pair, it checks if sum[j] - sum[i] is within the range [lower, upper]. If it is, it increments the count.
### 2. MergeSort with some modifications
- This part is just the merge sort with the additional logic we described above. 
- We find a mid point and the helper function is then recursively called for the left half (left to mid) and the right half (mid + 1 to right) of the subarray. 
- Then with  while loop we count the number of range sums that cross the mid index. For each i in the left half, it finds how many indices l and r in the right half make sum[r] - sum[i] or sum[l] - sum[i] fall into the range [lower, upper].We find index  when sum[l] - sum[i] becomes greater than lower bound and move pointer l there. And we find index where  sum[r] - sum[i] becomes larger  than upper bound and move r there. This way we can get the number of valid ranges by just subtracting l from r.
```
while (i <= mid) {
      // Iterate through the left half
      while (l <= right && sum[l] - sum[i] < lower) l++; // Move the lower bound pointer until the sum is greater than or equal to the lower bound
      while (r <= right && sum[r] - sum[i] <= upper) r++; // Move the upper bound pointer until the sum is greater than the upper bound
      result += r - l; // Add the count of valid ranges to the result
      i++; // Move the pointer for the left half
    }
```
- The while loop used above relies on the right half being sorted.
so next part is sorting the array .
- The sorted array is created to merge the left and right halves in sorted order.
- Then we copy  the sorted array back to the sum array.


# Complexity
- ## Time complexity:  O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 
- ## Space complexity:  O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
var countRangeSum = function (nums, lower, upper) {
  let count = 0; // Initialize count variable
  const n = nums.length; // Get the length of the input array
  const sum = new Array(n + 1).fill(0); // Create a new array to store the cumulative sum of elements
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i]; // Calculate the cumulative sum of elements
  }
  count = helper(0, n); // Call the helper function with initial left and right pointers
  function helper(left, right) {
    // Define a helper function for recursion
    if (left === right) return 0; // Base case: if left and right pointers are the same, return 0
    const mid = Math.floor((left + right) / 2); // Calculate the middle index
    let leftCount = helper(left, mid); // Recursively call the helper function for the left half
    let rightCount = helper(mid + 1, right); // Recursively call the helper function for the right half
    let result = leftCount + rightCount; // Add the results from the left and right halves
    let i = left; // Initialize a pointer for the left half
    let l = mid + 1; // Initialize a pointer for the lower bound
    let r = mid + 1; // Initialize a pointer for the upper bound
    while (i <= mid) {
      // Iterate through the left half
      while (l <= right && sum[l] - sum[i] < lower) l++; // Move the lower bound pointer until the sum is greater than or equal to the lower bound
      while (r <= right && sum[r] - sum[i] <= upper) r++; // Move the upper bound pointer until the sum is greater than the upper bound
      result += r - l; // Add the count of valid ranges to the result
      i++; // Move the pointer for the left half
    }
    let sorted = new Array(right - left + 1); // Create a new array to store the sorted values
    let p1 = left; // Initialize a pointer for the left half
    let p2 = mid + 1; // Initialize a pointer for the right half
    let p = 0; // Initialize a pointer for the sorted array
    while (p1 <= mid || p2 <= right) {
      // Merge the left and right halves
      if (p1 > mid) {
        sorted[p++] = sum[p2++]; // If the left half is exhausted, add elements from the right half to the sorted array
      } else if (p2 > right) {
        sorted[p++] = sum[p1++]; // If the right half is exhausted, add elements from the left half to the sorted array
      } else {
        if (sum[p1] < sum[p2]) {
          sorted[p++] = sum[p1++]; // If the element in the left half is smaller, add it to the sorted array
        } else {
          sorted[p++] = sum[p2++]; // If the element in the right half is smaller, add it to the sorted array
        }
      }
    }
    for (let i = left; i <= right; i++) {
      sum[i] = sorted[i - left]; // Copy the sorted array back to the original array
    }
    return result; // Return the result
  }

  return count; // Return the final count
};
```