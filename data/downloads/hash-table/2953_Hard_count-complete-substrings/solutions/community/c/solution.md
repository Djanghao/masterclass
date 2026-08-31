# [k, 2k, ...26k] Sliding Windows

**Author:** votrubac
**Votes:** 33
**Link:** [https://leetcode.com/problems/count-complete-substrings/solutions/4356262/](https://leetcode.com/problems/count-complete-substrings/solutions/4356262/)

---

We can have 1, 2, ..., 26 unique characters in the string.

That number of characters defines the size of our sliding window.

As we slide, we track how many characters appear exactly `k` times.

Note that when the difference between two adjacent characters exceeds `2`, we restart the window.

**C++**
```cpp
int countCompleteSubstrings(const string &w, int k) {
    int res = 0;
    for (int chars = 1; chars <= min((int)w.size() / k, 26); ++chars) {
        int cnt[26] = {}, exact = 0, sz = chars * k;
        for (int i = 0, j = 0; i < w.size(); ++i) {
            if (i && (abs(w[i] - w[i - 1]) > 2)) {
                memset(cnt, 0, sizeof(cnt));
                exact = 0;
                j = i;
            }
            int reps = ++cnt[w[i] - 'a'];
            exact += reps == k ? 1 : reps == k + 1 ? -1 : 0;
            if (i - j + 1 >= sz) {
                if (i - j >= sz) {
                    int reps = --cnt[w[j++] - 'a'];
                    exact += reps == k ? 1 : reps == k - 1 ? -1 : 0;
                }
                res += exact == chars;
            }
        }
    }
    return res;
}
```
**Python**
The equivalent Python code needs a bit of optimization to pass the time limits.
```python
class Solution:
    def countCompleteSubstrings(self, w: str, k: int) -> int:
        res = 0
        for chars in range(1, min(len(w) // k, 26) + 1):
            exact, sz, cnt = 0, chars * k, [0] * 26
            dirty = False
            j = 0
            for i in range(0, len(w)):
                if i and abs(ord(w[i]) - ord(w[i - 1])) > 2:
                    exact, dirty = 0, True
                    j = i
                if dirty:
                    dirty = False
                    cnt = [0] * 26
                cnt[ord(w[i])- ord('a')] += 1
                reps = cnt[ord(w[i]) - ord('a')]
                exact += 1 if reps == k else -1 if reps == k + 1 else 0
                if i - j + 1 >= sz:
                    if i - j >= sz:
                        cnt[ord(w[j]) - ord('a')] -= 1
                        reps = cnt[ord(w[j]) - ord('a')]
                        exact += 1 if reps == k else -1 if reps == k - 1 else 0
                        j += 1
                    res += exact == chars
        return res
```