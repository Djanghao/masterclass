# [Java/C++/Python] Check Same Characters

**Author:** lee215
**Votes:** 76
**Link:** [https://leetcode.com/problems/find-the-string-with-lcp/solutions/3203816/](https://leetcode.com/problems/find-the-string-with-lcp/solutions/3203816/)

---

# **Intuition**
If `lcp[i][j] > 0`, then `A[i] = A[j]`
If `lcp[i][j] == 0`, then `A[i] != A[j]`
<br>

# **Explanation**
We follow the intution above,
find the same `A[i]` and assign them to the same character `c`.
then construct the whole array `A`.
We should use at most 26 different elements.

Then we check if this `A` is valid for `lcp`.
If `A[i] == A[j]`,
then `lcp[i][j] = lcp[i+1][j+1] + 1`

If not valid, return empty string.
If valid, then we transform `A` to string and return it.
<br>

# **Complexity**
Time `O(n^2)`
Space `O(n)`
<br>

**Java**
```java
    public String findTheString(int[][] lcp) {
        int n = lcp.length, c = 0, A[] = new int[n];
        for (int i = 0; i < n; ++i) {
            if (A[i] > 0) continue;
            if (++c > 26) return "";
            for (int j = i; j < n; ++j)
                if (lcp[i][j] > 0)
                    A[j] = c;
        }
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                int v = i + 1 < n && j + 1 < n ? lcp[i + 1][j + 1] : 0;
                v = A[i] == A[j] ? v + 1 : 0;
                if (lcp[i][j] != v) return "";
            }
        }
        StringBuilder res = new StringBuilder();
        for (int a : A)
            res.append((char)('a' + a - 1));
        return res.toString();
    }
```
**C++**
```cpp
    string findTheString(vector<vector<int>>& lcp) {
        int n = lcp.size(), c = 0;
        vector<int> A(n);
        for (int i = 0; i < n; ++i) {
            if (A[i]) continue;
            if (++c > 26) return "";
            for (int j = i; j < n; ++j)
                if (lcp[i][j] > 0)
                    A[j] = c;
        }
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                int v = i + 1 < n && j + 1 < n ? lcp[i + 1][j + 1] : 0;
                v = A[i] == A[j] ? v + 1 : 0;
                if (lcp[i][j] != v) return "";
            }
        }
        string res = "";
        for (int c : A)
            res += 'a' + c - 1;
        return res;
    }
```
**Python**
```py
    def findTheString(self, lcp: List[List[int]]) -> str:
        n = len(lcp)
        A = [0] * n
        c = 1
        for i in range(n):
            if A[i]: continue
            if c > 26: return ''
            for j in range(i, n):
                if lcp[i][j]:
                    A[j] = c
            c += 1
        for i in range(n):
            for j in range(n):
                v = lcp[i + 1][j + 1] if i + 1 < n and j + 1 < n else 0
                v = v + 1 if A[i] == A[j] else 0
                if lcp[i][j] != v:
                    return ''
        return ''.join(chr(ord('a') + i - 1) for i in A)
```
