# Python 3 || Some mathematics, some Python  || T/S: 96% / 72%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/super-palindromes/solutions/5161735/](https://leetcode.com/problems/super-palindromes/solutions/5161735/)

---

Here's the mathematics: 
- If `x*x` is a *superpalindrome*, let's refer to *x* as its *generator*. It can be shown that with the exception of 3, the decimal representations of each generator is limited to the decimal digits 0, 1, and 2. The skeptical yet interested reader who spends a few minutes checking whether 11, 22, or 33 are generators will see why this statement is true. (Hint: Notice the carry digits in the squaring operation)
- The seventy generators for all superpalindromes in [0..10^18] are listed at the end of this post in the second code box.

Here's the plan:
1. We iterate through integers in their base 3 representations using each to determine a prefix of a generator, then append the appropriate suffixes to generate both an even-length candidate and an odd-length candidate with that prefix.
2. We check each candidate whether its square is a palindrome and keep a count of those successes.
3. Once we exhaust the possible candidate generators based on `left` and `right`, we return the count. 
```
class Solution:
    def superpalindromesInRange(self, left: str, right: str) -> int:

        def isPalindromic(s: str) -> bool:
            s = str(s)
            return s == s[::-1]

        def base3(n, s =''):
            while n:
                n, digit = divmod(n,3)
                s+= str(digit)
            return s[::-1]    

        cnt, left, right = left, isqrt(int(left)), isqrt(int(right))
        cnt = int(left <= 3 <= right)

        n = 0
        while True:
            n+= 1
            s = base3(n)

            evn, odd = int(s + s[::-1]), int(s + s[-2::-1])
            if evn < left : continue
            if odd > right: break
            
            if (evn <= right) and isPalindromic(evn * evn): cnt+= 1
            if (left <= odd ) and isPalindromic(odd * odd): cnt+= 1

        return cnt
```
[https://leetcode.com/problems/super-palindromes/submissions/1258963896/](https://leetcode.com/problems/super-palindromes/submissions/1258963896/)

I could be wrong, but I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(*log*N*), in which *N* ~ `right`. (We assume `right` < 10^18)
```
```

And just for fun--two lines, T/S: 100% / 37%
[https://leetcode.com/problems/super-palindromes/submissions/1258879933/](https://leetcode.com/problems/super-palindromes/submissions/1258879933/)
```
class Solution: 
    def superpalindromesInRange(self, left: str, right: str) -> int:
        
        pal = [
                        1,          2,          3,         11,         22,        101,        111,
                      121,        202,        212,       1001,       1111,       2002,      10001,
                    10101,      10201,      11011,      11111,      11211,      20002,      20102,        
                   100001,     101101,     110011,     111111,     200002,    1000001,    1001001,
                  1002001,    1010101,    1011101,    1012101,    1100011,    1101011,    1102011,
                  1110111,    1111111,    2000002,    2001002,   10000001,   10011001,   10100101, 
                 10111101,   11000011,   11011011,   11100111,   11111111,   20000002,  100000001,
                100010001,  100020001,  100101001,  100111001,  100121001,  101000101,  101010101,
                101020101,  101101101,  101111101,  110000011,  110010011,  110020011,  110101011,
                110111011,  111000111,  111010111,  111101111,  111111111,  200000002,  200010002]

        return bisect_right(pal, isqrt(int(right))) - bisect_left(pal, isqrt(int(left)))
```

