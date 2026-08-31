# Linear solution in golang

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/2053624/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/2053624/)

---

```go
func findEvenNumbers(digits []int) []int {
  var counts [10]int
  for _, digit := range digits {
    counts[digit]++
  }
  var res []int
  for num := 100; num <= 998; num = num+2 {
    var numc [10]int
    numc[num%10]++
    numc[(num/10)%10]++
    numc[(num/100)%10]++
    found := true
    for i := 0; i < 10; i++ {
      if counts[i] < numc[i] {
        found = false
        break
      }
    }
    if found {
      res = append(res, num)
    }
  }
  return res
}
```