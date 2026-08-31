# Go | KMP

**Author:** nguyen081002
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5790726/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5790726/)

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
```golang []
func prefixFunction(s string) []int {
    n := len(s)
    pi := make([]int, n)
    for i := 1; i < n; i++ {
        j := pi[i-1]
        for j > 0 && s[i] != s[j] {
            j = pi[j-1]
        }
        if s[i] == s[j] {
            j++
        }
        pi[i] = j
    }
    return pi
}

func minValidStrings(words []string, target string) int {
    pis := make([][]int, len(words))
    for i, w := range words {
        pis[i] = prefixFunction(w + "#" + target)
    }
    lenTarget := len(target)
    res := 0
    for lenTarget > 0 {
        match := 0
        for i := 0; i < len(words); i++ {
            match = int(math.Max(float64(match), float64(pis[i][len(words[i])+lenTarget])))
        }
        if match == 0 {
            return -1
        }
        res++
        lenTarget -= match
    }
    return res
}

```