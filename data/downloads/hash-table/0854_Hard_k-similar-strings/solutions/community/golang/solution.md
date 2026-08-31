# 👍Runtime 1 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/5079528/](https://leetcode.com/problems/k-similar-strings/solutions/5079528/)

---

# Code
```
func kSimilarity(a string, b string) int {
    ans := 0
    achars := []byte(a)
    bchars := []byte(b)
    ans += getAllPerfectMatches(achars, bchars)
    for i := 0; i < len(achars); i++ {
        if achars[i] == bchars[i] {
            continue
        }
        return ans + checkAllOptions(achars, bchars, i, b)
    }
    return ans
}

func checkAllOptions(achars []byte, bchars []byte, i int, b string) int {
    ans := 1<<31 - 1
    for j := i + 1; j < len(achars); j++ {
        if achars[j] == bchars[i] && achars[j] != bchars[j] {
            achars[i], achars[j] = achars[j], achars[i]
            newStr := string(achars)
            ans = min(ans, 1+kSimilarity(newStr, b))
            achars[i], achars[j] = achars[j], achars[i] // backtrack
        }
    }
    return ans
}

func getAllPerfectMatches(achars []byte, bchars []byte) int {
    ans := 0
    for i := 0; i < len(achars); i++ {
        if achars[i] == bchars[i] {
            continue
        }
        for j := i + 1; j < len(achars); j++ {
            if achars[j] == bchars[i] && bchars[j] == achars[i] {
                achars[i], achars[j] = achars[j], achars[i]
                ans++
                break
            }
        }
    }
    return ans
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```