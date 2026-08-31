# Swift | Two Solutions

**Author:** jayantsogikar
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/918553/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/918553/)

---

Solution 1 : Understand The Pattern
```
func countVowelStrings(_ n: Int) -> Int {
        var a = 1, e = 1, i = 1, o = 1, u = 1
        for j in 1..<n{
            a = (a+e+i+o+u)
            e = (e+i+o+u)
            i = (i+o+u)
            o = (o+u)
        }
        return (a+e+i+o+u)
    }
```
Solution 2 : Combinations (nCr)
```
func countVowelStrings(_ n: Int) -> Int {
        return (n+4) * (n+3) * (n+2) * (n+1) / 24
    }
```