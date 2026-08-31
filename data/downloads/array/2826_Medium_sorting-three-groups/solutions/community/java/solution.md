# [Java/C++/Python] DP 6 lines, O(n)

**Author:** lee215
**Votes:** 84
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/3932395/](https://leetcode.com/problems/sorting-three-groups/solutions/3932395/)

---

# **Solution 1: Brute Force**

The question asks us to make `A[i]` increasing from 1 to 3.
We assume:
from `A[0]` to `A[i - 1]` are 0s
from `A[i]` to `A[j - 1]` are 1s
from `A[j]` to `A[n - 1]` are 2s.

Brute force `i` and `j`,
and count the number of operation,
return the minimum.

Time `O(n^3)`, Space `O(1)`.


The `for` loops for `i` and `j` are `O(n^2)`
The `for` loop for `k` is `O(n)`,
and can be improved to `O(1)` by pre calculating the prefix count of `1,2,3`.
So the total can be improved Time `O(n^2)` Space `O(1)`

Brute force with O(1) space is at least expected.

**C++**
```cpp
    int minimumOperations(vector<int>& A) {
        int n = A.size(), res = n;
        for (int i = 0; i <= n; i++) {
            for (int j = i; j <= n; j++) {
                int cur = 0;
                for (int k = 0; k < n; k++) {
                    if (k < i) {
                        cur += A[k] != 1;
                    } else if (k < j) {
                        cur += A[k] != 2;
                    } else {
                        cur += A[k] != 3;
                    }
                }
                res = min(res, cur);
            }
        }
        return res;
    }
```
<br>

# **Solution 2: DP**
To improve from `O(n^2)` to `O(n)`,
Let's solve it by `dp`.

Use `a` presents the operation to make sequence all 1s
Use `b` presents the operation to make sequence incresing from 1 to 2
Use `c` presents the operation to make sequence incresing from 1 to 3

Time `O(kn)`, Space `O(k)`, where `k = 3`.

**Java**
```java
    public int minimumOperations(List<Integer> A) {
        int a = 0, b = 0, c = 0;
        for (int x: A) {
            a += x == 1 ? 0 : 1;
            b = Math.min(a, b + (x == 2 ? 0 : 1));
            c = Math.min(b, c + (x == 3 ? 0 : 1));
        }
        return c;
    }
```

**C++**
```cpp
    int minimumOperations(vector<int>& A) {
        int a = 0, b = 0, c = 0;
        for (int x: A) {
            a += x != 1;
            b = min(a, b + (x != 2));
            c = min(b, c + (x != 3));
        }
        return c;
    }
```

**Python**
```py
    def minimumOperations(self, A: List[int]) -> int:
        a, b, c = 0, 0, 0
        for x in A:
            a += x != 1
            b = min(a, b + (x != 2))
            c = min(b, c + (x != 3))
        return c
```
<br>

# **Solution 3: DP**
`dp[k]` means the number of operation we need,
to make `A` increasing from `1` to `k`.

Initial all `dp[k]` as `n`, since at most `n` elements.

Iterate each `a` in `A`,
and we update `dp[a]--`,
since one more `a` in the array,
we save one operation.

Then update `dp[k] = min(dp[k], dp[k - 1])`,
because sequence from `1` to `k - 1` is a special kind of
sequence from `1` to `k`,
but missing `k` in the sequence.

Finally return `dp[3]`.

Time `O(kn)`, Space `O(k)`, where `k = 3`.
<br>

**Java**
```java
    public int minimumOperations(List<Integer> A) {
        int n = A.size(), dp[] = new int[]{n, n, n, n};
        for (int a : A) {
            dp[a]--;
            dp[2] = Math.min(dp[2], dp[1]);
            dp[3] = Math.min(dp[3], dp[2]);
        }
        return dp[3];
    }
```

**C++**
```cpp
    int minimumOperations(vector<int>& A) {
        vector<int> dp(4, A.size());
        for (int a : A) {
            dp[a]--;
            dp[2] = min(dp[2], dp[1]);
            dp[3] = min(dp[3], dp[2]);
        }
        return dp[3];
    }
```

**Python**
```py
    def minimumOperations(self, A: List[int]) -> int:
        dp = [len(A)] * 4
        for a in A:
            dp[a] -= 1
            dp[2] = min(dp[2], dp[1]);
            dp[3] = min(dp[3], dp[2]);
        return dp[3]
```

