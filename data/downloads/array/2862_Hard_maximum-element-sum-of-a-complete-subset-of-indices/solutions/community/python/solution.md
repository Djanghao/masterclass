# [Java/C++/Python] Square Factorization, O(n) O(1)

**Author:** lee215
**Votes:** 72
**Link:** [https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4053876/](https://leetcode.com/problems/maximum-element-sum-of-a-complete-subset-of-indices/solutions/4053876/)

---

# **Intuition**
A set of numbers is complete
if the product of every pair of its elements is a perfect square.

For each index `i`,
divide it by all possible square number,
until the `key` of `i`.

For example,
Key of `1` is `1`
Key of `18` is `2`
Key of `24` is `6`

In complete set, **all indices have the same key**.

# **Solution 1**
For all indices `i` from `1` to `n`,
find it's key `x`
accmulate `count[x] += A[i]`,
and update `res = max(res, count[x])`.
Finally return `res` as reault.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`

1. The process to find the `key` of value `n` is `O(n^0.5)`,
so `O(n^1.5)` is a upper bound.

2. key for all indices can be precalculated,
so final solution can be improved to `O(n)`.

3. Actually, the complexity is
`O(n * (1 + 1/4 + 1/9 ...)) <= O(2n) = O(n)`
<br>

**Java**
```java
    public long maximumSum(List<Integer> A) {
        Map<Long, Long> count = new HashMap<>();
        long res = 0, x, v;
        for (int i = 0; i < A.size(); i++) {
            for (x = i + 1, v = 2; v * v <= x; v++)
                while (x % (v * v) == 0)
                    x /= v * v;
            res = Math.max(res, count.merge(x, (long)A.get(i), Long::sum));
        }
        return res;
    }
```

**C++**
```cpp
    long long maximumSum(vector<int>& A) {
        unordered_map<int, long long> count;
        long long res = 0, x, v;
        for (int i = 0; i < A.size(); i++) {
            for (x = i + 1, v = 2; v * v <= x; ++v)
                while (x % (v * v) == 0)
                    x /= v * v;
            res = max(res, count[x] += A[i]);
        }
        return res;
    }
```

**Python**
```py
    def maximumSum(self, A: List[int]) -> int:
        count = Counter()
        for i in range(len(A)):
            x, v = i + 1, 2
            while x >= v * v:
                while x % (v * v) == 0:
                    x //= v * v
                v += 1
            count[x] += A[i]
        return max(count.values())
```
<br>


# **Solution 2**

In solution 1,
for each index,
we find its `key`.

In this solution,
for each key,
we find its possible indices.
This can save the space of hash map.

Time `O(n)`
Space `O(1)`

**Java**
```java
    public long maximumSum(List<Integer> A) {
        long res = 0;
        for (int k = 1; k <= A.size(); k++) {
            long cur = 0;
            for (int v = 1; v * v * k <= A.size(); v++)
                cur += A.get(k * v * v - 1);
            res = Math.max(res, cur);
        }
        return res;
    }
```

**C++**
```cpp
    long long maximumSum(vector<int>& A) {
        long long res = 0;
        for (int k = 1; k <= A.size(); k++)
            for (long long cur = 0, v = 1; v * v * k <= A.size(); v++)
                res = max(res, cur += A[k * v * v - 1]);
        return res;
    }
```

**Python 1-line**
```py
    def maximumSum(self, A: List[int]) -> int:
        return max(sum(A[k * v * v - 1] for v in range(1, isqrt(len(A) // k) + 1)) for k in range(1, len(A) + 1))
```
