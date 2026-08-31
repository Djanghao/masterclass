# [Java/C++/Python] Two Loops, O(n)

**Author:** lee215
**Votes:** 97
**Link:** [https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3706561/](https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3706561/)

---

# **Solution 1**
Each time, check the array start at `A[i]`,
and add `A[i + 1], A[i + 2] ...` one by one.
At first, the current imbalance number `cur = 0`,
when add `A[j]`,
check if `A[j] + 1` and `A[j] - 1` already in the subarray.

If `A[j] + 1` not in `seen` and `A[j] - 1` not in `seen`,
`A[j]` will make imbalance number increment `cur += 1`.

If `A[j] + 1` in `seen` and `A[j] - 1` in `seen`,
`A[j]` will make imbalance number decrement `cur -= 1`.

Then update result with current imbalance number `res += cur`.
<br>

**Complexity**
Time `O(n^2)`
Space `O(n)`
<br>

**Java**
```java
    public int sumImbalanceNumbers(int[] A) {
        int res = 0, n = A.length;
        for (int i = 0; i < n; ++i) {
            Set<Integer> s = new HashSet<>();
            s.add(A[i]);
            int cur = 0;
            for (int j = i + 1; j < n; ++j) {
                if (!s.contains(A[j])) {
                    int d = 1;
                    if (s.contains(A[j] - 1)) d--;
                    if (s.contains(A[j] + 1)) d--;
                    cur += d;
                    s.add(A[j]);
                }
                res += cur;
            }
        }
        return res;
    }
```

**C++**
```cpp
    int sumImbalanceNumbers(vector<int>& A) {
        int res = 0, n = A.size();
        for (int i = 0; i < n; ++i) {
            unordered_set<int> s = {A[i]};
            int cur = 0;
            for (int j = i + 1; j < n; ++j) {
                cur += s.count(A[j]) ? 0 : 1 - s.count(A[j] + 1) - s.count(A[j] - 1);
                s.insert(A[j]);
                res += cur;
            }
        }
        return res;
    }
```

**Python**
```py
    def sumImbalanceNumbers(self, A: List[int]) -> int:
        n = len(A)
        res = 0
        for i in range(n):
            s = set()
            cur = -1
            for j in range(i, n):
                cur += 0 if A[j] in s else 1 - (A[j] + 1 in s) - (A[j] - 1 in s)
                s.add(A[j])
                res += cur
        return res
```
<br>

# **Solution 2**
From solution 1, we know that,
for each `A[i]`,
we focus if `A[i] + 1` and `A[i] - 1` in the subarray.

If `A[i]` in the subarray and `A[i] + 1` not,
it means `A[i]` can contribute one point to imbalance number.

On this kind of problem,
we can check the contribution of each A[i].
Usually need to find some information, 
like next bigger on left and right, 
which can be solved in O(n).

So in the first loop,
we go through from `A[0]` to `A[n - 1]`,
and find out the position of `A[i]` or `A[i] + 1` on `A[i]` left.

Then in the second loop,
we go through from `A[n - 1]` to `A[0]`,
and find out the position of `A[i] - 1` on `A[i]` right.

The valid number of subarray with `A[i]` and without `A[i] + 1`,
is `(distance on left) * (distance on right)`.

Finally return the sum of contribution for all `A[i]`.
In each subarray, the biggest `A[i]` won't count score,
but we counted its contribution.
There are `n * (n + 1) / 2` subarrays,
so we return `res - n * (n + 1) / 2`.
<br>

**Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int sumImbalanceNumbers(int[] A) {
        int res = 0, n = A.length;
        int[] left = new int[n];
        int[] seen = new int[n + 10];
        Arrays.fill(seen, -1);
        for (int i = 0; i < n; i++) {
            left[i] = Math.max(seen[A[i] + 1], seen[A[i]]);
            seen[A[i]] = i;
        }
        Arrays.fill(seen, n);
        for (int i = n - 1; i >= 0; i--) {
            seen[A[i]] = i;
            res += (i - left[i]) * (seen[A[i] + 1] - i);
        }
        return res - n * (n + 1) / 2;
    }
```

**C++**
```cpp
    int sumImbalanceNumbers(vector<int>& A) {
        int res = 0, n = A.size();
        vector<int> left(n), seen(n + 10, -1);
        for (int i = 0; i < n; i++) {
            left[i] = max(seen[A[i] + 1], seen[A[i]]);
            seen[A[i]] = i;
        }
        seen.assign(n + 10, n);
        for (int i = n - 1; i >= 0; i--) {
            seen[A[i]] = i;
            res += (i - left[i]) * (seen[A[i] + 1] - i);
        }
        return res - n * (n + 1) / 2;
    }
```

**Python**
```py
    def sumImbalanceNumbers(self, A: List[int]) -> int:
        n = len(A)
        left = [0] * n
        res = 0
        seen = [-1] * (n + 10)
        for i in range(n):
            left[i] = max(seen[A[i] + 1], seen[A[i]])
            seen[A[i]] = i
        seen = [n] * (n + 10)
        for i in range(n - 1, -1, -1):
            seen[A[i]] = i
            res += (i - left[i]) * (seen[A[i] + 1] - i)
        return res - n * (n + 1) // 2
```
