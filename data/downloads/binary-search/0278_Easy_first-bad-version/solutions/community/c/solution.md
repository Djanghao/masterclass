# C++ Simple and Short Solution, O(log(n)), 0ms Faster than 100%

**Author:** YehudisK
**Votes:** 43
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/1454609/](https://leetcode.com/problems/first-bad-version/solutions/1454609/)

---

```
class Solution {
public:
    int firstBadVersion(int n) {
        int lo = 1, hi = n, mid;
        while (lo < hi) {
            mid = lo + (hi - lo) / 2;
            if (isBadVersion(mid)) hi = mid;
            else lo = mid+1;
        }
        return lo;
    }
};
```
**Like it? please upvote!**