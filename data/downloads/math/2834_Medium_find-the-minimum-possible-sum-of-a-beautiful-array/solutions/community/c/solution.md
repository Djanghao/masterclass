# [Java/C++/Python] Math, O(1)

**Author:** lee215
**Votes:** 21
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3965206/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3965206/)

---

# **Solution 1: Brute Force**
Use a hashset `seen` to save all selected for beautiful array.

**Python**
```python
    def minimumPossibleSum(self, n: int, target: int) -> int:
        seen = set()
        i = 1
        while len(seen) < n:
            if target - i not in seen:
                seen.add(i)
            i += 1
        return sum(seen)
```
Time `O(n + target)`
Space `O(n)`
<br>

# **Solution 2: a bit Math**
`k = target / 2` is the middle of taregt.
If `n <= k`,
we pick `[1,2,3,...,n]` as the beautiful array.
`n + (n - 1) < k + k <= target`,
so no problem,
the sum is `n * (n + 1) / 2`.

If `n > k`,
we pick `[1,2,3,...,k] + [taregt, target + 1, .... , taregt + n - k - 1]`
The sum of first part is `k * (k + 1) / 2`,
The sum of second part is `(target + target + n - k - 1) * (n - k) / 2`,

Time `O(1)`, Space `O(1)`
<br>

**Java**
```java
    public long minimumPossibleSum(int n, int target) {
        long k = target / 2;
        if (n <= k)
            return 1L * n * (n + 1) / 2;
        return k * (k + 1) / 2 + (target + target + n - k - 1) * (n - k) / 2;
    }
```

**C++**
```cpp
    long long minimumPossibleSum(int n, int target) {
        long long k = target / 2;
        if (n <= k)
            return 1L * n * (n + 1) / 2;
        return k * (k + 1) / 2 + (target + target + n - k - 1) * (n - k) / 2;
    }
```

**Python**
```py
    def minimumPossibleSum(self, n: int, target: int) -> int:
        k = target // 2
        if n <= k:
            return n * (n + 1) // 2
        return k * (k + 1) // 2 + (target + target + n - k - 1) * (n - k) // 2
```
