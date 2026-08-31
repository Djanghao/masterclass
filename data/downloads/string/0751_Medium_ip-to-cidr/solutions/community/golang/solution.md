# Golang solution (bitwise operations)

**Author:** yayaha
**Votes:** 3
**Link:** [https://leetcode.com/problems/ip-to-cidr/solutions/3623775/](https://leetcode.com/problems/ip-to-cidr/solutions/3623775/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import (
    "fmt"
    "strings"
    "strconv"
    "math/bits"
)

func ipToInts(ip string) int {
    ans := 0
    for _, b := range strings.Split(ip, ".") {
        x, _ := strconv.Atoi(b)
        ans = (ans << 8) + x
    }
    return ans
}

func toCIDR(num, bits int) string {
    ans := make([]string, 4)
    for i := 3; i >= 0; i-- {
        ans[i] = strconv.Itoa(num & 0xFF)
        num = num >> 8
    }
    return strings.Join(ans, ".") + "/" + fmt.Sprint(bits)
}

func ipToCIDR(ip string, n int) []string {
    var ans []string
    num := ipToInts(ip)
    for n > 0 {
        bits := bits.TrailingZeros32(uint32(num))
        for 1 << bits > n {
            bits -= 1
        }
        cnt := 1 << bits
        ans = append(ans, toCIDR(num >> bits << bits, 32 - bits))
        num += cnt
        n -= cnt
    }
    return ans
}
```