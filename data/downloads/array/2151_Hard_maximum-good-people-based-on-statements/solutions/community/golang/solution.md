# Golang

**Author:** tw13
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/3651808/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/3651808/)

---

# Code
```
func maximumGood(statements [][]int) int {
    n := len(statements)
    maxCount := 0
    for i := 0; i < (1 << n); i++ {
        if isValid(i, statements) && numOnes(i) > maxCount {
            maxCount = numOnes(i)
        }
    }
    return maxCount
}

func isValid(mask int, statements [][]int) bool {
    n := len(statements)
    for i := 0; i < n; i++{
        if ((1<<i) & mask) == (1<<i) {
            for j := 0; j < n; j++ {
                if statements[i][j] != 2 && (statements[i][j]<<j) != (mask & (1<<j)) {
                    return false
                }
            }
        } 
    }
    return true
}

func numOnes(i int) int {
    count := 0
    for i > 0 {
        count += i & 1
        i >>= 1
    }
    return count
}


```