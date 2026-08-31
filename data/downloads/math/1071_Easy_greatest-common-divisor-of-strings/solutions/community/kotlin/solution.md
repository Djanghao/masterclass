# [ Kotlin ] 100 % Runtime

**Author:** eispoohw
**Votes:** 20
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3126608/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3126608/)

---

- # $$\\exists gcd(s1, s2) \\Leftrightarrow  s1 + s2 = s2 + s1 $$

Let $$g\u0441d(s1, s2) = x$$ ($$x=$$"ABC" for example). Then $$\\exists k, p \\in \\N : \\space s1 = k x $$ and $$s2 = p x$$.

In this case, $$ s1 + s2 = kx + px = (k + p) x = (p + k) x = px + kx = s2 + s1 $$

- # $$x.length = gcd(s1.length, s2.length)$$

$$s1 = x + x + ... + x$$
$$s2 = x + ... + x$$

So, we can return the first $$gcd(s1.length, s2.length)$$ characters of s1 or s2


```
class Solution {
    fun gcdOfStrings(str1: String, str2: String): String {
        // Check if gcd exists
        if (str1 + str2 != str2 + str1) {
            return ""
        }
        
        // Count gcd of string lengths
        var l1 = str1.length
        var l2 = str2.length
        while (l1 != l2) {
            if (l1 > l2) l1 -= l2
            else l2 -= l1
        }

        return str1.substring(0, l1)
    }
}
```