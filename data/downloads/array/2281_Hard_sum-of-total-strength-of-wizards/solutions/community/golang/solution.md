# 👍Runtime 99 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/5339269/](https://leetcode.com/problems/sum-of-total-strength-of-wizards/solutions/5339269/)

---

# Code
```
func totalStrength(a []int) int {
    const MOD int64 = 1000000007
    n := len(a)
    prefix := make([]int64, n+1)
    prefixSum := make([]int64, n+2)

    for i := 0; i < n; i++ {
        prefix[i+1] = (prefix[i] + int64(a[i])) % MOD
    }

    for i := 0; i <= n; i++ {
        prefixSum[i+1] = (prefixSum[i] + prefix[i]) % MOD
    }

    left := make([]int, n)
    right := make([]int, n)

    for i := range left {
        left[i] = -1
    }

    stack := []int{}
    for i := 0; i < n; i++ {
        for len(stack) > 0 && a[stack[len(stack)-1]] >= a[i] {
            stack = stack[:len(stack)-1]
        }
        if len(stack) > 0 {
            left[i] = stack[len(stack)-1]
        }
        stack = append(stack, i)
    }

    stack = []int{}
    for i := range right {
        right[i] = n
    }
    for i := n - 1; i >= 0; i-- {
        for len(stack) > 0 && a[stack[len(stack)-1]] > a[i] {
            stack = stack[:len(stack)-1]
        }
        if len(stack) > 0 {
            right[i] = stack[len(stack)-1]
        }
        stack = append(stack, i)
    }

    var res int64
    for i := 0; i < n; i++ {
        l := left[i]
        r := right[i]
        part1 := (prefixSum[r+1] - prefixSum[i+1]) * int64(i-l) % MOD
        part2 := (prefixSum[i+1] - prefixSum[l+1]) * int64(r-i) % MOD
        product := (part1 - part2) % MOD
        if product < 0 {
            product += MOD
        }
        res = (res + (product * int64(a[i])) % MOD) % MOD
    }

    if res < 0 {
        res += MOD
    }
    return int(res % MOD)
}

```