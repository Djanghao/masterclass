# Golang | Binary Search

**Author:** pikachuu
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3817650/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/3817650/)

---

# Code
```
func solve(dist []int, val int) float64 {
    sum := 0.0
    for i := 0; i < len(dist) - 1; i++ {
        sum += math.Ceil(1.0 * float64(dist[i]) / float64(val))
    }
    return sum + (1.0 * float64(dist[len(dist) - 1]) / float64(val))
}

func minSpeedOnTime(dist []int, hour float64) int {
    low := 1
    high := 10000000
    ans := math.MaxInt
    for low <= high {
        mid := low + (high - low) / 2
        if solve(dist, mid) > hour {
            low = mid + 1
        } else {
            if mid < ans {ans = mid}
            high = mid - 1
        }
    }
    if ans == math.MaxInt {return -1}
    return ans
}
```