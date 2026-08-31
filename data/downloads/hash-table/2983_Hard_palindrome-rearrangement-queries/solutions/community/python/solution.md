# [Python3] Prefix and counts

**Author:** Remineva
**Votes:** 2
**Link:** [https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4481003/](https://leetcode.com/problems/palindrome-rearrangement-queries/solutions/4481003/)

---

First we reverse second half of `s` and we can consider first half `s1` and second half `s2`. Then we construct `left` where `left[i]` represents the right most index `j` such that `s1[i:j] == s2[i:j]`. For `a,b,c,d` from `queries`, assume `a <= c`. We have 3 situations: intersection of two intervals is empty, one interval contains another interval, intersection is non-empty with no inclusion. For the parts where intervals are not covered, we need several conditions on `left`. For overlapping parts, we use prefix `cnt1, cnt2` to compare the counts of letters.
```
class Solution:
    def canMakePalindromeQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        n = len(s)
        q = len(queries)
        s1 = s[:n//2]
        s2 = s[n//2:][::-1]
        if Counter(s1) != Counter(s2):
            return [False] * q
        
        for i, ls in enumerate(queries):
            queries[i] = [ls[0], ls[1], n - 1 - ls[3], n - 1 - ls[2]]
        
        n //= 2
        left = [-1] * n
        l = -1
        for i in range(n):
            if s1[i] == s2[i]:
                if l == -1:
                    l = i
            else:
                if l != -1:
                    for j in range(l, i):
                        left[j] = i - 1
                    l = -1
        if l != -1:
            for j in range(l, n):
                left[j] = n - 1

        cnt1 = [[0] * 26]
        curr = [0] * 26
        for i in range(n):
            curr[ord(s1[i]) - 97] += 1
            cnt1.append(curr[:])
        
        cnt2 = [[0] * 26]
        curr = [0] * 26
        for i in range(n):
            curr[ord(s2[i]) - 97] += 1
            cnt2.append(curr[:])
            
        res = []

        for a, b, c, d in queries:
            flag = True
            if a > c:
                a, b, c, d = c, d, a, b
                flag = False
            if b < c - 1:
                if left[b + 1] >= c - 1 and left[0] >= a - 1 and (d == n - 1 or left[d + 1] == n - 1):
                    curr = [0] * 26
                    total = [0] * 26
                    for i in range(26):
                        curr[i] = cnt2[b + 1][i] - cnt2[a][i]
                        total[i] = cnt1[b + 1][i] - cnt1[a][i]
                        if total[i] < curr[i]:
                            res.append(False)
                            break
                    else:
                        res.append(True)
                else:
                    res.append(False)
            elif b >= d:
                if left[0] >= a - 1 and (b == n - 1 or left[b + 1] == n - 1):
                    res.append(True)
                else:
                    res.append(False)
            else:
                if left[0] >= a - 1 and (d == n - 1 or left[d + 1] == n - 1):
                    curr = [0] * 26
                    total = [0] * 26
                    if flag:
                        for i in range(26):
                            curr[i] = cnt2[c][i] - cnt2[a][i]
                            total[i] = cnt1[b + 1][i] - cnt1[a][i]
                            if total[i] < curr[i]:
                                res.append(False)
                                break
                        else:
                            res.append(True)
                    else:
                        for i in range(26):
                            curr[i] = cnt1[c][i] - cnt1[a][i]
                            total[i] = cnt2[b + 1][i] - cnt2[a][i]
                            if total[i] < curr[i]:
                                res.append(False)
                                break
                        else:
                            res.append(True)
                else:
                    res.append(False)
        return res
```