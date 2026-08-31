# Sort and Track Previous || Clean Code

**Author:** Rookie0934
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844342/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/5844342/)

---


# Code
```cpp []
class Solution {
public:
    long long maximumTotalSum(vector<int>& maximumHeight) {
        int n = maximumHeight.size();
        sort(maximumHeight.begin(), maximumHeight.end());
        long long ans = 0;
        int prev = INT_MAX;
        for(int i=n-1; i>=0; i--) {
            if(maximumHeight[i] < prev) ans += maximumHeight[i], prev = maximumHeight[i];
            else ans += prev - 1, prev = prev - 1;
            if(prev == 0) return -1;
        }
        return ans;
    }
};
```