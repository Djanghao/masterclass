# [Golang] Counting numbers

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/3766627/](https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/3766627/)

---

Time Complexity: O(10^6) because the max value is 100
Space Complexity: O(1)
# Code
```
func singleDivisorTriplet(nums []int) int64 {
  var res int64
  var counts [101]int
  for i := 0; i < len(nums); i++ {
    counts[nums[i]]++
  } 
  for x := 1; x <= 100; x++ {
    for y := x+1; y <= 100; y++ {
      // Consider cases for using just two numbers
      // We have two options here: 2*x + y or x + 2*y
      if counts[x] > 1 && counts[y] > 0 { // 2*x + y
        sum := 2*x + y
        if sum%y == 0 && sum%x != 0 {
          // We need to choose 2 numbers from counts[x] (nCr)
          res += int64(((counts[x] * (counts[x]-1)) / 2) * counts[y] * 6)
        }
      }
      if counts[x] > 0 && counts[y] > 1 { // x + 2*y
        sum := x + 2*y
        if sum%x == 0 && sum%y != 0 {
          res += int64(((counts[y] * (counts[y]-1)) / 2) * counts[x] * 6)
        }
      }
      // Iterate here for using 3 numbers
      for z := y+1; z <= 100; z++ {
        if counts[x] > 0 && counts[y] > 0 && counts[z] > 0 {
          sum := x + y + z
          var divisors int
          if sum%x == 0 {
            divisors++
          }
          if sum%y == 0 {
            divisors++
          }
          if sum%z == 0 {
            divisors++
          }
          if divisors == 1 {
            res += int64(6 * counts[x] * counts[y] * counts[z])
          }
        }
      }
    }
  }
  return res
}
```