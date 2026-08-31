# [Java/C++/Python] max(A[i] - A[i-2)

**Author:** lee215
**Votes:** 126
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/2897948/](https://leetcode.com/problems/frog-jump-ii/solutions/2897948/)

---

# **Intuition 1**
"travel to the last stone and then return to the first stone."
It means there are two path from first to last stone,
and two path have no intersection in the middle.
We can image there are two frog jump from first to the last.


# **Intuition 2**
If one stone not in path one and path 2,
we can greedily add it to either of the path.
So it exists a best solution, that all stones are used.
<br>

# **Explanation**
So we are going to assign stones to two frogs alternatively:
`A[0]  A[1]	A[2]  A[3]	...`
`start frog1 frog2 frog1 ...`

If we assign them not alternatively like:
`frog1 frog2 frog2 frog1`

The distance for frog 1 is huge and it's no better than
`frog1 frog2 frog1 frog2`

So in this problem,
we need to calculate the maximunm distance between `A[i] - A[i-2]`.
Special case is only two stones, so we initial `res = A[1] - A[0]`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int maxJump(int[] A) {
        int res = A[1] - A[0], n = A.length;
        for(int i = 2; i < n; ++i)
            res = Math.max(res, A[i] - A[i - 2]);
        return res;
    }
```

**C++**
```cpp
    int maxJump(vector<int>& A) {
        int res = A[1] - A[0], n = A.size();
        for (int i = 2; i < n; ++i)
            res = max(res, A[i] - A[i - 2]);
        return res;
    }
```

**Python**
```py
    def maxJump(self, A):
        res = A[1] - A[0];
        for i in range(2, len(A)):
            res = max(res, A[i] - A[i - 2])
        return res
```
