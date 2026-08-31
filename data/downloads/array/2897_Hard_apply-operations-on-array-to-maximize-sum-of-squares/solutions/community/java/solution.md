# [Java/C++/Python] Count Bits

**Author:** lee215
**Votes:** 89
**Link:** [https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4143971/](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4143971/)

---

# **Explanation**
Observe the effect of an operation on one bit:
`(1, 1) -> (1 & 1, 1 | 1) -> (1, 1)`
`(0, 0) -> (0 & 0, 0 | 0) -> (0, 0)`
`(0, 1) -> (0 & 1, 0 | 1) -> (0, 1)`
`(1, 0) -> (1 & 0, 1 | 0) -> (0, 1)`

The first three cases won't change anything,
the last case will move the bit from `A[i]` to `A[j]`.

So apply operation as many as possible,
it will sort the array on each bit,
from random array `[1,0,1,0,1,0,0]`,
to a sorted array `[0,0,0,0,1,1,1]`.


# **Explanation**
Count the number of `1` on each `32` bits,
and we will use these bits to construct the array again,
by use them in as late as possible in the array.
Then we can know the finally sorted array.

The core of this process is counting sort on each bit.
<br>

# **Complexity**
Time `O(32n)`
Space `O(32)`
<br>

**Java**
```java
    public int maxSum(List<Integer> A, int k) {
        int count[] = new int[32];
        long res = 0, cur = 0, mod = 1000000007;
        for (int a : A)
            for (int i = 0; i < 32; i++)
                if ((a & (1 << i)) != 0)
                    count[i]++;
        for (int j = 0; j < k; j++) {
            cur = 0;
            for (int i = 0; i < 32; i++) {
                if (count[i] > 0) {
                    count[i]--;
                    cur += 1 << i;
                }
            }
            res = (res + cur * cur % mod) % mod;
        }
        return (int)res;
    }
```

**C++**
```cpp
    int maxSum(vector<int>& A, int k) {
        vector<int> count(32);
        for (int a : A)
            for (int i = 0; i < 32; i++)
                if (a & (1 << i))
                    count[i]++;
        int res = 0, mod = 1e9 + 7;
        for (int j = 0; j < k; j++) {
            int cur = 0;
            for (int i = 0; i < 32; i++) {
                if (count[i] > 0) {
                    count[i]--;
                    cur += 1 << i;
                }
            }
            res = (res + 1L * cur * cur % mod) % mod;
        }
        return res;
    }
```

**Python**
```py
    def maxSum(self, A: List[int], k: int) -> int:
        count = [0] * 35
        for a in A:
            for i in range(35):
                if a & (1 << i):
                    count[i] += 1
        res = 0
        mod = 10 ** 9 + 7
        for j in range(k):
            cur = 0
            for i in range(35):
                if count[i]:
                    count[i] -= 1
                    cur += 1 << i
            res += cur * cur % mod
        return res % mod
```

**Shorter Python**
```py
    def maxSum(self, A: List[int], k: int) -> int:
        count = Counter(i for a in A for i in range(32) if a & (1 << i))
        return sum(sum((count[i] > j) << i for i in range(32)) ** 2 for j in range(k)) % (10 ** 9 + 7)
```

