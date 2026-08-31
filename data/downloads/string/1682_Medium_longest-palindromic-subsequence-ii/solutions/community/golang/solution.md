# Golang

**Author:** Balloon66688
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/3103009/](https://leetcode.com/problems/longest-palindromic-subsequence-ii/solutions/3103009/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(251*251*27)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func longestPalindromeSubseq(s string) int {
    mm := [][][]int{}
    for i := 0; i < 251; i++ {
        k := [][]int{}
        for j := 0; j < 251; j++ {
            t := []int{}
            for k := 0; k < 27; k++ {
                t = append(t, 0)
            }
            k = append(k, t)
        }
        mm = append(mm, k)
    }
    return Check(s, 0, len(s)-1, mm, "{")
}

func Check(s string, l, r int, mm [][][]int, cur string) int {
    
    if l >= r {
        return 0
    }
    if r == l + 1 && s[l] == s[r] {
        k := 2
        if cur == s[l:l+1] {
            k = 0
        }
        mm[l][r][cur[0]-'a'] = k
        return k
        
    }
    if r == l + 1 {
        mm[l][r][cur[0]-'a'] = 0
        return 0
    }
    if mm[l][r][cur[0]-'a'] != 0 {
        return mm[l][r][cur[0]-'a']
    }
    if s[l] == s[r] && s[l:l+1] != cur {
        k := 2 + Check(s, l+1, r-1, mm, s[l:l+1])
        k = Max(k, mm[l][r][cur[0]-'a'])
        mm[l][r][cur[0]-'a'] = k
        return k
    }

    mm[l][r][cur[0]-'a'] = Max(Check(s, l+1, r, mm, cur), Check(s, l, r-1, mm, cur))

    
    return mm[l][r][cur[0]-'a']
}

func Max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```