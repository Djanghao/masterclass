# Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

**Author:** aaadev
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/4989920/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/4989920/)

---

# Intuition
The problem asks to find the number of subarrays of length k in the given array arr whose average is greater than or equal to the given threshold.

# Approach
Initialize variables count to store the count of subarrays satisfying the condition, left and right pointers to denote the current subarray's boundaries, and sum to store the sum of elements in the current subarray.
Iterate through the array using two pointers, left and right, starting from index 0.
Update the sum by adding the element at the right pointer to it.
Check if the length of the current subarray (right - left + 1) is greater than or equal to k.
If the condition in step 4 is met, check if the average of the current subarray (sum / k) is greater than or equal to the threshold. If so, increment the count.
Update the sum by subtracting the element at the left pointer from it, and increment the left pointer to move the window.
Repeat steps 3-6 until the right pointer reaches the end of the array.
Return the count, which represents the number of subarrays satisfying the condition.
# Complexity
Time complexity: 

O(n), where 
n is the length of the input array arr. We iterate through the array once.
Space complexity: 

O(1), constant extra space is used.
# Code
```
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let count = 0;

    let left = 0,
        right = 0,
        sum = 0;

    while (right < arr.length) {
        // will sum eery time

        // when i got in the catch will i c left and inc right the nsub left then add right
        sum += arr[right];

        if ((right - left + 1) >= k) {
            if (sum / k >= threshold) count++;
            sum -= arr[left];
            left++;
        }

        right++;
    }
    return count;
}
```