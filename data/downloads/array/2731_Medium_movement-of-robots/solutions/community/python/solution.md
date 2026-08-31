# [Java/C++/Python] Ants Trick

**Author:** lee215
**Votes:** 8
**Link:** [https://leetcode.com/problems/movement-of-robots/solutions/3629710/](https://leetcode.com/problems/movement-of-robots/solutions/3629710/)

---

# **Explanation**
Robots has no different,
so we can assume rebots can go cross each other.
Usualy it's a trick for ants, here is robot.

Then sort `A`.
For `A[i]`,
it contributes as `A[j] - A[i]` for `i + 1` times, where `j < i`
it contributes as `A[i] - A[j]` for `n - i` times, where `i < j`.
So we count the sum of `A[i] * (1 + i + i - n)`
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int sumDistance(int[] A, String s, int d) {
        int n = A.length, mod = (int)1e9 + 7;
        for(int i = 0; i < n; ++i)
            A[i] += s.charAt(i) == 'R' ? d : -d;
        Arrays.sort(A);
        long res = 0;
        for(int i = 0; i < n; ++i)
            res = (res + (1L + i + i - n) * A[i]) % mod;
        return (int)(res + mod) % mod;
    }
```

**C++**
```cpp
    int sumDistance(vector<int>& A, string s, int d) {
        int n = A.size(), mod = 1e9 + 7;
        for(int i = 0; i < n; ++i)
            A[i] += s[i] == 'R' ? d : -d;
        sort(A.begin(), A.end());
        long long res = 0;
        for(int i = 0; i < n; ++i)
            res = (res + (1L + i + i - n) * A[i]) % mod;
        return (res + mod) % mod;
    }
```

**Python**
```py
    def sumDistance(self, A: List[int], s: str, d: int) -> int:
        n = len(A)
        B = sorted(A[i] + (d if s[i] == 'R' else -d) for i in range(n))
        return sum((i + i + 1 - n) * a for i,a in enumerate(B)) % (10 ** 9 + 7)
```
