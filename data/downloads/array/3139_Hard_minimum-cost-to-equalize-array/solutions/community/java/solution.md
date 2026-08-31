# [Java/C++/Python] 4 cases, O(n) solution

**Author:** lee215
**Votes:** 57
**Link:** [https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5114202/](https://leetcode.com/problems/minimum-cost-to-equalize-array/solutions/5114202/)

---

# **Intuition**
- If `cost1` is cheaper, all use `cost1`
- Increment all to `max(A)`, use `cost2` as many as possible
- Increment to bigger than `max(A)`, use less `cost1`
- cost1 is too expensive, increment untill we won't use `cost1`
<br>


# **Explanation**
Calculate the `min(A)` and `max(A)`
`total = max(A) * n - sum(A)`, total is the minimum increments need to do.

**Case 1:**
`c1 * 2 < c2`
operation 1 is always better operation 2,
we simply return `total * c1 % mod`

**Case 2:**
`c1 * 2 > c2`
We do operation 2 as many as possible,
and use operation 1 to complete.

**Case 3:**
`c1 * 2 >> c2`
Previously we increment to `max(A)`,
now we can increment to `max(A) + x`
So that can do few operation 1 and mostly operation 2.

From `op1 = (ma - mi) * 2 - total` we can see,
Each time we increment all elements by 1,
`op1` will reduce `n - 2`

Each round, we can pay `n - 1` more op2 but save `n - 2` op1.
If `(n - 2) * cost 1 > (n - 1) * cost 2`, it's a good deal, 
and we will continue doing this, until `op1 < n - 2`.
So we calculate `op1 / n - 2` for the rounds needed to reduce `op1`.


**Case 4:**
`c1 * 2 >>>>> c2`
We won't do any operation 1.
Do `total += n`,
to ensure `total` can be even
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int minCostToEqualizeArray(int[] A, int c1, int c2) {
        int ma = A[0], mi = A[0], n = A.length, mod = 1000000007;
        long total = 0;
        for (int a: A) {
            mi = Math.min(mi, a);
            ma = Math.max(ma, a);
            total += a;
        }
        total = 1l * ma * n - total;

        // case 1
        if (c1 * 2 <= c2 || n <= 2) {
            return (int) ((total * c1) % mod);
        }

        // case 2
        long op1 = Math.max(0L, (ma - mi) * 2L - total);
        long op2 = total - op1;
        long res = (op1 + op2 % 2) * c1 + op2 / 2 * c2;

        // case 3
        total += op1 / (n - 2) * n;
        op1 %= n - 2;
        op2 = total - op1;
        res = Math.min(res, (op1 + op2 % 2) * c1 + op2 / 2 * c2);

        // case 4
        for (int i = 0; i < 2; i++) {
            total += n;
            res = Math.min(res, total % 2 * c1 + total / 2 * c2);
        }
        return (int) (res % mod);
    }
```
**C++**
```cpp
    int minCostToEqualizeArray(vector<int>& A, int c1, int c2) {
        int ma = *max_element(A.begin(), A.end());
        int mi = *min_element(A.begin(), A.end());
        int n = A.size(), mod = 1000000007;
        long long su = accumulate(A.begin(), A.end(), 0LL);
        long long total = 1LL * ma * n - su;

        // case 1
        if (c1 * 2 <= c2 || n <= 2) {
            return (total * c1) % mod;
        }

        // case 2
        long long op1 = max(0LL, (ma - mi) * 2 - total);
        long long op2 = total - op1;
        long long res = (op1 + op2 % 2) * c1 + op2 / 2 * c2;

        // case 3
        total += op1 / (n - 2) * n;
        op1 %= n - 2;
        op2 = total - op1;
        res = min(res, (op1 + op2 % 2) * c1 + op2 / 2 * c2);

        // case 4
        for (int i = 0; i < 2; i++) {
            total += n;
            res = min(res, total % 2 * c1 + total / 2 * c2);
        }

        return res % mod;
    }
```
**Python**
```py
    def minCostToEqualizeArray(self, A: List[int], c1: int, c2: int) -> int:
        ma, mi = max(A), min(A)
        n = len(A)
        mod = 10 ** 9 + 7
        total = ma * n - sum(A)

        # case 1
        if c1 * 2 <= c2 or n <= 2:
            return total * c1 % mod

        # case 2
        op1 = max(0, (ma - mi) * 2 - total)
        op2 = total - op1
        res = (op1 + op2 % 2) * c1 + op2 // 2 * c2

        # case 3
        total += op1 // (n - 2) * n
        op1 %= n - 2
        op2 = total - op1
        res = min(res, (op1 + op2 % 2) * c1 + op2 // 2 * c2)

        # case 4
        for i in range(2):
            total += n
            res = min(res, total % 2 * c1 + total // 2 * c2)
        return res % mod
```
