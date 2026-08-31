# [Golang] Line Sweep + Binary Search + Easy Understanding

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3933662/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3933662/)

---

# Code
```
func maxPower(stations []int, r int, k int) int64 {
  n := len(stations)
  power := make([]int64, n)
  for i := 0; i < len(stations); i++ {
    left, right := i - r, i + r + 1
    if left < 0 {
      left = 0
    }
    power[left] += int64(stations[i])
    if right < n {
      power[right] -= int64(stations[i])
    }
  }
  minP, maxP := power[0], power[0]
  for i := 1; i < n; i++ {
    power[i] += power[i-1]
    minP = min(minP, power[i])
    maxP = max(maxP, power[i])
  }
  left, right := minP, maxP + int64(k)
  var res int64
  for left <= right {
    mid := left + (right - left)/2
    if check(power, mid, r, int64(k)) {
      res = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return res
}

func check(power []int64, target int64, r int, k int64) bool {
  q := list.New() // Queue to remove the stations that fall out of range
  var extra int64 // additional stations that are in range.
  for i := 0; i < len(power); i++ {
    for q.Len() > 0 && q.Front().Value.([2]int64)[0] <= int64(i) {
      extra += q.Remove(q.Front()).([2]int64)[1]
    }
    if power[i] + extra < target {
      needed := target - power[i] - extra
      if k < needed {
        return false
      }
      extra += needed
      k -= needed
      if i + r + 1 < len(power) {
        // It is optimal to find a place farther from the current position that is still
        // within the range so we can get as many stations as possible. 
        // We're building the stations at i + r so its range is going to be from [i...i+2*r]
        q.PushBack([2]int64{int64(i+2*r+1), -needed})
      }
    }
  }
  return true
} 

func max(a, b int64) int64 {
  if a > b {
    return a
  }
  return b
}

func min(a, b int64) int64 {
  if a < b {
    return a
  }
  return b
}
```