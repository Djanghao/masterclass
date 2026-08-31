# [Java/C++/Python] 3 Approachs, Best O(n)

**Author:** lee215
**Votes:** 114
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3111736/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3111736/)

---


# **Intuition**
Seems a `O(nk)` dp problem at the first galance,
when observe the effect of different cut points,
I realize it's more like problem,
to pick `k` largest/smallest from `n` numbers.
<br>

# **Explanation**
First for any of distributions,
we will sum up `A[0]` and `A[n - 1]` in the total socre,
so this won't make any difference between max and min.

To split into `k` bags,
we actually choose `k-1` cut points:
A[0]...A[i1]
A[i1+1]....A[i2]
A[i2+1]....A[i3]
....
A[ik+1]....A[n-1]

The result score is:
`(A[0] + A[i1]) + (A[i2] + A[i3]) +..... + (A[ik+1] + A[n-1])`
equals to
`A[0] + (A[i1] + A[i1+1]) + (A[i2] + A[i2+1]) + ....`

So the problem turns out to be,
calculate the max/min sum of `k - 1` numbers in
A[0] + A[1], A[1] + A[2],..., A[n-1] + A[n].

We can simply sort them in `O(sort)`
or we can apply a priority queue in `O(nlogk)`.
<br>

# Solution 1: Sort
**Java**
Time `O(nlogn)`
Space `O(n)`
```java
    public long putMarbles(int[] A, int k) {
        int n = A.length - 1;
        long B[] = new long[n], res = 0;
        for (int i = 0; i < B.length; i++) {
            B[i] = A[i] + A[i + 1];
        }
        Arrays.sort(B);
        for (int i = 0; i < k - 1; i++) {
            res += B[n - 1 - i] - B[i];
        }
        return res;
    }
```
**C++**
Time `O(nlogn)`
Space `O(n)`
```cpp
    long long putMarbles(vector<int> A, int k) {
        long long res = 0, n  = A.size() - 1;
        for (int i = 0; i < n; ++i)
            A[i] += A[i + 1];
        A.pop_back();
        sort(A.begin(), A.end());
        for (int i = 0; i < k - 1; ++i)
            res += A[n - 1 - i] - A[i];
        return res;
    }
```
<br>

# **Solution 2: Priority Queue**
**Python3**
Time `O(nlogk)`
Space `O(k)`
```py
    def putMarbles(self, A: List[int], k: int) -> int:
        B = [a + b for a,b in pairwise(A)]
        return sum(nlargest(k - 1, B)) - sum(nsmallest(k - 1, B))
```
<br>

# **Solution 3: Quick Select**
Using `nth_element` in C++
Time `O(n)`
Space `O(n)`
```cpp
    long long putMarbles(vector<int> A, int k) {
        long long res = 0, n  = A.size() - 1;
        for (int i = 0; i < n; ++i)
            A[i] += A[i + 1];
        A.pop_back();
        nth_element(A.begin(), A.begin() + k - 1, A.end());
        for (int i = 0; i < k - 1; ++i)
            res -= A[i];
        nth_element(A.begin(), A.begin() + n - k + 1, A.end());
        for (int i = 0; i < k - 1; ++i)
            res += A[n - 1 - i];
        return res;
    }
```
