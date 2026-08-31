# Binary Search Solution

**Author:** teenuburi
**Votes:** 1
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3815719/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3815719/)

---



# Complexity
- Time complexity:
O(logn)

- Space complexity:
O(1)

# Code
```
class Solution {
    func peakIndexInMountainArray(_ arr: [Int]) -> Int {
        var i = 0
        var j = arr.count - 1

        while (i<j) {
            let mid = (i+j)/2
            if arr[mid-1] < arr[mid] && arr[mid+1] < arr[mid] {
                return mid
            } else if arr[mid-1] < arr[mid] {
                i = mid+1
            } else {
                j = mid
            }
        }
        return i
    }
}


[1,4,7,12,15,15,8]
```