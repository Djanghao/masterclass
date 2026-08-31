# Golang 0ms O(n) time O(1) space no strconv

**Author:** zainkai
**Votes:** 5
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/483456/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/483456/)

---

```
func subtractProductAndSum(n int) int {
  sum, product := 0, 1
  
  for n > 0 {
    mod := n % 10
    sum += mod
    product *= mod
    
    n /= 10
  }
  
  return product - sum
}
```