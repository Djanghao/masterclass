# Go Solution | Beats 93% | With Explanation

**Author:** zell_dev
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/4158929/](https://leetcode.com/problems/find-in-mountain-array/solutions/4158929/)

---

Approach to solve the question:
1) Determine the Peak: 
	Identify the peak of the mountain where values switch from increasing to decreasing.
2) Binary Searches:
	- Left Side: Perform a binary search on the left (increasing) side of the mountain.
	- Right Side: If the target isn't found on the left, perform a binary search on the right (decreasing) side of the mountain.
	- If the target is located in either search, return the corresponding index.
3) Handle Absent Target: 
	If the target isn't found in both searches, return -1.

Optimization Note: Given the constraint on the number of calls to mountainArr.get(), utilize a caching mechanism to store previously retrieved values during the search for the peak, minimizing redundant method calls.

\u2B50 If you found this solution helpful, kindly give it an upvote. It would mean a lot and motivate me to share more. Thank you and happy coding! 

```
var cache map[int]int

func findInMountainArray(target int, mountainArr *MountainArray) int {
    cache = make(map[int]int)
    n := mountainArr.length()
    
    left := 1
    right := n -2
    
    // Finding the peak idx
    for left != right {
        mid := (left + right) >> 1
        
        if getValue(mid, mountainArr) < getValue(mid + 1, mountainArr) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    
    peak := right
    
    
    // Searching the left side of the mountain array
    left = 0
    right = peak
    
    for left <= right {
        mid := (left + right) >> 1
        midValue := getValue(mid, mountainArr)
        
        if midValue == target {
            return mid
        } else if (midValue < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    // Searching the right side of the mountain array
    left = peak
    right = n - 1
    
    for left <= right {
        mid := (left + right) >> 1
        midValue := getValue(mid, mountainArr)
        
        if midValue == target {
            return mid
        } else if (midValue > target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    // Target not found
    return -1
}


func getValue(idx int, mountainArr *MountainArray) int {
    val, exists := cache[idx]
    if exists {
        return val
    }
    
    // Retrieve and insert into the cache
    val = mountainArr.get(idx)
    cache[idx] = val
    return val
}
```