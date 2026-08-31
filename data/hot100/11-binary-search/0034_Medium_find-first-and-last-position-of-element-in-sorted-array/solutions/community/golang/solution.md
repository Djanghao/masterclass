# go binary

**Author:** johnson_xie
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1592917/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1592917/)

---

```
func searchRange(nums []int, target int) []int {
    if len(nums) == 0 {
        return []int{-1, -1}
    }
    return []int{binaryLeft(nums, target), binaryRight(nums, target)}
}


func binaryLeft(nums []int, target int) int {
    left, right := 0, len(nums)-1
    
    for left < right {
        mid := (right + left)/2
        if nums[mid] < target {
            left = mid + 1
        } else {
            right = mid
        }
    }
    if nums[left] == target {
        return left
    } 
    return -1
}


func binaryRight(nums []int, target int) int {
    left, right := 0, len(nums)-1
    
    for left < right {
        mid := (right + left)/2 + 1
        if nums[mid] > target {
            right = mid - 1
        } else if nums[mid] <= target {
            left = mid
        }
    }
    if nums[left] == target {
        return left
    } 
    return -1
}
```