# No map Go solution, O(1) space and time, beats 100%

**Author:** zerosandones
**Votes:** 5
**Link:** [https://leetcode.com/problems/happy-number/solutions/375547/](https://leetcode.com/problems/happy-number/solutions/375547/)

---

First, it's important to note that both cycle detection and hash map solutions are O(1) time and space -- per @Vernies explanation here (https://leetcode.com/problems/happy-number/discuss/356519/Time-and-space-complexity-explanation) for all positive 32 bit integers the maximum number of cycles is 16 and the maximum number of digits is 10, ie: both are bounded and the time complexity is independent of `n`, and therefore constant.

But as a mental exercise, here is the cycle detection solution in Go:
```
func isHappy(n int) bool {
    x, y := n, n
    for {        
        x = digitSum(x)
        y = digitSum(digitSum(y))
        if x == 1 || y == 1 {
            return true
        }
        if x == y {
            return false
        }
    }
}

func digitSum(n int) int {
    var digitSlice []int
    for n != 0 {
        digitSlice = append(digitSlice, n%10)
        n /= 10
    }

    var sum int
    for _, v := range digitSlice {
        sum += v*v
    }
    return sum
}
```
