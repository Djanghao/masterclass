# [Java/C++/Python] O(n) solution, detailed explanation

**Author:** lee215
**Votes:** 408
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1624222/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1624222/)

---

# **Solution 0, Brute Force**
Time `O(n^3)`
Space `O(1)`
<br>

# **Solution 1, Two Loops Solution**
Time `O(n^2)`
Space `O(1)`
<br>

**Java**
```java
    public long subArrayRanges(int[] A) {
        long res = 0;
        for (int i = 0; i < A.length; i++) {
            int max = A[i], min = A[i];
            for (int j = i; j < A.length; j++) {
                max = Math.max(max, A[j]);
                min = Math.min(min, A[j]);
                res += max - min;
            }
        }
        return res;
    }
```
**C++**
```cpp
    long long subArrayRanges(vector<int>& A) {
        long long res = 0;
        for (int i = 0; i < A.size(); i++) {
            int ma = A[i], mi = A[i];
            for (int j = i; j < A.size(); j++) {
                ma = max(ma, A[j]);
                mi = min(mi, A[j]);
                res += ma - mi;
            }
        }
        return res;
    }
```
**Python**
```py
    def subArrayRanges(self, A):
        res = 0
        n = len(A)
        for i in xrange(n):
            l,r = A[i],A[i]
            for j in xrange(i, n):
                l = min(l, A[j])
                r = max(r, A[j])
                res += r - l
        return res
```

# **Solution 2, O(n) Stack Solution**
Follow the explanation in [907. Sum of Subarray Minimums](https://leetcode.com/problems/sum-of-subarray-minimums/discuss/170750/)

# Intuition
res = sum(A[i] * f(i))
where f(i) is the number of subarrays,
in which A[i] is the minimum.

To get f(i), we need to find out:
left[i], the length of strict bigger numbers on the left of A[i],
right[i], the length of bigger numbers on the right of A[i].

Then,
left[i] + 1 equals to
the number of subarray ending with A[i],
and A[i] is single minimum.

right[i] + 1 equals to
the number of subarray starting with A[i],
and A[i] is the first minimum.

Finally f(i) = (left[i] + 1) * (right[i] + 1)

For [3,1,2,4] as example:
left + 1 = [1,2,1,1]
right + 1 = [1,3,2,1]
f = [1,6,2,1]
res = 3 * 1 + 1 * 6 + 2 * 2 + 4 * 1 = 17


# Explanation
To calculate left[i] and right[i],
we use two increasing stacks.

It will be easy if you can refer to this problem and my post:
901. Online Stock Span
I copy some of my codes from this solution.


# Complexity
All elements will be pushed twice and popped at most twice
Time `O(n)`
Space `O(n)`

**Java**
```java
    public long subArrayRanges(int[] A) {
        int n = A.length, j, k;
        long res = 0;
        
        Stack<Integer> s = new Stack<>();
        for (int i = 0; i <= n; i++) {
            while (!s.isEmpty() && A[s.peek()] > (i == n ? Integer.MIN_VALUE : A[i])) {
                j = s.pop();
                k = s.isEmpty() ? -1 : s.peek();
                res -= (long)A[j] * (i - j) * (j - k);

            }
            s.push(i);
        }
        
        s.clear();
        for (int i = 0; i <= n; i++) {
            while (!s.isEmpty() && A[s.peek()] < (i == n ? Integer.MAX_VALUE : A[i])) {
                j = s.pop();
                k = s.isEmpty() ? -1 : s.peek();
                res += (long)A[j] * (i - j) * (j - k);

            }
            s.push(i);
        }
        return res;
    }
```
**C++**
```cpp
    long long subArrayRanges(vector<int>& A) {
        long res = 0, n = A.size(), j, k;
        stack<int> s;
        for (int i = 0; i <= n; ++i) {
            while (!s.empty() && A[s.top()] > (i == n ? -2e9 : A[i])) {
                j = s.top(), s.pop();
                k = s.empty() ? -1 : s.top();
                res -= (long)A[j] * (i - j) * (j - k);
            }
            s.push(i);
        }
        s = stack<int>();
        for (int i = 0; i <= n; ++i) {
            while (!s.empty() && A[s.top()] < (i == n ? 2e9 : A[i])) {
                j = s.top(), s.pop();
                k = s.empty() ? -1 : s.top();
                res += (long)A[j] * (i - j) * (j - k);
            }
            s.push(i);
        }
        return res;
    }
```
**Python**
```py
    def subArrayRanges(self, A0):
        res = 0
        inf = float('inf')
        A = [-inf] + A0 + [-inf]
        s = []
        for i, x in enumerate(A):
            while s and A[s[-1]] > x:
                j = s.pop()
                k = s[-1]
                res -= A[j] * (i - j) * (j - k)
            s.append(i)
            
        A = [inf] + A0 + [inf]
        s = []
        for i, x in enumerate(A):
            while s and A[s[-1]] < x:
                j = s.pop()
                k = s[-1]
                res += A[j] * (i - j) * (j - k)
            s.append(i)
        return res
```