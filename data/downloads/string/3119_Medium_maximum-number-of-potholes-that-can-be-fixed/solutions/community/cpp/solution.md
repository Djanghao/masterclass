# [C++] sort.

**Author:** lovebaonvwu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5459373/](https://leetcode.com/problems/maximum-number-of-potholes-that-can-be-fixed/solutions/5459373/)

---


```
class Solution {
public:
    int maxPotholes(string road, int budget) {
        vector<int> cnt;
        road += '.';
        for (int i = 0, sum = 0; i < road.size(); ++i) {
            if (road[i] == '.') {
                if (sum > 0) {
                    cnt.push_back(sum);
                }
                sum = 0;
            } else {
                ++sum;
            }
        }

        sort(rbegin(cnt), rend(cnt));

        int ans = 0;
        for (auto c : cnt) {
            if (budget >= c + 1) {
                ans += c;
                budget -= c + 1;
            } else if (budget > 0) {
                ans += min(budget - 1, c - 1);
                break;
            }
        }

        return ans;
    }
};
```