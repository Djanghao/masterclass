# [GO] Newton's Method Solution

**Author:** harotobira
**Votes:** 5
**Link:** [https://leetcode.com/problems/valid-perfect-square/solutions/559495/](https://leetcode.com/problems/valid-perfect-square/solutions/559495/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Valid Perfect Square.
Memory Usage: 1.9 MB, less than 100.00% of Go online submissions for Valid Perfect Square.
```
func isPerfectSquare(num int) bool {
    if num < 2{
        return true
    }
    
    x := num / 2
    for x * x > num{
        x = (x+num/x)/2
    }
    
    return x * x == num 
}
```