# [Java/C++/Python] No Binary Search, O(1) Space

**Author:** lee215
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6055349/](https://leetcode.com/problems/minimize-the-maximum-adjacent-element-difference/solutions/6055349/)

---

# **Complexity**
Time `O(n)`
Space `O(1)`

# **Intuition 1**
Assume `r` is the maximum absolute difference between adjacent elements.
`r` is short for radius.
`x` can cover the range of `[x - r, x + r]`
`y` can cover the range of `[y - r, y + r]`

Notice that these two range could overlap.

# **Intuition 2**
Assume `a > 0` and `b > 0`
For subarray `[a, b]`,
we can do nothing to improve.

For subarray `[a,x,b]`,
let's say `[a, b]` limits a single `x`.

For subarray `[a,x,x,b]`,
let's say `[a, b]` limits multiple `x`.

For prefix `[x, x, a]` starting with `-1`,
all `x` in prefix will take the same value,
let's say `[a, a]` limits single `x`.

For suffix `[a, x, x]` ending with `-1`,
all `x` in suffix will take the same value,
let's say `[a, a]` limits single `x`.


# **Explanation**
One pass iterate the `A`,
find the max diff of adjacent positive `max_adj`,
find the max number `mina` adjacent to `-1`,
find the min number `maxb` adjacent to `-1`.

The core idea of this solution is that,
find the minimum radius `r`
so that all limits `[a,b]` can be covered by either `[x - r, x + r]` or `[y - r, y + r]`.

One more biggest observation,
assume `x < y`,
`mina` must be covered by `x`
and `maxb` must be covered by `y`.
To minimize `r`,
`x - r == mina` and `y + r == maxb`.

Thus the progress can be easy greed:
Second pass the `A`,
for each limit `[a, b]`,
find if `[a, b]` is closer to left bound `mina` or right bound `maxb`,
`res` is the diameter that we can minimize.

In addition to the limit for multiple `x`,
it can be same result for single `x`,
or will take a radius `r >= (maxa - mina) / 3`.
(There's a difficult thinking process but an easy conclusion)
<br>



```Java [Java]
    public int minDifference(int[] A) {
        int n = A.length, max_adj = 0, mina = Integer.MAX_VALUE, maxb = 0;
        for (int i = 0; i < n - 1; ++i) {
            int a = A[i], b = A[i + 1];
            if (a > 0 && b > 0) {
                max_adj = Math.max(max_adj, Math.abs(a - b));
            } else if (a > 0 || b > 0) {
                mina = Math.min(mina, Math.max(a, b));
                maxb = Math.max(maxb, Math.max(a, b));
            }
        }

        int res = 0, min_2r = (maxb - mina + 2) / 3 * 2;
        for (int i = 0; i < n; ++i) {
            if ((i > 0 && A[i - 1] == -1) || A[i] > 0) continue;
            int j = i;
            while (j < n && A[j] == -1) {
                j++;
            }
            int a = Integer.MAX_VALUE, b = 0;
            if (i > 0) {
                a = Math.min(a, A[i - 1]);
                b = Math.max(b, A[i - 1]);
            }
            if (j < n) {
                a = Math.min(a, A[j]);
                b = Math.max(b, A[j]);
            }
            if (j - i == 1) {
                res = Math.max(res, Math.min(maxb - a, b - mina));
            } else {
                res = Math.max(res, Math.min(maxb - a, Math.min(b - mina, min_2r)));
            }
        }
        return Math.max(max_adj, (res + 1) / 2);
    }
```

```C++ [C++]
    int minDifference(vector<int>& A) {
        int n = A.size(), max_adj = 0, mina = INT_MAX, maxb = 0;
        for (int i = 0; i < n - 1; ++i) {
            int a = A[i], b = A[i + 1];
            if (a > 0 && b > 0) {
                max_adj = max(max_adj, abs(a - b));
            } else if (a > 0 || b > 0) {
                mina = min(mina, max(a, b));
                maxb = max(maxb, max(a, b));
            }
        }

        int res = 0, min_2r = (maxb - mina + 2) / 3 * 2;
        for (int i = 0; i < n; ++i) {
            if ((i > 0 && A[i - 1] == -1) || A[i] > 0) continue;
            int j = i;
            while (j < n && A[j] == -1) {
                j++;
            }
            int a = INT_MAX, b = 0;
            if (i > 0) {
                a = min(a, A[i - 1]);
                b = max(b, A[i - 1]);
            }
            if (j < n) {
                a = min(a, A[j]);
                b = max(b, A[j]);
            }
            if (j - i == 1) {
                res = max(res, min(maxb - a, b - mina));
            } else {
                res = max(res, min({maxb - a, b - mina, min_2r}));
            }
        }
        return max(max_adj, (res + 1) / 2);
    }
```

```py [Python3]
    def minDifference(self, A: List[int]) -> int:
        n = len(A)
        max_adj, mina, maxb = 0, inf, 0
        for a,b in pairwise(A):
            if a > 0 and b > 0:
                max_adj = max(max_adj, abs(a - b))
            elif a > 0 or b > 0:
                mina = min(mina, max(a, b))
                maxb = max(maxb, max(a, b))
        res = 0
        min_2r = (maxb - mina + 2) // 3 * 2 # min 2r if [a,x,y,b] is better
        for i in range(n):
            if (i > 0 and A[i - 1] == -1) or A[i] > 0: continue
            j = i
            while j < n and A[j] == -1:
                j += 1
            a, b = inf, 0
            if i > 0:
                a = min(a, A[i - 1])
                b = max(b, A[i - 1])
            if j < n:
                a = min(a, A[j])
                b = max(b, A[j])
            res = max(res, min(maxb - a, b - mina, min_2r if j - i > 1 else inf))
        return max(max_adj, (res + 1) // 2)
```
