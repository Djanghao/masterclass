# [C++] O(n*sqrt(n)) Solution | Simple divisor count

**Author:** uds5501
**Votes:** 7
**Link:** [https://leetcode.com/problems/four-divisors/solutions/726764/](https://leetcode.com/problems/four-divisors/solutions/726764/)

---

```
class Solution {
public:
    int sumFourDivisors(vector<int>& nums) {
        int ans = 0, sum, cnt;
        for(auto &num: nums) {
            sum = 0;
            cnt = 0;
            for(int j=1; j*j<=num; j++) {
                if (num%j==0) {
                    if (num/j == j) {
                        sum += j;
                        cnt++;
                    } else {
                        sum += j + (num/j);
                        cnt += 2;
                    }
                }
            }
            if (cnt == 4) ans += sum;
        }
        return ans;
    }
};
```