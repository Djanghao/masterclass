# [GO] Math | O(logn)

**Author:** adithyasashasai
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4514823/](https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/solutions/4514823/)

---

# Code
```
/*
a => Permutaions of l=0  
b => Permutaions of e=0, e=1
c => Permutaions of t=0

Math : 
f(n) = 26^n - f(a U b U c)

Venn diagram:
f(a U b U c) = f(a) + f(b) + f(c) - f(a \u2229 b) - f(b \u2229 c) - f(a \u2229 c) + f(a \u2229 b \u2229 c) 

f(n) = 26^n - (25^n + 25^n + n*25^(n-1) + 25^n - 24^n - 24^n - n*24^(n-1) - 24^n - n*24^(n-1) + 23^n + n*23^n-1)
f(n) = 26^n - (75+n)*25^n-1 + (72+2n)*24^n-1 - (23+n) 23^n-1
*/ 
func stringCount(n int) int {
    var pow func (a, b int) int
    pow = func (a, b int) int {
        if b == 0 {
            return 1
        }
        ans := 1
        if b % 2 == 1 {
            ans = a
        }
        return (ans  * pow((a*a) % 1000000007, b/2)) % 1000000007
    }
    res := (pow(26, n) - (75+n)*pow(25, n-1) + (72+2*n)*pow(24, n-1) - (23+n)*pow(23, n-1)) % 1000000007
    return (res + 1000000007) % 1000000007
}
```