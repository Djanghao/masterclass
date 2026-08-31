# [Java/C++/Python] Sieve of Eratosthenes

**Author:** lee215
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5970362/](https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5970362/)

---

# **Explanation**
The Sieve of Eratosthenes to 
find the smallest prime factor for each number.

Then itearate from `A[n - 1]` to `A[0]`,
if `A[i] > A[i + 1]`,
we have to change `A[i]` to smallest prime factor of `A[i]`.
If it doesn't work, we return `-1`, otherwise we continue.
<br>

# **Complexity**
For init
`Time O(mlogm)`
`Space O(m)`

For minOperations
Time `O(n)`
Space `O(1)`
<br>


```Java [Java]
class Solution {
    private static final int MX = 1000000;
    private static int[] dp = new int[MX + 1];

    static {
        for (int i = 2; i <= 1000; i++)
            if (dp[i] == 0)
                for (int j = i; j <= MX; j += i)
                    if (dp[j] == 0)
                        dp[j] = i;
    }

    public int minOperations(int[] A) {
        int n = A.length, res = 0;
        for (int i = n - 1; i >= 0; i--) {
            if (i + 1 < n && A[i] > A[i + 1]) {
                if (dp[A[i]] == 0 || dp[A[i]] > A[i + 1]) {
                    return -1;
                }
                res += A[i] != dp[A[i]] ? 1 : 0;
                A[i] = dp[A[i]];
            }
        }
        return res;
    }
}

```

```C++ [C++]
const int MX = 1e6;
int dp[MX + 1];

class Solution {
public:
    Solution() {
        dp[0] = dp[1] = 0;
        for (int i = 2; i <= sqrt(MX); i++)
            if (dp[i] == 0)
                for (int j = i; j <= MX; j += i)
                    if (dp[j] == 0)
                        dp[j] = i;
    }

    int minOperations(vector<int>& A) {
        int n = A.size(), res = 0;
        for (int i = n - 1; i >= 0; i--) {
            if (i + 1 < n && A[i] > A[i + 1]) {
                if (dp[A[i]] == 0 || dp[A[i]] > A[i + 1]) {
                    return -1;
                }
                res += A[i] != dp[A[i]];
                A[i] = dp[A[i]];
            }
        }
        return res;
    }
};
```

```py [Python3]
MX = 10 ** 6
dp = [0] * (MX + 1)
for i in range(2, isqrt(MX) + 1):
    if dp[i] == 0:
        for j in range(i, MX + 1, i):
            if dp[j] == 0:
                dp[j] = i
class Solution:
    def minOperations(self, A: List[int]) -> int:
        n = len(A)
        res = 0
        for i in range(n - 1, -1, -1):
            if i + 1 < n and A[i] > A[i + 1]:
                if dp[A[i]] == 0 or dp[A[i]] > A[i + 1]:
                    return -1
                res += A[i] != dp[A[i]]
                A[i] = dp[A[i]]
        return res
```

