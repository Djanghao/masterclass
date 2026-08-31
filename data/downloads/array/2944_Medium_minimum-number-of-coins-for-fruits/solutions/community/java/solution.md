# [Java/C++/Python] Deque, O(n)

**Author:** lee215
**Votes:** 28
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4331034/](https://leetcode.com/problems/minimum-number-of-coins-for-fruits/solutions/4331034/)

---

# **Need to know**
You can read other `O(n^2)` brute force solution first,
this will help to understand dp relationship.
<br>


# **Explanation**
`dp[i]` is the minimum number of coins needed to acquire all `i` first fruits.
We use a deque `q` to store the previous index of availbale good price.

Iterate each fruit,
we can buy it with price `A[i]`,

Before that we check if we can get it for free,
- we pop from deque front, if they are too small to get the free fruit.
- we pop from deque back, if they are more expensive thancurrent deal `dp[i] + A[i]`

Then we append the current index to the deque,
and use the top deal of deque to get `dp[i + 1] = dp[q[0]] + A[q[0]]``

Finally we return `dp[n]`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public int minimumCoins(int[] A) {
        int n = A.length, dp[] = new int[n + 1];
        Deque<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            while (!q.isEmpty() && (q.getFirst() + 1) * 2 < i + 1)
                q.removeFirst();
            while (!q.isEmpty() && dp[q.getLast()] + A[q.getLast()] >= dp[i] + A[i])
                q.removeLast();
            q.addLast(i);
            dp[i + 1] = dp[q.getFirst()] + A[q.getFirst()];
        }
        return dp[n];
    }
```

**C++**
```cpp
    int minimumCoins(vector<int>& A) {
        int n = A.size();
        vector<int> dp(n + 1, 0);
        deque<int> q;
        for (int i = 0; i < n; i++) {
            while (!q.empty() && (q.front() + 1) * 2 < i + 1)
                q.pop_front();
            while (!q.empty() && dp[q.back()] + A[q.back()] >= dp[i] + A[i])
                q.pop_back();
            q.push_back(i);
            dp[i + 1] = dp[q.front()] + A[q.front()];
        }
        return dp[n];
    }
```

**Python**
```py
    def minimumCoins(self, A: List[int]) -> int:
        n = len(A)
        dp = [0] * (n + 1)
        q = deque();
        for i in range(n):
            while q and (q[0] + 1) * 2 < i + 1:
                q.popleft();
            while q and dp[q[-1]] + A[q[-1]] >= dp[i] + A[i]:
                q.pop();
            q.append(i);
            dp[i + 1] = dp[q[0]] + A[q[0]]
        return dp[-1];
```
