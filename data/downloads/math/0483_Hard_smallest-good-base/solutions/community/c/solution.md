# C++ solutions

**Author:** Infox_92
**Votes:** 5
**Link:** [https://leetcode.com/problems/smallest-good-base/solutions/2866881/](https://leetcode.com/problems/smallest-good-base/solutions/2866881/)

---

```
class Solution {
public:
    string smallestGoodBase(string n) {
        typedef unsigned long long ll;
        ll num = stol(n);
        for (ll p = log(num+1) / log(2); p >= 2; --p) {
            ll lk = 2, rk = pow(num, 1.0 / (p-1))+1;
            while (lk <= rk) {
                ll mk = lk + (rk - lk) / 2, sum = 0;
                for (ll i = 0, f = 1; i < p; ++i, f *= mk)
                    sum += f;
                if (sum < num) lk = mk+1;
                else if (sum > num) rk = mk-1;
                else return to_string(mk);
            }
        }
        return to_string(num-1);
    }
};
```