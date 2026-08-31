# Different Approaches || Linear & Binary Search || C++

**Author:** i_QUaSaR
**Votes:** 51
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/1484705/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/1484705/)

---

# Approach 1 : Recursive 
```
int maxProfit(vector<vector<int>>& jobs, int idx, const int& n)
{
	if(idx == n) return 0;

	// include current job and find the next job with start > curr end time
	int next = getNextJob(jobs, idx, n);     // Pick any one of the helper function
	int incl = jobs[idx][2] + maxProfit(jobs, next, n);

	// exclude current job
	int excl = maxProfit(jobs, idx+1, n);

	return max(incl, excl);
}
    
int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {

	int n = startTime.size();
	vector<vector<int>> jobs(n, vector<int>(3));

	for(int i=0; i<n; i++)
	{
		jobs[i][0] = startTime[i];
		jobs[i][1] = endTime[i];
		jobs[i][2] = profit[i];
	}

	sort(jobs.begin(), jobs.end(), compare);
	return maxProfit(jobs, 0, n);
}
```

# Approach 2 : Top Down DP (Recursive + Memoization)
```
unordered_map<int, int> dp;    // Only store for relavent index
int maxProfit(vector<vector<int>>& jobs, int idx, const int& n)
{
	if(idx == n) return 0;

	if(dp.find(idx) != dp.end()) return dp[idx];

	// include current job and find the next job with start > curr end time
	int next = getNextJob(jobs, idx, n);  // Pick any one of the helper function
	int incl = jobs[idx][2] + maxProfit(jobs, next, n);

	// exclude current job
	int excl = maxProfit(jobs, idx+1, n);

	return dp[idx] = max(incl, excl);
}

int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {

	int n = startTime.size();
	vector<vector<int>> jobs(n, vector<int>(3));

	for(int i=0; i<n; i++)
	{
		jobs[i][0] = startTime[i];
		jobs[i][1] = endTime[i];
		jobs[i][2] = profit[i];
	}

	sort(jobs.begin(), jobs.end(), compare);
	return maxProfit(jobs, 0, n);
}
```
# Approach 3 : Bottom Up DP

```
static bool compare(const vector<int>& a, const vector<int>& b)
{
	return a[0] < b[0];
}
    
    
int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {

	int n = startTime.size();
	vector<vector<int>> jobs(n, vector<int>(3));

	for(int i=0; i<n; i++)
	{
		jobs[i][0] = startTime[i];
		jobs[i][1] = endTime[i];
		jobs[i][2] = profit[i];
	}

	sort(jobs.begin(), jobs.end(), compare);

	vector<int> dp(n+1, 0);
	dp[n-1] = jobs[n-1][2];
	for(int i=n-1; i>=0; i--)
	{
		int next = getNextJob(jobs, i, n);  // Pick any one of the helper function
		int incl = dp[next] + jobs[i][2];
		int excl = dp[i+1];
		dp[i] = max(incl, excl);
	}
	return dp[0];
}
```
# Helper function : 
This function is used to get next job(closest) with start time >= end time of current job. We can find next job using 2 techniques.

**1. Using Linear Search : O(n)**
	
```
int getNextJob(vector<vector<int>>& jobs, int idx, const int& n)
{
	for(int i=idx+1; i<n; i++)
	{
		if(jobs[idx][1] <= jobs[i][0]) return i;
	}
	return n;
}
```

**2. Using Binary Search : O(log n)**

```
int getNextJob(vector<vector<int>>& jobs, int idx, const int& n)
{
	int lo = idx+1, hi = n-1, ans = n;
	while(lo <= hi) {
		int mid = (lo + hi) >> 1;
		if(jobs[idx][1] <= jobs[mid][0])
		{
			ans = mid;
			hi = mid-1;
		}
		else lo = mid + 1;
	}
	return ans;
}
```
	
**Time :**
	* For Linear Search function : O(N^2)
	* For Linear Search function : O(N* log N)

**Space:** O(N)

***Please upvote if this helped you in anyway :)***