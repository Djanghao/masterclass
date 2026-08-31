# Two Pointer & Hash Map Solutions Explained

**Author:** muhammadfarhankt
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/4808920/](https://leetcode.com/problems/minimum-common-value/solutions/4808920/)

---

# Intuition
- The problem seems to be finding the common element between two sorted arrays. One approach could be using a hashmap to store elements of the first array and then checking if each element of the second array exists in the hashmap. Another approach could be to use two pointers to iterate through both arrays simultaneously, comparing elements at each step until a common element is found.


# Approach
### Hashmap Approach:
1. Create a hashmap to store elements of the first array.
1. Iterate through the second array, checking if each element exists in the hashmap.
1. If a common element is found, return it.
1. If no common element is found, return -1.

### Two Pointer Approach:
1. Initialize two pointers, one for each array, pointing to the beginning.
Iterate through both arrays simultaneously until reaching the end of either array.
1. Compare elements pointed by the two pointers at each step.
1. If the elements are equal, return the common element.
1. If the element pointed by the first pointer is smaller, move the first pointer to the next element.
1. If the element pointed by the second pointer is smaller, move the second pointer to the next element.
1. Repeat until a common element is found or one of the arrays ends.
If no common element is found, return -1.

# Complexity
## Hashmap Approach:
- Time complexity: O(m+n), where m and n are the lengths of the two arrays. This complexity arises from iterating through both arrays once.
- Space complexity: O(m), where m is the length of the first array. This is due to the hashmap storing elements of the first array.

## Two Pointer Approach:
- Time complexity: O(m+n), where m and n are the lengths of the two arrays. This complexity arises from iterating through both arrays once.
- Space complexity: O(1), as no extra space is used apart from a few variables for pointers.

# Comparison
## Hashmap Approach:

- In this scenario, the hashmap approach might seem overkill because the arrays are sorted. Since the arrays are sorted, we can utilize this property to optimize the solution further.
- While the hashmap approach works efficiently for unsorted arrays, it requires additional space proportional to the size of the first array, which might not be necessary here.
- This approach might be more suitable if the arrays were unsorted or if there was a need to handle duplicate elements efficiently.

## Two Pointer Approach:

- The two-pointer approach takes advantage of the fact that the arrays are sorted.
- It is memory-efficient as it doesn't require additional space apart from a few variables.
- It is also faster compared to the hashmap approach because it directly compares elements without the overhead of hashmap operations.
This approach aligns better with the problem's requirement of sorted arrays and doesn't require extra space, making it a more suitable choice for this scenario.

#### So, in this scenario, the two-pointer approach is more appropriate and efficient for finding the common element between two sorted arrays compared to the hashmap approach.

# Code
```
func getCommon(nums1 []int, nums2 []int) int {
    for i,j := 0, 0; i<len(nums1) && j<len(nums2); {
        if nums1[i] == nums2[j] {
            return nums1[i]
        } else if nums1[i] < nums2[j] {
            i++
        } else {
            j++
        }
    } 
    return -1
    // nums1Map := make(map[int]bool, 0)
    // for _, num := range nums1 {
    //     nums1Map[num] = true
    // }
    // for _, num := range nums2 {
    //     if nums1Map[num] {
    //         return num
    //     }
    // }
    // return -1
}
```