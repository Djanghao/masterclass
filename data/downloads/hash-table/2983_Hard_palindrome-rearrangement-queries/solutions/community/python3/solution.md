# Prefix sum and substring-equal index

**Author:** Harkness
**Votes:** 9
**Link:** [https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4481115/](https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4481115/)

---

# Intuition
Transform input to 2 strings of same length, `s1`, `s2`, and 2 edit intervals `(a, b)` and `(c, d)` on them to make them the same.

Build 3 functions (note the function arguments a/b/c/d are different from the input a, b, c, d):
`p(a, b)`: whether `s1[a..b] == s2[a..b]`. This can be done in O(1) time if we store the length of the longest same-string at each position beforehand.
`f(a, b)`: `s1[a..b]` and `s2[a..b]` have same letters and counts. i.e. can be rearranged to be equal. This can be done using prefix sum for each of the 26 letters.
`e(a, b, c, d)`: whether the letters in `s2[c..d]` is a subset of `s1[a..b]`. i.e. we can pick letters from `s1[a..b]` to form `s2[c..d]`. Note `e()` has 2 versions, to handle `s1[a..b]` contains `s2[c..d]` and `s2[a..b]` contains `s1[c..d]`. Can be simplied into 1. Algorithm is also to use prefix sum.

Now discuss 3 cases (assume a <= c, without loss of generalization):
1. `(a, b)` and `(c, d)` are disjoint. Return `p(0, a-1) and p(b+1, c-1) and p(d+1, n-1) and f(a, b) and f(c, d)`
2. `(a, b)` and `(c, d)` overlap. Return `p(0, a-1) and p(d+1, n-1) and e1(a, b, a, c-1) and e2(c, d, b+1, d) and f(a, d)`
3. `(a, b)` fully covers `(c, d)`. Return `p(0, a-1) and p(b+1, n-1) and e1(a, b, a, c-1) and e1(a, b, d+1, b) and f(a, b)`

# Code
```
class Solution:
    def canMakePalindromeQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        
        n = len(s) // 2
        s1, s2 = s[0:n], s[n:2*n][::-1]
        
        pos_len = [0] * n
        pre = 0
        for j in range(n+1):
            if j == n or s1[j] != s2[j]:
                for i in range(pre, j):
                    pos_len[i] = j-i
                pre = j+1
        
        psum1 = [None] * n
        cur_cnt = [0] * 26
        for i in range(n):
            cur_cnt[ord(s1[i]) - ord('a')] += 1
            psum1[i] = cur_cnt.copy()
        
        psum2 = [None] * n
        cur_cnt = [0] * 26
        for i in range(n):
            cur_cnt[ord(s2[i]) - ord('a')] += 1
            psum2[i] = cur_cnt.copy()
        
        def p(a, b):
            # if s1[a..b] == s2[a..b]
            if a > b:
                return True
            return pos_len[a] >= b-a+1
        
        def f(a, b):
            # if s1[a..b] and s2[a..b] have same letters. i.e. can be rearranged to be equal.
            if a > b:
                return True
            for i in range(26):
                c1 = psum1[b][i] - (0 if a == 0 else psum1[a-1][i])
                c2 = psum2[b][i] - (0 if a == 0 else psum2[a-1][i])
                if c1 != c2:
                    return False
            return True
        def e1(a, b, c, d, rev):
            if rev:
                return e2(a, b, c, d, False)
            if c > d:
                return True
            for i in range(26):
                c1 = psum1[b][i] - (0 if a == 0 else psum1[a-1][i])
                c2 = psum2[d][i] - (0 if c == 0 else psum2[c-1][i])
                if c1 < c2:
                    return False
            return True
        
        def e2(a, b, c, d, rev):
            if rev:
                return e1(a, b, c, d, False)
            if c > d:
                return True
            for i in range(26):
                c1 = psum2[b][i] - (0 if a == 0 else psum2[a-1][i])
                c2 = psum1[d][i] - (0 if c == 0 else psum1[c-1][i])
                if c1 < c2:
                    return False
            return True
        
        res = []
        for a, b, c, d in queries:
            c, d = 2*n-1-d, 2*n-c-1
            rev = False
            if a > c:
                a, b, c, d = c, d, a, b
                rev = True

            if c > b:
                res.append( p(0, a-1) and p(b+1, c-1) and p(d+1, n-1) and f(a, b) and f(c, d) )
            elif d > b:
                res.append( p(0, a-1) and p(d+1, n-1) and e1(a, b, a, c-1, rev) and e2(c, d, b+1, d, rev) and f(a, d) )
            else:
                res.append( p(0, a-1) and p(b+1, n-1) and e1(a, b, a, c-1, rev) and e1(a, b, d+1, b, rev) and f(a, b) )
        
        return res
```
Simplied: merge f, e1, e2 into the same function
```
class Solution:
    def canMakePalindromeQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        
        n = len(s) // 2
        s1, s2 = s[0:n], s[n:2*n][::-1]
        
        pos_len = [0] * n
        pre = 0
        for j in range(n+1):
            if j == n or s1[j] != s2[j]:
                for i in range(pre, j):
                    pos_len[i] = j-i
                pre = j+1
        
        def get_psum(s):
            psum = [None] * n
            cur_cnt = [0] * 26
            for i in range(n):
                cur_cnt[ord(s[i]) - ord('a')] += 1
                psum[i] = cur_cnt.copy()
            return psum
        
        psum1 = get_psum(s1)
        psum2 = get_psum(s2)
        
        def p(a, b):
            # if s1[a..b] == s2[a..b]
            if a > b:
                return True
            return pos_len[a] >= b-a+1
        
        def f(a, b, ps1, c, d, ps2):
            # compare letter count of s1[a..b] and s2[c..d]. return >=0 if former covers latter.
            # return 0 if all letters have the same count; 1 if counts in ps1 all > ps2; -1 if s1[a..b] does not cover s2[c..d]
            all_eq = 1
            for i in range(26):
                c1 = ps1[b][i] - (0 if a == 0 else ps1[a-1][i])
                c2 = ps2[d][i] - (0 if c == 0 else ps2[c-1][i])
                if c1 < c2:
                    return -1
                if c1 > c2:
                    all_eq = 0
            return 0 if all_eq else 1
        
        res = []
        for a, b, c, d in queries:
            c, d = 2*n-1-d, 2*n-c-1
            if a > c:
                a, b, c, d = c, d, a, b
                ps1, ps2 = psum2, psum1
            else:
                ps1, ps2 = psum1, psum2
                
            if c > b:
                res.append( p(0, a-1) and p(b+1, c-1) and p(d+1, n-1) 
                           and f(a, b, ps1, a, b, ps2) == 0 
                           and f(c, d, ps1, c, d, ps2) == 0 )
            elif d > b:
                res.append( p(0, a-1) and p(d+1, n-1) 
                           and (a > c-1 or f(a, b, ps1, a, c-1, ps2) > 0 )
                           and (b+1 > d or f(c, d, ps2, b+1, d, ps1) > 0 )
                           and f(a, d, ps1, a, d, ps2) == 0 )
            else:
                res.append( p(0, a-1) and p(b+1, n-1) 
                           and (a > c-1 or f(a, b, ps1, a, c-1, ps2) > 0)
                           and (d+1 > b or f(a, b, ps1, d+1, b, ps2) > 0)
                           and f(a, b, ps1, a, b, ps2) == 0 )

        
        return res
```