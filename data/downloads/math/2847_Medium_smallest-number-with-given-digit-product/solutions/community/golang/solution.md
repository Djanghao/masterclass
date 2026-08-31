# [Golang] Number Theory

**Author:** user0440H
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4017443/](https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4017443/)

---

# Code
```
func smallestNumber(n int64) string {
  if n < 10 {
    return fmt.Sprintf("%d", n)
  }
  dec, ok := primeDecompose(n)
  if !ok {
    return "-1"
  }
  // We now have to convert all 2s and 3s. 5 and 7 can't be merged.
  // 2*2*2 = 8
  for dec[2] >= 3 {
    dec[8]++
    dec[2] -= 3
  }
  // 3*3 = 9
  for dec[3] >= 2 {
    dec[9]++
    dec[3] -= 2
  }
  // 2*3 = 6
  for dec[2] > 0 && dec[3] > 0 {
    dec[6]++
    dec[2]--
    dec[3]--
  }
  // 2*2 = 4
  for dec[2] >= 2 {
    dec[4]++
    dec[2] -= 2
  }
  var res strings.Builder
  for i := 1; i < 10 ; i++ {
    for dec[i] > 0 {
      res.WriteByte(byte(i + '0'))
      dec[i]--
    }
  }
  return res.String()
}

func primeDecompose(num int64) ([10]int, bool) {
  var res [10]int
  factor := 2
  for factor < 10 && int64(factor*factor) <= num {
    if num%int64(factor) == 0 {
      res[factor]++
      num /= int64(factor)
    } else {
      factor++
    }
  }
  if num > 1 && num < 10 {
    res[num]++
  }
  if num > 9 {
    return res, false
  }
  return res, true
}
```