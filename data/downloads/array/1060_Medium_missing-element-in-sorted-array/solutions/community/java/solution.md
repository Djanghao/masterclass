# Java: Binary search with explanation (can be adapted to Kth Missing Positive)

**Author:** annedevies
**Votes:** 12
**Link:** [https://leetcode.com/problems/missing-element-in-sorted-array/solutions/1640696/](https://leetcode.com/problems/missing-element-in-sorted-array/solutions/1640696/)

---

This question is similar to https://leetcode.com/problems/kth-missing-positive-number/

The key to understanding this question is to notice that we expect a strictly increasing sequence from the first number in the given array, otherwise some numbers are missing. In the kth missing positive number question, the strictly increasing sequence starts from 1.

For this question, we are given an example array: [4,7,9,10] - a perfect sequence without any missing elements would be [4, 5, 6, 7] and the first missing element will 1 more than the last element element in that sequence. 

However, if there are missing elements between the elements in the array, we need to account for that. The number of positive integers missing before each index is equal to nums[idx] - idx - nums[0]. This is because, if there are no missing elements, nums[idx] = nums[0] + idx + 0 (zero missing elements). If there are k missing elements, then nums[idx] = nums[0] + idx + k. To find k, we move the elements to the left of the equation thus giving us: k = nums[idx] - nums[0] - idx;

Let's try a few examples from the given array: [4, 7, 9, 10]
The number of missing elements before 4   (at idx 0) = nums[0] - nums[0] - 0 =   4 - 4 - 0 = **0**
The number of missing elements before 7   (at idx 1) = nums[1] - nums[0] - 1 =   7 - 4 - 1 = **2** -> 5, 6
The number of missing elements before 9   (at idx 2) = nums[2] - nums[0] - 2 =   9 - 4 - 2 = **3** -> 5, 6, 8
The number of missing elements before 10 (at idx 3) = nums[3] - nums[0] - 3 = 10 - 4 - 3 = **3** -> 5, 6, 8

To find the kth missing element, we need to find range of indices in which k missing elements can be found.
Let's say we want the third missing element, k = 3. 
Let's apply binary search on the sorted array, start with the full range of the sorted array: left = 0, right = nums.length - 1 = 3;
- Find the mid = left + (right - left) / 2 = 0 + (3 - 0) / 2 = 1;
- The number of missing elements before index 1 is 2 from the above calculation is 2. We need the 3th missing element, so we need to search further on the right side of the array so that we can get more missing elements.
- Update the left = mid + 1 = 2;
- Calculate the mid again = left + (right - left) / 2 = 2 + (3 - 2) / 2= 2
- The number of missing elements before index 2 is 3 from the above calculation. Since we have k elements, we move to the left half.
- Update right = mid - 1 = 1
- Now right is smaller than left so we break out of the loop.

The kth missing element is between nums[right] and nums[right + 1]. That is, between 7 and 9. The kth missing number can therefore be calculated through the equation below:
nums[right] + k minus number of elements missing before index right.
nums[right] + k - (nums[right] - nums[0] - right) = k - (nums[0] - right) = k + nums[0] + right

Now time for some code:
Missing Element in Sorted Array:

```
    private int missingElementsBeforeIndex(int index, int[] nums) {
        return nums[index] - nums[0] - index;
    }
    public int missingElement(int[] nums, int k) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {

            int mid = left + (right - left) / 2;
       
            // If number of positive integers
            // which are missing before arr[mid]
            // is less than k -->
            // continue to search on the right.
            if (missingElementsBeforeIndex(mid, nums) < k) {
                left = mid + 1;
            // Otherwise, go left.
            } else {
                right = mid - 1;
            }
        }
                
        // nums[right] + k - (nums[right] - nums[0] - right) = k - (nums[0] - right) = k + nums[0] + right
        
        return k + nums[0] + right;
   }
```

Kth Missing Positive Number
```
    // Time Complexity: O (log n)
    // Space Complexity: O(1)
    private int missingElementsBeforeIndex(int index, int[] nums) {
	    // The number of positive integers missing before arr[idx] is equal to arr[idx] - idx - 1
        return nums[index] - index - 1;
    }
    public int findKthPositive(int[] arr, int k) {        
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            // If number of positive integers
            // which are missing before arr[mid]
            // is less than k -->
            // continue to search on the right.
            if (missingElementsBeforeIndex(mid, arr) < k) {
                left = mid + 1;
            // Otherwise, go left.
            } else {
                right = mid - 1;
            }
        }
        
        // At the end of the loop, left = right + 1,
        // and the kth missing is in-between arr[right] and arr[right + 1].
        // The number of integers missing before arr[right] is
        // arr[right] - right - 1 -->
        // the number to return is
        // arr[right] + k - (arr[right] - right - 1) == k - (-right - 1) = k + right + 1

        return k + right + 1;
    }
```

Time Complexity: O(log n)
Space Complexity: O(1) 



*Please upvote if you found this helpful :)*