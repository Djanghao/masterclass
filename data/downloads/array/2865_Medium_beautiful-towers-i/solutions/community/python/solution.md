# Brute Force Solution

**Author:** lee215
**Votes:** 22
**Link:** [https://leetcode.com/problems/beautiful-towers-i/solutions/4082905/](https://leetcode.com/problems/beautiful-towers-i/solutions/4082905/)

---


More discussion in [2866. Beautiful Towers II](https://leetcode.com/problems/beautiful-towers-ii/discuss/4082819/JavaC%2B%2BPython-Stack-O(n))

# **Solution 0, Brute Force O(n^2)**

Enumerate `A[i]` to be the highest:
From `A[i]` to `A[0]`, the height `v` is decreasing.
From `A[i]` to `A[n - 1]`, the height `v` is decreasing.

Sum up the heights for `A[i]` to be the highest,
and return the biggest heights sum.

Time `O(n^2)`, Space `O(1)`.

**Python**
```py
    def maximumSumOfHeights(self, A: List[int]) -> int:
        res = 0
        n = len(A)
        for i in range(n):
            cur = v = A[i]
            for j in range(i - 1, -1, -1):
                v = min(v, A[j])
                cur += v
            v = A[i]
            for j in range(i + 1, n):
                v = min(v, A[j])
                cur += v
            res = max(res, cur)
        return res
```
<br>

# **Solution 1, Stack, O(n)**

`stack` will saves the indices for an increasing sequence.
For example,
`[1,2,2,3,3,3,6,6,6,6]`
`stack` will be `[-1, 0, 2, 5, 9]`.

Firstly, we iterate `A[i]` from `A[0]` to `A[n - 1]`,
and assume `A[i]` is the highest.
We need to pop all higher element from `stack`,
and update the sum of all heights `cur`,
and push `i` into the `stack`.

We do the above process again from `A[n - 1]` to `A[0]`,
then sum up the left part and right part,
we can have the result with `A[i]` as the highest.

Finally return the biggest heights sum.

**Java**
```java
    public long maximumSumOfHeights(List<Integer> A) {
        int n = A.size();

        long[] left = new long[n];
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);
        long res = 0, cur = 0;
        for (int i = 0; i < n; i++) {
            while (stack.size() > 1 && A.get(stack.peek()) > A.get(i)) {
                int j = stack.pop();
                cur -= 1L * (j - stack.peek()) * A.get(j);
            }
            cur += 1L * (i - stack.peek()) * A.get(i);
            stack.push(i);
            left[i] = cur;
        }

        stack.clear();
        stack.push(n);
        cur = 0;
        for (int i = n - 1; i >= 0; i--) {
            while (stack.size() > 1 && A.get(stack.peek()) > A.get(i)) {
                int j = stack.pop();
                cur -= 1L * -(j - stack.peek()) * A.get(j);
            }
            cur += 1L * -(i - stack.peek()) * A.get(i);
            stack.push(i);
            res = Math.max(res, left[i] + cur - A.get(i));
        }

        return res;
    }
```

**C++**
```cpp
    long long maximumSumOfHeights(vector<int>& A) {
       int n = A.size();
        vector<long long> left(n), stack = {-1};
        long long res = 0, cur = 0;
        for (int i = 0; i < n; i++) {
            while (stack.size() > 1 && A[stack.back()] > A[i]) {
                int j = stack.back();
                stack.pop_back();
                cur -= 1L * (j - stack.back()) * A[j];
            }
            cur += 1L * (i - stack.back()) * A[i];
            stack.push_back(i);
            left[i] = cur;
        }

        stack = {n};
        cur = 0;
        for (int i = n - 1; i >= 0; i--) {
            while (stack.size() > 1 && A[stack.back()] > A[i]) {
                int j = stack.back();
                stack.pop_back();
                cur -= 1L * -(j - stack.back()) * A[j];
            }
            cur += 1L * -(i - stack.back()) * A[i];
            stack.push_back(i);
            res = max(res, left[i] + cur - A[i]);
        }

        return res;
    }
```

**Python**
```py
    def maximumSumOfHeights(self, A: List[int]) -> int:
        n = len(A)

        left = [0] * n
        stack = [-1]
        cur = 0
        for i in range(n):
            while len(stack) > 1 and A[stack[-1]] > A[i]:
                j = stack.pop()
                cur -= (j - stack[-1]) * A[j]
            cur += (i - stack[-1]) * A[i]
            stack.append(i)
            left[i] = cur

        stack = [n]
        res = cur = 0
        for i in range(n - 1, -1, -1):
            while len(stack) > 1 and A[stack[-1]] > A[i]:
                j = stack.pop()
                cur -= -(j - stack[-1]) * A[j]
            cur += -(i - stack[-1]) * A[i]
            stack.append(i)
            res = max(res, left[i] + cur - A[i])

        return res
```
