# [Java/C++/Python] Sort by time / damage

**Author:** lee215
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5716330/](https://leetcode.com/problems/minimum-amount-of-damage-dealt-to-bob/solutions/5716330/)

---

# **Explanation**
For two enemies,
if we kill enemy 0 then enemy 1, the cost is `t0d0 + t1d1 + t0d1`
if we kill enemy 1 then enemy 2, the cost is `t0d0 + t1d1 + t1d0`

So we only need to compare `t0d1` and `t1d0`,
the compare key is `t / d`
<br>

# **Complexity**
Time `O(logn)`
Space `O(n)`
<br>

**Java**
```java
    public long minDamage(int power, int[] D, int[] H) {
        Integer[]A = new Integer[D.length];
        Arrays.setAll(A, i -> i);
        for (int i = 0; i < H.length; ++i)
            H[i] = (H[i] + power - 1) / power;
        Arrays.sort(A, (i, j) -> H[i] * D[j] - H[j] * D[i]);
        long res = 0, t = 0;
        for (int i : A) {
            t += H[i];
            res += D[i] * t;
        }
        return res;
    }
```
**C++**
```cpp
    long long minDamage(int power, vector<int>& D, vector<int>& H) {
        vector<int> A(D.size());
        for (int i = 0; i < D.size(); ++i) {
            H[i] = (H[i] + power - 1) / power;
            A[i] = i;
        }
        sort(A.begin(), A.end(), [&](int i, int j) { 
            return H[i] * D[j] < H[j] * D[i];
        });

        long long res = 0, t = 0;
        for (int i : A) {
            res += D[i] * (t += H[i]);
        }
        return res;
    }
```

**Python**
```py
    def minDamage(self, power: int, D: List[int], H: List[int]) -> int:
        A = sorted(range(len(D)), key = lambda i: ceil(H[i] / power) / D[i])
        res = t = 0
        for i in A:
            t += (H[i] + power - 1) // power
            res += D[i] * t
        return res
```
