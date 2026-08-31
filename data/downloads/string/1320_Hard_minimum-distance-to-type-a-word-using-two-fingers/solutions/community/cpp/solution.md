# c++ | easy | short

**Author:** venomhighs7
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/2775985/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/2775985/)

---



# Code
```
class Solution {
public:
     int minimumDistance(string word) {
        vector<int> dp(26);
        int res = 0, save = 0, n = word.size();
        for (int i = 0; i < n - 1; ++i) {
            int b = word[i] - 'A', c = word[i + 1] - 'A';
            for (int a = 0; a < 26; ++a)
                dp[b] = max(dp[b], dp[a] + d(b, c) - d(a, c));
            save = max(save, dp[b]);
            res += d(b, c);
        }
        return res - save;
    }

    int d(int a, int b) {
        return abs(a / 6 - b / 6) + abs(a % 6 - b % 6);
    }
};
```