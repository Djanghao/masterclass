# [Java/C++/Python] Count Remainders

**Author:** lee215
**Votes:** 38
**Link:** [https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3314226/](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/solutions/3314226/)

---

# **Intuition**
Assume remainder `r = A[i] % k`,
then `A[i]` can be changed to `r, r + k, r + k * 2....`
So we need to check the remainder of all `A[i]` by module `k`.
<br>

# **Explanation**
Counts the frequence of remainders.
For `A[i] >= 0`, `A[i] % k` is non-negative.
For `A[i] < 0`, `A[i] % k` is negative, we need to make it non-negative by `A[i] % k + k`.
So we will calculate all `(A[i] % k + k) % k`,
and counts the frequeny `count`.



In the round,
we will try to have 0,1,2,3,...,k-1,
where every remainder appear once.

In the second round,
we will try to have k,k+1,k+2,k+3,...,k+k-1,
where every remainder appear once.

So each round,
every remainder appear once.
The sequence will `stop` at the remainder with the minimum frequency.
`min[count]` is the number of complete round we can have

Finally return `k * count[stop] + stop`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int findSmallestInteger(int[] A, int k) {
        int stop = 0, count[] = new int[k];
        for (int a : A)
            count[(a % k + k) % k]++;
        for (int i = 0; i < k; ++i)
            if (count[i] < count[stop])
                stop = i;
        return k * count[stop] + stop;
    }
```

**C++**
```cpp
    int findSmallestInteger(vector<int>& A, int k) {
        vector<int> count(k, 0);
        for (int& a : A)
            count[(a % k + k) % k]++;
        int stop = 0;
        for (int i = 0; i < k; ++i)
            if (count[i] < count[stop])
                stop = i;
        return k * count[stop] + stop;
    }
```

**Python**
```py
    def findSmallestInteger(self, A, k):
        count = Counter(a % k for a in A)
        stop = 0
        for i in range(k):
            if count[i] < count[stop]:
                stop = i
        return k * count[stop] + stop
```
