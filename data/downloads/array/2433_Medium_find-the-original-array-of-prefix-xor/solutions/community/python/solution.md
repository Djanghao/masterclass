# [Java/C++/Python] Easy and Concise with Explantion

**Author:** lee215
**Votes:** 110
**Link:** [https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/2678904/](https://leetcode.com/problems/find-the-original-array-of-prefix-xor/solutions/2678904/)

---

# **Intuition**
Do this first:
Given `pref`, find `arr` that
`pref[i] = arr[0] + arr[1] + ... + arr[i]`
`pref` is prefix sum of `arr`

The solution is simple:
```cpp
for(int i = A.size() - 1; i > 0; --i)
    A[i] -= A[i - 1];
return A;
```

Now we are doing something similar for this problem.
<br>

# **Explanation**
Since `pref` is the prefix array,
it's calculated from `arr` one by one,
we can doing this process reverssely to recover the original array.

Since
`pref[i] = pref[i-1] ^ A[i]`
so we have
`pref[i] ^ pref[i-1] = A[i]`

So we simply change `-` to `^` in the intuition solution

The reverse operation of `+` is `-`
The reverse operation of `^` is still `^`
More general, we can apply this solution to prefix of any operation.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int[] findArray(int[] A) {
        for (int i = A.length - 1; i > 0; --i)
            A[i] ^= A[i - 1];
        return A;
    }
```
**C++**
```cpp
    vector<int> findArray(vector<int>& A) {
        for (int i = A.size() - 1; i > 0; --i)
            A[i] ^= A[i - 1];
        return A;
    }
```
**Python**
```py
    def findArray(self, A):
        for i in range(len(A) - 1, 0, -1):
            A[i] ^= A[i - 1]
        return A
```
**Pythonic2**
```py
    def findArray(self, A):
        return map(xor, A, [0] + A[:-1])
```
