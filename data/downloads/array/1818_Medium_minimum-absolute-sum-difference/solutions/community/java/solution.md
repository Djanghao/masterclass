# 📖 Detailed explanation | binary search | Java

**Author:** RedGreenCode
**Votes:** 39
**Link:** [https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1176474/](https://leetcode.com/problems/minimum-absolute-sum-difference/solutions/1176474/)

---


## Problem

We are given two arrays, `nums1` and `nums2`, both of the same length `n` and containing only positive integers. We can associate each array index `i` with a pair of elements, one from `nums1` and the other from `nums2`. Define the **absolute difference** at position `i` as the absolute value of the difference between the elements: `|nums1[i] - nums2[i]|`. The **absolute sum difference** of the two arrays is the sum of the absolute differences for each pair of elements at positions from `0` to `n-1`.

The goal of this problem is to pick two elements from `nums1` -- call them `nums1[i]` and `nums1[j]` -- in such a way that if we overwrite element `nums1[i]` with element `nums1[j]`, we will get the smallest possible absolute sum difference between `nums1` and `nums2`. Return this **minimum absolute sum difference** mod `10^9 + 7`.

## Solution

**Intuition**

Since we are only allowed to replace one element in `nums1`, the solution is to pick the one that will reduce the absolute sum difference the most. In the best case, we would take the largest absolute difference and reduce it to `0`. We can do that if we find an element in `nums1` equal to the element of `nums2` at the position where the maximum absolute difference occurs. If that isn't possible, the next best option is to find a replacement value where the difference between the old difference and the new difference is as large as possible.

**Algorithm Ideas**

Can we make one pass through `nums1`, checking each position `i` and finding the best possible replacement value for each `nums1[i]`? For each `i`, we could try to find the best of these three possible `nums1[j]` values:

* `nums1[j] == nums2[i]`. This is the best choice if it exists, since the absolute difference will be `0`, which is as small as an absolute value can be.

* A `nums1[j]` that is as large as possible, but less than `nums2[i]`. This minimizes the difference using a smaller number.

* A `nums1[j]` that is as small as possible but larger than `nums2[j]`. This minimizes the difference using a larger number.

How can we efficiently find one or more of these three `nums1` values? Here's an idea: Combine `nums1` and `nums2` in a single array, remembering which array each number goes with. For example, use an `int[][]`, where the first element is the source number and the second element is either `1` or `2`, depending on whether it comes from `nums1` or `nums2`. Then sort the array in ascending order by the first element. The outcome: For each `nums2` value, all lower `nums1` values will be to the left and all higher `nums1` values will be to the right. We could then iterate through this combined array. Whenever we encountered a `nums2` value, we could check the previous and next `nums1` values to see which one works best.

This seems like a reasonably efficient solution. It requires sorting `2n` integers, so that's `O(n log n)`. And then there's a linear search through `2n` integers, which is `O(n)`. However, if the `nums2` values are mostly clustered together with a few outliers, we could end up scanning through a large portion of the combined array without finding any `nums2` values to process. Let's see if we can improve on this algorithm.

Assume we have `O(n log n)` time to work with. In addition to sorting, another operation that takes `O(n log n)` is looking up `n` values when each lookup takes `O(log n)` time, as in binary search.

To efficiently search for a value in an array using binary search, the array needs to be sorted. Rather than sorting both arrays, what if we just sort `nums1`, since that's the array we need to look through to find the best replacement. This will allow us to iterate through the (unsorted) `nums2` array and use binary search on `nums1` to find the best replacement value for each position.

**Algorithm**

Putting the algorithm ideas together, we can solve the problem using these steps:

* Make a copy of `nums1`, and sort it. Call this sorted array `snums1`.
* For each element `n2` in `nums2`
	* Calculate the absolute difference at the current position, `|nums1[i] - nums2[i]|`.
	* Using binary search on `snums1`, find 1) The largest element less than or equal to `n2` and 2) The smallest element greater than or equal to `n2`.
	* Calculate a new absolute difference with `n2` for each of these two elements, and calculate how much each one improves on the baseline difference. Store the best value found so far, along with its location.

