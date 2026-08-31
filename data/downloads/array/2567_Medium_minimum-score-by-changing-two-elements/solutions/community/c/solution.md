# [Java/C++/Python] Change Biggest or Smallest

**Author:** lee215
**Votes:** 28
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3202016/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3202016/)

---

# **Intuition**
Change the biggest or the smallest,
to be other existing number.
<br>

# **Explanation**
Change two biggest,
then the high score is `A[n-3] - A[0]`

Change the biggest and the smallest,
then the high score is `A[n-2] - A[1]`

Change two smallest,
then the high score is `A[n-1] - A[2]`

For the low score,
we can always have 2 same numbers,
so low score is 0.
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`

Also we can one pass,
and find out the 3 biggest and 3 smallest in `O(n)`
<br>

**Java**
```java
    public int minimizeSum(int[] A) {
        int n = A.length;
        Arrays.sort(A);
        return Math.min(Math.min(A[n - 1] - A[2], A[n - 3] - A[0]), A[n - 2] - A[1]);
    }
```

**C++**
```cpp
    int minimizeSum(vector<int>& A) {
        int n = A.size();
        sort(A.begin(), A.end());
        return min({A[n - 1] - A[2], A[n - 3] - A[0], A[n - 2] - A[1]});
    }
```

**Python**
```py
    def minimizeSum(self, A):
        A.sort()
        return min(A[-1] - A[2], A[-2] - A[1], A[-3] - A[0])
```
