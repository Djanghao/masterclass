# C++(0ms faster than 100%)Ruby(111ms faster than 85.71%)

**Author:** Vucius
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-sorted-vowel-strings/solutions/2027272/](https://leetcode.com/problems/count-sorted-vowel-strings/solutions/2027272/)

---

# [**C++**](https://leetcode.com/submissions/detail/697095738/)
```
class Solution {
public:
    int countVowelStrings(int n) {
        vector<vector<int>> dp(n, vector<int>(5, 1));
        int i, j;
        for (i = 1; i < n; i++) {
            dp[i][0] = accumulate(dp[i - 1].begin(), dp[i - 1].end(), 0);
            for (j = 1; j < 4; j++)
                dp[i][j] = dp[i][j - 1] - dp[i - 1][j - 1];
            dp[i][j] = 1;
        }
        cout << i << " " << n;
        return accumulate(dp[n - 1].begin(), dp[n - 1].end(), 0);
        //return 0;
    }
};
//5
//5+4+3+2+1 == 15
//15+10+6+3+1 == 35
//35 + 20 + 10 + 4 +1 == 70
//70 + 35 + 15 + 5 +1 == 
```
# [**Ruby**](https://leetcode.com/submissions/detail/697100154/)
```
# @param {Integer} n
# @return {Integer}
def count_vowel_strings(n)
    dp = [[1, 1, 1, 1, 1]]
    for i in 1...n
        dp[i] = Array.new(5)
        dp[i][0] = dp[i - 1].sum
        dp[i][1] = dp[i][0] - dp[i - 1][0]
        dp[i][2] = dp[i][1] - dp[i - 1][1]
        dp[i][3] = dp[i][2] - dp[i - 1][2]
        dp[i][4] = 1
    end
    dp[-1].sum
end
```