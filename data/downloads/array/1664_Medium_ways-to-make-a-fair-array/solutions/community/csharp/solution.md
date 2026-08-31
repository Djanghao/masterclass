# C# Prefix Sum Technique with Optimized Iterative Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5699690/](https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5699690/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Instead of brute-forcing through every index and calculating the sums (which would be inefficient for large arrays), we can leverage prefix sums to compute the result efficiently.

Prefix sums: Calculate the prefix sums for even and odd indices up to the current index.
Total sums: Compute the total sum of even and odd indexed elements in the original array.
When you remove an element at index i, the array is split into two parts: the part before i and the part after i. After removal, the even and odd indices will shift based on whether i is even or odd.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Total Sums: The total sum of even-indexed and odd-indexed elements is calculated in the first loop.
//  Prefix Sums: As you iterate through the array, you dynamically adjust the sums after "removing" the
//  element at index 'i'. By subtracting it from the respective total (either 'totalEven' or 'totalOdd').
//  Checking Fairness: For each removal, the condition 'leftEven + totalOdd == leftOdd + totalEven' checks
//  if the remaining sums of the even and odd indexed elements are equal.
//  Counting valid Indices: If the condition holds true for a particular index, the 'count' is incremented.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n). Solution only requires a single pass through the array to compute the prefix sums and check conditions.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(1): Constant because only a few variables are used for calculation, independent of the input size.
___

# Code
```csharp []
public class Solution {
    public int WaysToMakeFair(int[] nums) {
        int n = nums.Length;
        
        // Total sum of even and odd indexed elements
        int totalEven = 0, totalOdd = 0;
        for (int i = 0; i < n; i++) {
            if (i % 2 == 0) {
                totalEven += nums[i];
            } else {
                totalOdd += nums[i];
            }
        }
        
        int leftEven = 0, leftOdd = 0;
        int count = 0;
        
        for (int i = 0; i < n; i++) {
            // Remove the current element and check the condition
            if (i % 2 == 0) {
                totalEven -= nums[i];
            } else {
                totalOdd -= nums[i];
            }
            
            // Check if remaining parts are fair
            if (leftEven + totalOdd == leftOdd + totalEven) {
                count++;
            }
            
            // Update the left prefix sums after considering the current element
            if (i % 2 == 0) {
                leftEven += nums[i];
            } else {
                leftOdd += nums[i];
            }
        }
        
        return count;
    }
}

//  Total Sums: The total sum of even-indexed and odd-indexed elements is calculated in the first loop.
//  Prefix Sums: As you iterate through the array, you dynamically adjust the sums after "removing" the
//  element at index 'i'. By subtracting it from the respective total (either 'totalEven' or 'totalOdd').
//  Checking Fairness: For each removal, the condition 'leftEven + totalOdd == leftOdd + totalEven' checks
//  if the remaining sums of the even and odd indexed elements are equal.
//  Counting valid Indices: If the condition holds true for a particular index, the 'count' is incremented.
```