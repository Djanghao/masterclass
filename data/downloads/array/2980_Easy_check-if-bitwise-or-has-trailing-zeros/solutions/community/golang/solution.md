# ☑️ Golang solution

**Author:** CodeMonkey80s
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5848089/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5848089/)

---

# Code
```golang []
func hasTrailingZeros(nums []int) bool {
    var c int
    for _, n := range nums {
        if n % 2 == 0 {
            c++
        }
        if c > 1 {
            return true
        }
    }

    return false
}
```