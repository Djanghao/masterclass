# [Java/C++/Python] One Pass, Best is Always the Best

**Author:** lee215
**Votes:** 48
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5280219/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5280219/)

---

Note this problem is almost same as problem
[1535. Find the Winner of an Array Game](https://leetcode.com/problems/find-the-winner-of-an-array-game/discuss/768007/JavaC%2B%2BPython-One-Pass-O(1)-Space)
<br>

# **Intuition**
If we iterate all `a` in `A`,
and no one win `k` rounds,
then the current winner must be `max(A)`,
and no one can best `max(A)`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int findWinningPlayer(int[] A, int k) {
        int i = 0, cur = 0, n = A.length;
        for (int j = 1; j < n; ++j) {
            if (A[i] < A[j]) {
                cur = 0;
                i = j;
            }
            if (++cur == k) break;
        }
        return i;
    }
```

**C++**
```cpp
    int findWinningPlayer(vector<int>& A, int k) {
        int i = 0, cur = 0, n = A.size();
        for (int j = 1; j < n; ++j) {
            if (A[i] < A[j]) {
                cur = 0;
                i = j;
            }
            if (++cur == k) break;
        }
        return i;
    }
```

**Python**
```py
    def findWinningPlayer(self, A: List[int], k: int) -> int:
        i = cur = 0
        for j in range(1, len(A)):
            if A[i] < A[j]:
                cur = 0
                i = j
            cur += 1
            if cur == k:
                break
        return i
```
