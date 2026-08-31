# Go, O(26n+m), 100%, use array

**Author:** onebitrs
**Votes:** 5
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3050113/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3050113/)

---

# Code
```
func smallestEquivalentString(s1 string, s2 string, baseStr string) string {
    mapping := [26]int{}
    for i := 0; i < 26; i++ {
        mapping[i] = i
    }

    for i := 0; i < len(s1); i++ {
        a, b := s1[i] - 'a', s2[i] - 'a'
        c, d := mapping[a], mapping[b]
        if c > d {
            c, d = d, c
        }
        // d -> c
        for j := 0; j < 26; j++ {
            if mapping[j] == d {
                mapping[j] = c
            }
        }
    }
    ret := ""
    for i := 0; i < len(baseStr); i++ {
        t := baseStr[i] - 'a'
        ret += string(mapping[t] + 'a')
    }
    return ret
}
```