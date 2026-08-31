# Dart beats 100%

**Author:** simpleAsSword
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4474566/](https://leetcode.com/problems/minimum-difficulty-of-a-job-schedule/solutions/4474566/)

---



# Code
```
class Solution {
  int minDifficulty(List<int> jobDifficulty, int d) {
  int jobs = jobDifficulty.length;

  if (jobs < d) return -1;

  List<List<int>> dp = List.generate(
      d, (index) => List<int>.filled(jobs, 0), growable: false);

  dp[0][0] = jobDifficulty[0];
  for (int i = 1; i < jobs; i++) {
    dp[0][i] = dp[0][i - 1] > jobDifficulty[i] ? dp[0][i - 1] : jobDifficulty[i];
  }

  final int largeValue = 1 << 30;
  for (int days = 1; days < d; days++) {
    for (int i = days; i < jobs; i++) {
      int localMax = jobDifficulty[i];
         dp[days][i] = largeValue; 

      for (int j = i; j >= days; j--) {
        localMax = localMax > jobDifficulty[j] ? localMax : jobDifficulty[j];
        dp[days][i] =
            (dp[days][i] < dp[days - 1][j - 1] + localMax) ? dp[days][i] : dp[days - 1][j - 1] + localMax;
      }
    }
  }

  return dp[d - 1][jobs - 1];
    
  }
}
```