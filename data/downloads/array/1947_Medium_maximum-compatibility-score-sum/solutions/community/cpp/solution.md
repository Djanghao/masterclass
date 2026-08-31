# C++ | Recursive DP | Bitmasking | 3ms | 10 MB | Beats 99.62%

**Author:** raiaankur1
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/2211024/](https://leetcode.com/problems/maximum-compatibility-score-sum/solutions/2211024/)

---

![image](./images/0.png)

```
int score[8][8];
int dp[8][1<<8];
int n;
int backtrack(int i, int mask){
	if(i==n) return 0;
	if(dp[i][mask]!=-1) return dp[i][mask];
	int ret=INT_MIN;
	for(int j=0; j<n; j++)
		if(mask&(1<<j))
		ret = max(ret, score[i][j] + backtrack(i+1, mask^(1<<j)));
	return dp[i][mask] = ret;
}
int maxCompatibilitySum(vector<vector<int>>& students, vector<vector<int>>& mentors) {
	memset(dp, -1, sizeof dp);
	memset(score, 0, sizeof score);
	n=students.size();
	for(int i=0; i<n; i++)
		for(int j=0; j<n; j++)
			for(int k=0; k<students[0].size(); k++)
				score[i][j] += students[i][k]==mentors[j][k];
	return backtrack(0, (1<<n)-1); //start with 1st student; with all the mentors available to assign
//(1<<n-1 has all the n bits ON)
}
/*
Hint:
	Similar to job assignment problem.
*/
```

Thanks \u270C