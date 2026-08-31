# [Java/C++/Python] Prefix Sum Average O(n)

**Author:** lee215
**Votes:** 252
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/2706521/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/2706521/)

---

# **Intuition**
In one operation:
decrease A[i] by 1.
increase A[i - 1] by 1.

We actully move the value of A[i] to A[i - 1] by 1,
the sum won't change.

If `A[i] < A[i + 1]`,
then we can repeatly do the operations,
until `A[i] >= A[i+1]`.
So finally the array `A` will become decrescent order.
<br>

# **Explanation**
We calculate the prefix sum arrray and their average.
The average is the lower bound of the result,
and it's reachable lower bound by the process in intuition,
so this average is the result.
<br>

# Calculate average
We need to calculate the ceil integer of the average,
For example `7 = 3 + 2 + 2`,
the ceil average is `3`.

The ceil average with `sum` of `i + 1` number:
`ceil(double(sum) / (i + 1))`

We can also do integer division:
`(sum + i) / (i + 1)`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int minimizeArrayValue(int[] A) {
        long sum = 0, res = 0;
        for (int i = 0; i < A.length; ++i) {
            sum += A[i];
            res = Math.max(res, (sum + i) / (i + 1));
        }
        return (int)res;
    }
```

**C++**
```cpp
    int minimizeArrayValue(vector<int>& A) {
        long sum = 0, res = 0;
        for (int i = 0; i < A.size(); ++i) {
            sum += A[i];
            res = max(res, (sum + i) / (i + 1));
        }
        return res;
    }
```

**Python**
```py
	def minimizeArrayValue(self, A: List[int]) -> int:
        return max((a + i) // (i + 1) for i,a in enumerate(accumulate(A)))
```
