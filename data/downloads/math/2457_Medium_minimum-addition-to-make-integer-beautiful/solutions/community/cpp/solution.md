# Short & Concise | C++

**Author:** TusharBhart
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2758442/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/2758442/)

---

```
class Solution {
    int sum(long long n) {
        long long s = 0;
        while(n) s += n % 10, n /= 10;
        return s;
    }
public:
    long long makeIntegerBeautiful(long long n, int target) {
        long long org = n;
        if(sum(n) <= target) return 0;
        
        long long r = 10;
        while(sum(n) > target) {
            if(n % r == 0) r *= 10;
            n = (n / r + 1) * r;
            r *= 10;
        }
        return n - org;
    }
};
```