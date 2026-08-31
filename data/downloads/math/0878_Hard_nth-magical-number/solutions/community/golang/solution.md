# golang solution

**Author:** AhChi
**Votes:** 2
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/1215977/](https://leetcode.com/problems/nth-magical-number/solutions/1215977/)

---

```
func nthMagicalNumber(n int, a int, b int) int {
    modNum := int(math.Pow10(9))+7
    start := 1
    end := math.MaxInt64

    for start + 1 < end{
        mid := start+(end-start)/2
        
        if helper(mid,a,b) < n {
            start = mid
        }else{
            end = mid
        }
    }

    if helper(start,a,b) == n {
        return start%modNum
    }
    return end%modNum
}

func helper(num, a, b int) int{
    lcm := findLCM(a,b)
    return num/a + num/b - num/lcm
}
func findLCM(a,b int) int{
    gcd := findGCD(a,b)
    return a*b/gcd
}

func findGCD(a,b int) int {
    if a == 0 {
        return b
    }
    if b == 0 {
        return a
    }
    if a > b{
        return findGCD(a%b,b)
    }
    return findGCD(a,b%a)
    
}
```