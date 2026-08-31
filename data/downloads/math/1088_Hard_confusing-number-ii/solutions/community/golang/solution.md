# Golang | DFS

**Author:** tw13
**Votes:** 2
**Link:** [https://leetcode.com/problems/confusing-number-ii/solutions/3083612/](https://leetcode.com/problems/confusing-number-ii/solutions/3083612/)

---

# Code
```
func confusingNumberII(n int) int {
    return dfs(0, n)
}

func dfs(num int, n int) int {
    if num > n {
        return 0
    }

    count := 0
    if isConfusing(num) {
        count++
    }

    for _, digit := range []int{0,1,6,8,9} {
        if num == 0 && digit == 0 {
            continue
        }
        count += dfs(num*10+digit, n)
    }
    return count
}

func isConfusing(n int) bool {
    rotate := []int {0,1,-2,-3,-4,-5,9,-7,8,6}
    digitList := []int{}
    for n > 0 {
        digitList = append(digitList, n%10)
        n /= 10
    }
    lo, hi := 0, len(digitList)-1
    for lo <= hi {
        if rotate[digitList[lo]] != digitList[hi] {
            return true
        }
        lo++
        hi--
    }
    return false
}
```