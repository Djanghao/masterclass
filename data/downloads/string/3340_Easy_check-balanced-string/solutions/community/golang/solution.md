# Golang simple solution

**Author:** evanfang
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6015118/](https://leetcode.com/problems/check-balanced-string/solutions/6015118/)

---



# Code
```golang []
func isBalanced(num string) bool {
    var sum rune
    for i, n := range(num) {
        if i % 2 == 0 {
            sum += (n - '0')
        } else {
            sum -= (n - '0')
        }
    }
    return sum == 0
}
```