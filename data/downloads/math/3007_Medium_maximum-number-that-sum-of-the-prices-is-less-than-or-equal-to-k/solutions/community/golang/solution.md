# [Golang] Binary Search + Bit Manipulation

**Author:** user0440H
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4563714/](https://leetcode.com/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/solutions/4563714/)

---

# Code
```
func findMaximumNumber(k int64, x int) int64 {
  var left, right int64
  left, right = 1, int64(1e15)
  for left < right {
    mid := (right-left)/2 + left
    var priceSum int64
    var i int64
    // We try every bit position that must be set start from x and
    // we calculate the total numbers (up to mid) that have the current bit set.
    for i = int64(x); i < 60; i = i + int64(x) {
      priceSum += calc(mid, i)
    }
    if priceSum > k {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left - 1
}

// calc computes the numbers where the ith bit is set until num
func calc(num int64, i int64) int64 {
  var res int64
  num = num+1 // include 0 since that also contributes to the pattern
  plen := int64(1) << int64(i) // pattern length 01, 0011, 00001111, etc.
  p := num / plen       // number of full patterns
  res = p * plen/2      // number of ones in these patterns
  // We now also have to compute the remaining
  num %= plen
  // We have to subtract the number of zeros since they start with zeros
  // We have up to plen/2 zeros. num - plen/2 may be negative if the remaining
  // partial block is not even sufficient to host the zeros so we don't take
  // this into account.
  res = res + max(0, num - plen/2)
  return res
}
```