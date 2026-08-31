# Clean Go Solution. Sorting

**Author:** yrssl
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4672587/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4672587/)

---

# Intuition

Sort by the y-axis (descending)

# Approach

After sorting, start from the highest point and check x-axis of every other point, if it's more or equals increment the counter. It's important here to not count the points that gives us fences with other points in. That's why we are only considering the points with x-axis less than the previous ones.

# Complexity
- Time complexity: $$O(nlog(n) + n^2)$$ = $$O(n^2)$$

- Space complexity: $$O(1)$$


# Code
```
import "sort"
import "math"

func numberOfPairs(points [][]int) int {
    
    sort.Slice(points, func(i, j int) bool {
        if points[i][1] == points[j][1] {
            return points[i][0] < points[j][0]
        }
        return points[i][1] > points[j][1]
    })
        
    cnt := 0
    
    for i := 0; i < len(points); i++ {
        prevDiff := math.MaxInt
        for j := i + 1; j < len(points); j++ {
            diff := points[j][0] - points[i][0]
            if diff >= 0 && diff < prevDiff {
                prevDiff = diff
                cnt++
            }
        }
    }

    return cnt

}
```