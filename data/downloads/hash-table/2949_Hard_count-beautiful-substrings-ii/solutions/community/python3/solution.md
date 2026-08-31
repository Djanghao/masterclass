# [Python3] Prefix sum

**Author:** awice
**Votes:** 25
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330450/](https://leetcode.com/problems/count-beautiful-substrings-ii/solutions/4330450/)

---

Consider
$$
A[i]=
\\begin{cases}
1 \	ext{  if S[i] is vowel},\\\\
-1 \	ext{  else}
\\end{cases}
$$

and also the prefix sum $P[i+1] = A[0] + A[1] + \\cdots + A[i]$.

Now a good subarray $A[i:j]$ has sum zero, so $P[j] - P[i] = 0$, and is also subject to extra conditions about the length $L = j - i$.

What are those conditions?  Investigating $\\Big(\\frac{L}{2} \\Big)^2 \\equiv 0 \\pmod{K}$, write prime factorizations $L = \\prod p_i^{e_i}$ and $K = \\prod p_i^{k_i}$.  We have $e_i \\geq \\lceil \\frac{k_i}{2} \\rceil$, except for the $p_0 = 2$ case where $e_i \\geq \\lceil \\frac{k_i}{2} \\rceil + 1$.

So by converting $K \\rightarrow K_{\	ext{new}}$ through $k_i \\rightarrow \\lceil \\frac{k_i}{2} \\rceil$ (and +1 for p=2), this transforms our condition to an equivalent condition $L \\equiv 0 \\pmod{K_{\	ext{new}}}$ which is easily solved.

# Code
```python
class Solution:
    def beautifulSubstrings(self, S: str, K: int) -> int:
        P = [0]
        for c in S:
            P.append(P[-1] + (1 if c in "aeiou" else -1))

        K_new = 1
        for p in range(2, 1000):
            e = 0
            while K % p == 0:
                K //= p
                e += 1

            if e:
                e = (e + 1) // 2 + (p == 2)
                K_new *= p**e

        K = K_new
        count = Counter()
        ans = 0
        for i, p in enumerate(P):
            ans += count[p, i % K]
            count[p, i % K] += 1
        return ans

```