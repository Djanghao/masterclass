# [Java/Python 3] Longest sliding window w/ at most k 'T' or 'F'.

**Author:** rock
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/1499054/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/1499054/)

---

We can respectively replace at most `k`
1. `T`s;
2. `F`s.

In either of the above `2` cases we use sliding window algorithm to find the longest substring that contains at most `k` `T`s / `F`s, then return the greater one.

```java	
    public int maxConsecutiveAnswers(String key, int k) {
        return Math.max(longestWin(key, 'T', k), longestWin(key, 'F', k));
    }
    private int longestWin(String key, char c, int k) {
        int win = 0;
        for (int lo = -1, hi = 0; hi < key.length(); ++hi) {
            k -= key.charAt(hi) == c ? 1 : 0;
            while (k < 0) {
                k += key.charAt(++lo) == c ? 1 : 0;
            }
            win = Math.max(win, hi - lo);
        }
        return win;
    }
```
```python
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        
        def longestWin(c: str, k: int) -> int:
            lo, win = -1, 0
            for hi in range(len(answerKey)):
                k -= answerKey[hi] == c
                while k < 0:
                    lo += 1
                    k += answerKey[lo] == c
                win = max(win, hi - lo)
            return win     

        return max(longestWin('T', k), longestWin('F', k))
```

**Analysis:**

Time: `O(n)`, space: `O(1)`, where `n = answerKey.length()`.