# Golang O(n) without map

**Author:** blckvia
**Votes:** 0
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/6030311/](https://leetcode.com/problems/hash-divided-string/solutions/6030311/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```golang []
func stringHash(s string, k int) string {
    var r string
    for i := 0; i < len(s); i += k {
        end := i + k
        if end > len(s) {
            end = len(s)
        }
        r += string(calculatePart(s[i:end]) + 'a')
    }

    return r
}

func calculatePart(s string) rune {
    var result rune
    for _, ch := range s {
        result += ch - 'a'
        fmt.Println(ch)
    }

    return result % 26
}
```