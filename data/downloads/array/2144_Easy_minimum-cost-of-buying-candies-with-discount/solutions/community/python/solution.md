# [Java/C++/Python] Easy and Consice

**Author:** lee215
**Votes:** 96
**Link:** [https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/1709892/](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/solutions/1709892/)

---

# **Explanation**
For the max value, we have to pay for it.
For the second max value, we still have to pay for it.
For the third max value, we can get it free one as bonus.
And continuely do this for the rest.

The the core of problem, is need to sort the input.
All `A[i]` with `i % 3  == n % 3`, we can get it for free.
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int minimumCost(int[] A) {
        Arrays.sort(A);
        int res = 0, n = A.length;
        for (int i = 0; i < n; ++i)
            if (i % 3 != n % 3)
                res += A[i];
        return res;
    }
```

**C++**
```cpp
    int minimumCost(vector<int>& A) {
        sort(A.begin(), A.end());
        int res = 0, n = A.size();
        for (int i = 0; i < A.size(); ++i)
            if (i % 3 != n % 3)
                res += A[i];
        return res;
    }
```

**Python**
```py
    def minimumCost(self, A):
        return sum(a for i,a in enumerate(sorted(A)) if (len(A) - i) % 3)
```
```
    def minimumCost(self, A):
        return sum(A) - sum(sorted(A)[-3::-3])
```
