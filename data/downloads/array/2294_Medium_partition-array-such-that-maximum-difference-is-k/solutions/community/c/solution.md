# [Java/C++/Python] Sort + Greedy

**Author:** lee215
**Votes:** 63
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2112243/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/2112243/)

---

# **Explanation**
`mn` means the minimum number in the current sequence.
`mx` means the maximum number in the current sequence.

Iterate each element `A[i]` in the input array,
and we try to add it into the current subsequence.

We need to check if the differnce is still good.
So we firstly update the value of  `mn` and `mx`
`mn = min(mn, a)`
`mx = max(mx, a)`.


If `mx - mn > k`,
this means the difference between the maximum and minimum values,
is bigger than `k`  in current subsequence,

`A[i]` cannot be added to the subsequence,
so we start a new subsequence with `A[i]` as the first element,
thus increment `res` and update `mn = mx = a`.

We continue doing this process and finally return result `res`.

Then I notice it's subsequences instead of subarray,
I added a sort at the beginning.....
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int partitionArray(int[] A, int k) {
        Arrays.sort(A);
        int res = 1, mn = A[0], mx = A[0];
        for (int a: A) {
            mn = Math.min(mn, a);
            mx = Math.max(mx, a);
            if (mx - mn > k) {
                res++;
                mn = mx = a;
            }
        }
        return res;
    }
```

**C++**
```cpp
    int partitionArray(vector<int>& A, int k) {
        sort(A.begin(), A.end());
        int res = 1, mn = A[0], mx = A[0];
        for (int& a: A) {
            mn = min(mn, a);
            mx = max(mx, a);
            if (mx - mn > k) {
                res++;
                mn = mx = a;
            }
        }
        return res;
    }
```

**Python**
```py
    def partitionArray(self, A, k):
        A.sort()
        res = 1
        mn = mx = A[0]
        for a in A:
            mn = min(mn, a)
            mx = max(mx, a)
            if mx - mn > k:
                res += 1
                mn = mx = a
        return res
```

# Solution II
**Java**
```java
    public int partitionArray(int[] A, int k) {
        Arrays.sort(A);
        int res = 1, n = A.length, j = 0;
        for (int i = 1; i < n; ++i) {
            if (A[i] - A[j] > k) {
                res++;
                j = i;
            }
        }
        return res;
    }
```

**C++**
```cpp
    int partitionArray(vector<int>& A, int k) {
        sort(A.begin(), A.end());
        int res = 1, n = A.size(), j = 0;
        for (int i = 1; i < n; ++i) {
            if (A[i] - A[j] > k) {
                res++;
                j = i;
            }
        }
        return res;
    }
```
**Python**
```py
    def partitionArray(self, A, k):
        A.sort()
        res, j = 1, 0
        for i in range(len(A)):
             if A[i] - A[j] > k:
                res += 1
                j = i
        return res
```
