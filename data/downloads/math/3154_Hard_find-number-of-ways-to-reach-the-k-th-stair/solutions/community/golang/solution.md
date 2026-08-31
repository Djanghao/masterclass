# nCr & top down solutions

**Author:** sitleon
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5180608/](https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/solutions/5180608/)

---

# nCr Solution
```
func waysToReachStair(k int) (ans int) {
    pasc := [32][32]int{{1}}
    for i := 1; i < len(pasc); i++ {
        pasc[i] = [32]int{1}
        for j := 1; j < len(pasc[i]); j++ {
            pasc[i][j] = pasc[i-1][j] + pasc[i-1][j-1]
        }
    }
    for x := 0; k + 1 >= 1<<x-x; x++ {
        if y := 1<<x-k; y >= 0 {
            ans += pasc[x+1][y]
        }
    }
    return ans
}
```

# Top down DP Solution
```
func waysToReachStair(k int) int {
    return dfs(map[[3]int]int{}, k, 1, 0, 1)
}

func dfs(mem map[[3]int]int, k, p, j int, down int) (ans int) {
    key := [3]int{p, j, down}
    if v, ok := mem[key]; ok {
        return v
    }
    if k == p {
        ans += 1
    }
    if down == 1 && p != 0 {
        ans += dfs(mem, k, p-1, j, 0)
    }
    if p + (1<<j)-1 <= k {
        ans += dfs(mem, k, p+1<<j, j+1, 1)        
    }
    mem[key] = ans
    return ans
}
```