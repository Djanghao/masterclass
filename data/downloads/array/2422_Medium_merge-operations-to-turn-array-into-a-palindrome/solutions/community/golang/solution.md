# 2 pointers

**Author:** supercow
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/4318669/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/4318669/)

---

# Code
```
func minimumOperations(nums []int) int {
    crt := 0
    left := 0
    right := len(nums) - 1

    for left < right {
        if nums[left] == nums[right] {
            left++;
            right--;
        } else if (nums[left] > nums[right]) {
            nums[right - 1] = nums[right] + nums[right - 1]
            right--;
            crt++;
        } else if (nums[left] < nums[right]) {
            nums[left + 1] = nums[left] + nums[left + 1]
            left++;
            crt++;
        }
    }
    return crt;
}
```