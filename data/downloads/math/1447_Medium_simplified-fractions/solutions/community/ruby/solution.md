# A Nice™ Solution.

**Author:** casd82
**Votes:** 0
**Link:** [https://leetcode.com/problems/simplified-fractions/solutions/948679/](https://leetcode.com/problems/simplified-fractions/solutions/948679/)

---

![image](./images/0.png)

NICE!

```
class Solution {
    int gcd(int x, int y) {
        while (y) {
            int tmp = x % y;
            x = y;
            y = tmp;
        }
        return x;
    }
public:
    vector<string> simplifiedFractions(int n) {
        vector<string> res;
        for (int bot = 2; bot <= n; ++bot) {
            for (int top = 1; top < bot; ++top) {
                if (gcd(top, bot) == 1) {
                    res.push_back(to_string(top) + "/" + to_string(bot));
                }
            }
        }
        return res;
    }
};
```