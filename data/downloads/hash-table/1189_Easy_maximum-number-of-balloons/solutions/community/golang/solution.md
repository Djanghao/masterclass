# [Go] Solution

**Author:** harotobira
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/556647/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/556647/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Maximum Number of Balloons.
Memory Usage: 2.2 MB, less than 100.00% of Go online submissions for Maximum Number of Balloons.
```
func maxNumberOfBalloons(text string) int {
    b,a,l,o,n := 0,0,0,0,0
    for _, r := range text{
        switch r{
            case 'b':
                b++
            case 'a':
                a++
            case 'l':
                l++
            case 'o':
                o++
            case 'n':
                n++
        }
    }
    
    res := min(b, min(a,n))
    res = min(res, min(l/2,o/2))
    return res
}

func min(a,b int) int{
    if a < b {
        return a
    }
    
    return b
}
```