# Golang solution

**Author:** rtom09
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-permutation/solutions/96648/](https://leetcode.com/problems/find-permutation/solutions/96648/)

---

```
func findPermutation(s string) []int {
    ret := make([]int, 0)
    for i:=0; i<= len(s); i++ {
        if i == len(s) || s[i] == 'I' {
            lenTemp := len(ret)
            for j:=i+1; j > lenTemp; j--{
                
                ret = append(ret, j)
            }
        }
    }
    return ret
}

```