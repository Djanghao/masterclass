# Golang 100% fastest solution

**Author:** gene-rode
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/3281674/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/3281674/)

---


```
func minSteps(s string, t string) (res int) {
    dict := [26]int{}
    for k , v := range s {
        dict[v - 'a']++
        dict[t[k] - 'a']--
    }

    for _ , v := range dict {
        if v > 0 { 
            res += v
        }
    }
    return res
}


```