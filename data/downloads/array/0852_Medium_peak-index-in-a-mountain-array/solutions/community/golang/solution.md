# Golang simple solution

**Author:** mixx3
**Votes:** 3
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3269335/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3269335/)

---

# Approach
Compate mid with neigbours

# Complexity
- Time complexity:
 O(log(n))

- Space complexity:
O(1)

# Code
```
func peakIndexInMountainArray(arr []int) int {
    l, r := 1, len(arr) - 2
    for l <= r{
        mid := (l + r) / 2
        if arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]{
            return mid
        }
        if arr[mid-1] < arr[mid] && arr[mid] < arr[mid+1]{
            l = mid + 1
        }else{
            r = mid - 1
        }
    }
    return -1
}
```