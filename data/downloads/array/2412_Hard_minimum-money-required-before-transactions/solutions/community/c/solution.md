# [Java/C++/Python] Easy and Coincise 🔥

**Author:** lee215
**Votes:** 178
**Link:** [https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/2588034/](https://leetcode.com/problems/minimum-money-required-before-transactions/solutions/2588034/)

---

# **Intuition**
The worst case is losing all money first,
then we earn money later.
<br>

# **Explanation**
First we calculate the sum of all money we can lose.
That is the sum of lost money is
`sum_lose = sum(max(0, cost[i] - cashback[i]))`

Assume before the last transaction thet lose money,
we have `money = cost[i]`,
we spent all money as cost for this transaction,
we have no money left.
After transaction, we have `money = cashback[i]`.

So the initial money is at least `sum_lose + cashback[i]`
and after all losing money,
we need at least `max(cost[i])`,
where `cost[i]` is the cost for all earning money transaction.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long minimumMoney(int[][] A) {
        long res = 0; int v = 0;
        for (int[] a : A) {
            v = Math.max(v, Math.min(a[0], a[1]));
            res += Math.max(a[0] - a[1], 0);
        }
        return res + v;
    }
```

**C++**
```cpp
    long long minimumMoney(vector<vector<int>>& A) {
        long long res = 0; int v = 0;
        for (auto& a : A) {
            v = max(v, min(a[0], a[1]));
            res += max(a[0] - a[1], 0);
        }
        return res + v;
    }
```

**Python**
```py
    def minimumMoney(self, A):
        res = v = 0
        for i,j in A:
            res += max(0, i - j)
            v = max(v, min(i, j))
        return res + v
```
**Python 1-line**
```py
    def minimumMoney(self, A):
        return sum(max(0, i - j) for i, j in A) + max(map(min, A))
```
