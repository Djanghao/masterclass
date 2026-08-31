# [Java/C++/Python] Count Digits

**Author:** lee215
**Votes:** 23
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5177497/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5177497/)

---

# **Intuition**
There are `n * (n - 1) / 2`,
and `m` digits,
so `res` is atmost `n * (n - 1) / 2 * m`
<br>

# **Explanation**
`count[i][v]` means the frequency of `v` of the `i`th digits.
Iterate all numbers and iterate all digits,
`res -= count[i][v]` remove the duplicate same pair of digits,
then increment the count of frequency by `count[i][v]++`

Finally return the result `res`
<br>

# **Complexity**
Time `O(mn)`
Space `O(10m)`
<br>

**Java**
```java
    public long sumDigitDifferences(int[] A) {
        int n = A.length, m = String.valueOf(A[0]).length();
        int[][] count = new int[m][10];
        long res = 1L * n * (n - 1) / 2 * m;
        for (int a : A) {
            for (int i = 0; i < m && a > 0; i++) {
                res -= count[i][a % 10]++;
                a /= 10;
            }
        }
        return res;
    }
```

**C++**
```cpp
class Solution {
public:
    long long sumDigitDifferences(vector<int>& A) {
        int n = A.size(), m = to_string(A[0]).length();
        vector<vector<int>> count(m, vector<int>(10));
        long long res = 1LL * n * (n - 1) / 2 * m;
        for (int a : A) {
            for (int i = 0; i < m; i++) {
                res -= count[i][a % 10]++;
                a /= 10;
            }
        }
        return res;
    }
};

```

**Python**
```py
    def sumDigitDifferences(self, A: List[int]) -> int:
        n, m = len(A), len(str(A[0]))
        count = [[0] * 10 for i in range(m)]
        res = n * (n - 1) // 2 * m
        for a in A:
            for i,v in enumerate(str(a)):
                res -= count[i][v]
                count[i][v] += 1
        return res
```
