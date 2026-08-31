# [Java/C++/Python] Inclusion-Exclusion Principle

**Author:** lee215
**Votes:** 189
**Link:** [https://leetcode.com/problems/number-of-excellent-pairs/solutions/2324984/](https://leetcode.com/problems/number-of-excellent-pairs/solutions/2324984/)

---

# **Intuition**
The Inclusion-Exclusion Principle
`bits(num1 OR num2) + bits(num1 AND num2) = bits(num1) + bits(num2)`
<br>

# **Explanation**
For all different `a` in `nums`,
counts its number of `bits`.

Enumearte the number of bits `k1` and `k2`,
if `k1 + k2 >= k`,
we accumulate `count[k1] * count[k2]`.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Java**
```java
    public long countExcellentPairs(int[] A, int k) {
        long cnt[] = new long[30], res = 0;
        Set<Integer> set = new HashSet<>();
        for (int a : A)
            set.add(a);
        for (int a : set)
            cnt[Integer.bitCount(a)]++;
        for (int i = 1; i < 30; ++i)
            for (int j = 1; j < 30; ++j)
                if (i + j >= k)
                    res += cnt[i] * cnt[j];
        return res;
    }
```
**C++**
improved from @votrubac
```c++
    long long countExcellentPairs(vector<int>& A, int k) {
        long long cnt[30] = {}, res = 0;
        for (int a : unordered_set<int>(begin(A), end(A)))
            ++cnt[__builtin_popcount(a)];
        for (int i = 1; i < 30; ++i)
            for (int j = 1; j < 30; ++j)
                if (i + j >= k)
                    res += cnt[i] * cnt[j];
        return res;
    }
```
**Python3**
```py
    def countExcellentPairs(self, A: List[int], k: int) -> int:
        c = Counter(map(int.bit_count, set(A)))
        return sum(c[k1] * c[k2] for k1 in c for k2 in c if k1 + k2 >= k)
```

