# [Golang] BinarySearch

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3268189/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/3268189/)

---

# Code
```
func minimumTime(time []int, totalTrips int) int64 {
    maxTime := 0
    for i := 0; i < len(time); i++ {
        if time[i] > maxTime {
            maxTime = time[i]
        }
    }

    left, right := 1, maxTime * totalTrips
    for left < right {
        mid := (left+right)/2
        if isTimeEnough(time, mid, totalTrips) {
            right = mid
        } else {
            left = mid+1
        }
    }

    return int64(left)
}

func isTimeEnough(time []int, pivot, totalTrips int) bool {
    count := 0
    for i := 0; i < len(time); i++ {
        count += pivot / time[i]
    }
    
    return count >= totalTrips
}
```