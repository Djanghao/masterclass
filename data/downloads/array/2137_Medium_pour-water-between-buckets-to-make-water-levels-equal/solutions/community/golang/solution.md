# [Golang] Binary Search easy to understand

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/3643423/](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/3643423/)

---

# Complexity
- Time complexity: O(N Log N)

- Space complexity: O(1)

# Code
```
func equalizeWater(buckets []int, loss int) float64 {
  min := math.MaxInt32
  var sum int
  for i := 0; i < len(buckets); i++ {
    if buckets[i] < min {
      min = buckets[i]
    }
    sum += buckets[i]
  }
  gain := float64(100 - loss)/100 // keep gain so we can easily compute how much we need to fill in the gap
  left, right := float64(min), float64(sum) / float64(len(buckets))
  for abs(left - right) > 0.00001 {
    mid := left + (right - left)/2
    // We now need to find out if we can 
    var extra float64
    for i := 0; i < len(buckets); i++ {
      if float64(buckets[i]) < mid {
        // Take the needed amount from the extra including the loss
        extra -= (mid - float64(buckets[i])) / gain
      } else if float64(buckets[i]) > mid {
        // Just add the extra gallons of water remaining in the current bucket
        // We don't include loss here because we'll be double counting otherwise.
        extra += (float64(buckets[i]) - mid)
      }
    }
    if extra >= 0 {
      // If we have extra, let's try to pour more in each bucket (maximize)
      left = mid
    } else {
      right = mid
    }
  }
  return left
}

func abs(a float64) float64 {
  if a < 0 {
    return -a
  }
  return a
}
```