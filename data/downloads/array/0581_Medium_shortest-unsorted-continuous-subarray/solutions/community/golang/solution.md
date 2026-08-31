# Golang implementation

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/3442861/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/3442861/)

---

1. Initialize the end index to -1 and the maximum value seen so far to the first element of the array.
2. Traverse the array from left to right, starting from the second element, and for each element:
        If the current element is less than the maximum value seen so far, update the end index to the current index.
        Otherwise, update the maximum value seen so far to the current element.
3. Initialize the start index to the length of the array and the minimum value seen so far to the last element of the array.
4. Traverse the array from right to left, starting from the second-to-last element, and for each element:
        If the current element is greater than the minimum value seen so far, update the start index to the current index.
        Otherwise, update the minimum value seen so far to the current element.
5. If the end index is greater than the start index, return the length of the subarray that needs to be sorted, which is endIndex - startIndex + 1.
6. Otherwise, return 0, indicating that the array is already sorted in non-decreasing order.

# Code
```
func findUnsortedSubarray(nums []int) int {

    endIndex := -1
    maximum := nums[0]

    for i := 1; i < len(nums); i++{
        if nums[i] < maximum{
            endIndex = i
        }else{
            maximum = nums[i]
        }
    }

    startIndex := len(nums)
    minimum := nums[len(nums)-1]
    for i:= len(nums) -2; i > -1; i--{
        if nums[i] > minimum{
            startIndex = i
        }else{
            minimum = nums[i]
        }
    }
    if endIndex - startIndex > 0{
        return endIndex - startIndex + 1
    }

    return 0
}
```