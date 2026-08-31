# Golang code

**Author:** shreyasahir
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/5600219/](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/solutions/5600219/)

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
func uniqueLetterString(S string) int {
    res, mod := 0, int(math.Pow(10, 9)) + 7
    l := make([][2]int, 26)
    for i, _ := range l{ l[i] = [2]int{-1, -1}}

    for i, ch := range S {
        index := int(ch-'A')
        // only check S[0:i]. We will leave S[i:] for the last round
        res = ((i-l[index][1])*(l[index][1]-l[index][0])%mod+res)%mod
        
        l[index][0] = l[index][1]
        l[index][1] = i
    }
    for i, _ := range l{
        if l[i][1] != -1 {
            res = ((len(S)-l[i][1])*(l[i][1]-l[i][0])%mod+res)%mod
        }
    }
    return res
}
```