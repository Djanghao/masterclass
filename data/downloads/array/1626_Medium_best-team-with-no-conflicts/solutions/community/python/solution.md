# Day 31 || C++ || DP - Easiest Beginner Friendly Sol || O(n^2) time and O(n) space

**Author:** singhabhinash
**Votes:** 213
**Link:** [https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3120787/](https://leetcode.com/problems/best-team-with-no-conflicts/solutions/3120787/)

---

# Intuition of this Problem:
This problem is same as longest increasing subsequence and we can solve this problem using dynamic programming.
<!-- Describe your first thoughts on how to solve this problem. -->
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**

# Approach for this Problem:
1. Create a pair array of size n where n is the size of scores and ages arrays.
2. Store each player's score and age as a pair in the above array.
3. Sort the pair array in increasing order of age.
4. Initialize an array dp of size n and set dp[i] to be the score of player i for all 0 <= i < n.
5. Initialize a variable ans to store the maximum overall score.
6. Loop through the pair array from index i = 0 to i = n - 1.
7. For each i, loop through j from 0 to i - 1.
8. If the score of player j is less than or equal to the score of player i, update dp[i] to be the maximum of dp[i] and dp[j] + score[i].
9. Set ans to be the maximum of ans and dp[i].
10. Return ans as the result.
<!-- Describe your approach to solving the problem. -->


# Code:
```C++ []
class Solution {
public:
    int bestTeamScore(vector<int>& scores, vector<int>& ages) {
        int n = scores.size();
        int dp[n], ans = 0;
        vector<pair<int, int>> players;
        for(int i = 0; i < n; i++) 
            players.push_back({ages[i], scores[i]});
        sort(players.begin(), players.end());
        for(int i = 0; i < n; i++) {
            dp[i] = players[i].second;
            for(int j = 0; j < i; j++) {
                if(players[j].second <= players[i].second)
                    dp[i] = max(dp[i], dp[j] + players[i].second);
            }
            ans = max(ans, dp[i]);
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int bestTeamScore(int[] scores, int[] ages) {
        int n = scores.length;
        int dp[] = new int[n];
        int ans = 0;
        Pair<Integer, Integer> players[] = new Pair[n];
        for(int i = 0; i < n; i++) 
            players[i] = new Pair<>(ages[i], scores[i]);
        Arrays.sort(players, new Comparator<Pair<Integer, Integer>>(){
            public int compare(Pair<Integer, Integer> a, Pair<Integer, Integer> b){
                return a.getKey().compareTo(b.getKey());
            }
        });
        for(int i = 0; i < n; i++) {
            dp[i] = players[i].getValue();
            for(int j = 0; j < i; j++) {
                if(players[j].getValue() <= players[i].getValue())
                    dp[i] = Math.max(dp[i], dp[j] + players[i].getValue());
            }
            ans = Math.max(ans, dp[i]);
        }
        return ans;
    }
}

```
```Python []
from typing import List
class Solution:
    def bestTeamScore(self, scores: List[int], ages: List[int]) -> int:
        n = len(scores)
        dp = [0] * n
        ans = 0
        players = [(ages[i], scores[i]) for i in range(n)]
        players.sort(key = lambda x: x[0])
        for i in range(n):
            dp[i] = players[i][1]
            for j in range(i):
                if players[j][1] <= players[i][1]:
                    dp[i] = max(dp[i], dp[j] + players[i][1])
            ans = max(ans, dp[i])
        return ans


```

# Time Complexity and Space Complexity:
- Time complexity: **O(n^2)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(n)** // using extra space of size n
<!-- Add your space complexity here, e.g. $$O(n)$$ -->