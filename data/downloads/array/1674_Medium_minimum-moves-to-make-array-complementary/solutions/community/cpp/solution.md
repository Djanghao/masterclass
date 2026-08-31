# [C++] Simple Line Sweep Technique [Linear Time Complexity]

**Author:** abhishek201202
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/1273125/](https://leetcode.com/problems/minimum-moves-to-make-array-complementary/solutions/1273125/)

---

```
class Solution {
public:
    int minMoves(vector<int>& a, int limit) {
        // each pair can provide a sum in a range of 
        // [l, r] => [min(a, b) + 1, max(a, b) + limit]
        // __
        //  ___
        //  ______
        //       ___
        //         ___
        //         ___
        //         ___
        //         ___
        //         ___
        //                  _____
        //                            _____
        // so basically each pair can provide some ranges like above
        // and to make sum equal to one of the values of the ranges 
        // we need only 1 move for that particular pair
        
        int n = a.size();
        vector<int> LineSweep(2e5, 0);
        vector<int> sum(2e5, 0);
        for(int i = 0; i < n/2; i++){
            int mn = min(a[i], a[n - 1 - i]) + 1;
            int mx = max(a[i], a[n - 1 - i]) + limit;
            LineSweep[mx + 1]--;
            LineSweep[mn]++;
            sum[a[i] + a[n - 1 - i]]++;
        }
        for(int i = 1; i < 2e5; i++) {
            LineSweep[i] += LineSweep[i - 1];
        }
        int res = n;
        for(int possibleSum = 2; possibleSum < 2e5; possibleSum++){
            res = min(res, n - LineSweep[possibleSum] - sum[possibleSum]);
        }
        return res;
    }
};
```