* If we found a better `nums1` value, replace the original value with the better value.
* For each element in the updated `nums1`, calculate the absolute difference with the corresponding element in `nums2`, and maintain the overall sum mod `10^9 + 7`.
* Return the calculated sum.

**Code**

Implementation note: I implemented binary search manually. You can use library functions on a set instead. To see how to do this in C++ using `lower_bound`, see [votrubac's solution](https://leetcode.com/problems/minimum-absolute-sum-difference/discuss/1141339/C++-O%28n-log-n%29). For the Java version using `floor` and `ceiling` on `TreeSet`, see [MichaelZ's solution](https://leetcode.com/problems/minimum-absolute-sum-difference/discuss/1141339/C++-O%28n-log-n%29/897365) in the comments.

```
class Solution {
    public int minAbsoluteSumDiff(int[] nums1, int[] nums2) {
        int mod = (int)1e9+7;

        // Sorted copy of nums1 to use for binary search
        int[] snums1 = nums1.clone();
        Arrays.sort(snums1);
        
        int maxDiff = 0;    // maximum difference between original and new absolute diff
        int pos = 0;        // where the maximum difference occurs
        int newn1 = 0;      // nums1 value to copy to nums1[pos]

        // For each array position i from 0 to n-1, find up to two elements
        // in nums1 that are closest to nums2[i] (one on each side of nums2[i]).
        // Calculate a new absolute difference for each of these elements.
        for (int i=0; i<nums2.length; i++) {
            int n2 = nums2[i];
            int origDiff = Math.abs(nums1[i] - n2);
            
            // Find the largest element in nums1 that is less than or equal to
            // the current element in nums2, if such an element exists.
            int floor = arrayFloor(snums1, n2);
            if (floor > Integer.MIN_VALUE) {
                // If a valid element exists, calculate a new absolute difference
                // at the current position, and calculate how much smaller this is
                // than the current absolute difference. If the result is better
                // than what we have seen so far, update the maximum difference and
                // save the data for the current position.
                int newDiff = Math.abs(floor - n2);
                int diff = origDiff - newDiff;
                if (diff > maxDiff) {
                    pos = i;
                    newn1 = floor;
                    maxDiff = diff;
                }
            }
            
            // Find the smallest element in nums1 that is greater than or equal to
            // the current element in nums2, if such an element exists.
            int ceiling = arrayCeiling(snums1, n2);
            if (ceiling < Integer.MAX_VALUE) {
                // Same as above
                int newDiff = Math.abs(ceiling - n2);
                int diff = origDiff - newDiff;
                if (diff > maxDiff) {
                    pos = i;
                    newn1 = ceiling;
                    maxDiff = diff;
                }
            }
        }

        // If we found a replacement value, overwrite the original value.
        if (newn1 > 0) {
            nums1[pos] = newn1;
        }
        
        // Calculate the absolute sum difference with the replaced value.
        int sum = 0;
        for (int i=0; i<nums1.length; i++) {
            sum = (sum + Math.abs(nums1[i] - nums2[i])) % mod;
        }
        
        return sum;
    }


    //
    // Array versions of TreeSet.floor and TreeSet.ceiling
    //
    
    // Greatest element less than or equal to val
    private int arrayFloor(int[] arr, int val) {
        int lo = 0;
        int hi = arr.length-1;
        int max = Integer.MIN_VALUE;
        
        while (lo <= hi) {
            int mid = lo+(hi-lo)/2;
            if (arr[mid] <= val) {
                max = arr[mid];
                lo = mid+1;
            } else {
                hi = mid-1;
            }
        }
        
        return max;
    }
    
    // Smallest element greater than or equal to val
    private int arrayCeiling(int[] arr, int val) {
        int lo = 0;
        int hi = arr.length-1;
        int min = Integer.MAX_VALUE;
        
        while (lo <= hi) {
            int mid = lo+(hi-lo)/2;
            if (arr[mid] >= val) {
                min = arr[mid];
                hi = mid-1;
            } else {
                lo = mid+1;
            }
        }
        
        return min;
    }
}
```
