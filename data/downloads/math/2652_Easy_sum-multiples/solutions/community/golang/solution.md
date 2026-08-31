# Python/Go | Easy Solution✅

**Author:** gmanayath
**Votes:** 7
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/3488452/](https://leetcode.com/problems/sum-multiples/solutions/3488452/)

---


# Python
```
class Solution:
    def sumOfMultiples(self, n: int) -> int:
        sum = 0
        for i in range(1,n+1):
            if i%3 == 0 or i%5 == 0 or i%7 == 0:
                sum += i
        return sum
```

# GO
```
func sumOfMultiples(n int) int {
    sum := 0
    i := 0
    for i <= n{
        if i%3 == 0 || i%5 == 0 || i%7 == 0 {
            sum += i
        }
        i++
    }
    return sum
}
```