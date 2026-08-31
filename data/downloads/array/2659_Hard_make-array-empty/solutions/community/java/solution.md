# [Java/C++/Python] Easy Sort Solution

**Author:** lee215
**Votes:** 246
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/3466800/](https://leetcode.com/problems/make-array-empty/solutions/3466800/)

---

# **Intuition**
There `n` elements at first,
so there will take at least `n` operations.
And it take `n` operations rotate all elements once.
<br>

# **Explanation**
Initialize `res` as `n` at first,
and we record every elements position, `pos[A[i]] = i`.

Then we iterate all element from small to big in `A`,
if the position decrease,
this mean we will rotate all remining element to the begin,
and this bring us back to out begining intuition above,
we will increase `res` by the number of remaining elements.
<br>


# **Example**

`A = [7,8,9]`
this `A` takes 3 operation.

Now we insert `4,5,6` in A,
no matter what position but keep their order
Maybe `A = [4,5,7,8,9,6]`
Now it take one round to remove 4,5,6 then 7,8,9
so it needs `6 + 3 = 9` operations

Now we insert `1,2,3` in A,
no matter what position but keep their order
so it needs `9 + 6 + 3 = 18` operations
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Java**
```java
    public long countOperationsToEmptyArray(int[] A) {
        Map<Integer, Integer> pos = new HashMap<>();
        long n = A.length, res = n;
        for (int i = 0; i < n; ++i)
            pos.put(A[i], i);
        Arrays.sort(A);
        for (int i = 1; i < n; ++i)
            if (pos.get(A[i]) < pos.get(A[i - 1]))
                res += n - i;
        return res;
    }
```

**C++**
```cpp
    long long countOperationsToEmptyArray(vector<int>& A) {
        unordered_map<int, int> pos;
        long long n = A.size(), res = n;
        for (int i = 0; i < n; ++i)
            pos[A[i]] = i;
        sort(A.begin(), A.end());
        for (int i = 1; i < n; ++i)
            if (pos[A[i]] < pos[A[i - 1]])
                res += n - i;
        return res;
    }
```

**Python**
```py
    def countOperationsToEmptyArray(self, A: List[int]) -> int:
        pos = {a: i for i, a in enumerate(A)}
        res = n = len(A)
        A.sort()
        for i in range(1, n):
            if pos[A[i]] < pos[A[i - 1]]:
                res += n - i
        return res
```
<br>


# **Solution II: Not sort input**
Suggested by @sgallivan,
better not to sort directly on the input.

Time `O(nlogn)`
Space `O(n)`

**Java**
```java
    public long countOperationsToEmptyArray(int[] A) {
        int n = A.length;
        Integer[] pos = new Integer[n];
        for (int i = 0; i < n; ++i)
            pos[i] = i;
        Arrays.sort(pos, (i, j) -> A[i] - A[j]);
        long res = n;
        for (int i = 1; i < n; ++i)
            if (pos[i] < pos[i - 1])
                res += n - i;
        return res;
    }
```

**C++**
by @sgallivan
```cpp
    long long countOperationsToEmptyArray(vector<int>& A) {
        long long n = A.size(), res = n;
        vector<int> pos(n);
        iota(begin(pos), end(pos), 0);
        sort(begin(pos), end(pos), [&](int a, int b) {return A[a] < A[b];});
        for (int i = 1; i < n; ++i)
            if (pos[i] < pos[i - 1])
                res += n - i;
        return res;
    }
```

**Python**
```py
    def countOperationsToEmptyArray(self, A: List[int]) -> int:
        n = len(A)
        pos = sorted(range(n), key=lambda i: A[i])
        return n + sum(n - i for i in range(1, n) if pos[i] < pos[i - 1])
```
