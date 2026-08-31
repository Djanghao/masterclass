# [Java/Python] Count the Number Without Repeated Digit

**Author:** lee215
**Votes:** 267
**Link:** [https://leetcode.com/problems/numbers-with-repeated-digits/solutions/256725/](https://leetcode.com/problems/numbers-with-repeated-digits/solutions/256725/)

---

# **Intuition**
Count `res` the Number Without Repeated Digit
Then the number with repeated digits = N - res

Similar as
788. Rotated Digits
902. Numbers At Most N Given Digit Set


# **Explanation**:

1. Transform `N + 1` to arrayList
2. Count the number with digits < n
3. Count the number with same prefix

For example,
if `N = 8765`, `L = [8,7,6,6]`,
the number without repeated digit can the the following format:
`XXX`
`XX`
`X`
`1XXX ~ 7XXX`
`80XX ~ 86XX`
`870X ~ 875X`
`8760 ~ 8765`


# **Time Complexity**:
the number of permutations `A(m,n)` is `O(1)`
We count digit by digit, so it's `O(logN)`

<br>

**Java:**
```java
    public int numDupDigitsAtMostN(int N) {
        // Transform N + 1 to arrayList
        ArrayList<Integer> L = new ArrayList<Integer>();
        for (int x = N + 1; x > 0; x /= 10)
            L.add(0, x % 10);

        // Count the number with digits < N
        int res = 0, n = L.size();
        for (int i = 1; i < n; ++i)
            res += 9 * A(9, i - 1);

        // Count the number with same prefix
        HashSet<Integer> seen = new HashSet<>();
        for (int i = 0; i < n; ++i) {
            for (int j = i > 0 ? 0 : 1; j < L.get(i); ++j)
                if (!seen.contains(j))
                    res += A(9 - i, n - i - 1);
            if (seen.contains(L.get(i))) break;
            seen.add(L.get(i));
        }
        return N - res;
    }


    public int A(int m, int n) {
        return n == 0 ? 1 : A(m, n - 1) * (m - n + 1);
    }
```
**Python3**
```py
    def numDupDigitsAtMostN(self, N):
        L = list(map(int, str(N + 1)))
        n = len(L)
        res = sum(9 * perm(9, i) for i in range(n - 1))
        s = set()
        for i, x in enumerate(L):
            for y in range(i == 0, x):
                if y not in s:
                    res += perm(9 - i, n - i - 1)
            if x in s: break
            s.add(x)
        return N - res
```
