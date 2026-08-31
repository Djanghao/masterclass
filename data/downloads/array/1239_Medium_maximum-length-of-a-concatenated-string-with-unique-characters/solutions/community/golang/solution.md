# Go golang 0ms solutions

**Author:** Leaf_Peng
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/558589/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/558589/)

---

```go
func maxLength(arr []string) int {
    isUnique := func(s string) bool {
        charM := make(map[rune]bool)
        for _, ch := range s {
            if charM[ch] {
                return false
            }
            charM[ch] = true
        }
        return true
    }
    var backtrack func(int, string) int 
    backtrack = func(index int, cur string) int {
        if !isUnique(cur) {
            return 0
        }
        maxLen := len(cur)
        for i := index; i < len(arr); i++ {
            nextLen := backtrack(i + 1, cur + arr[i])
            if nextLen > maxLen {
                maxLen = nextLen
            }
        }
        return maxLen
    }
    return backtrack(0, "")
}
```

```go
func maxLength(arr []string) int {
    if len(arr) == 1 { return len(arr[0]) }
    max := 0
    dfs(arr, 0, "", &max)
    return max
}

func dfs(arr []string, index int, cur string, max *int) {
    if index == len(arr) && uniqueCharCount(cur) > *max { *max = len(cur); return }
    if index == len(arr) { return }
    if uniqueCharCount(cur) == - 1 { return }
    dfs(arr, index + 1, cur + arr[index], max)
    dfs(arr, index + 1, cur, max)
}

func uniqueCharCount(s string) int {
    chars := make([]int, 26)
    for _, c := range s {
        if chars[c - 'a'] == 1 { return -1 }
        chars[c - 'a']++
    }
    return len(s)
}
```

```go
func maxLength(arr []string) int {
    c := []uint32{}
    max := 0
    for _, s := range arr {
        var mask uint32
        for _, c := range s {
            mask = mask | 1 << (c - 'a')
        }
        if len(s) != bits.OnesCount32(mask) { continue }
        c = append(c, mask)
    }
    dfs(c, 0, 0, &max)
    return max
}

func dfs(c []uint32, index int, mask uint32, max *int) {
    *max = Max(*max, bits.OnesCount32(mask))
    for i := index; i < len(c); i++ {
        if mask & c[i] == 0 {
            dfs(c, i + 1, mask | c[i], max)
        }
    }
    return
}

func Max(a, b int) int {
    if a > b { return a }
    return b
}
```