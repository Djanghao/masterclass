# C++ Top Down Dynamic Programming w/ generic idea

**Author:** varkey98
**Votes:** 50
**Link:** [https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/846729/](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/846729/)

---

First of all, whenever the question asks you to find the objects chosen instead of the final value you get when you choose these objects (**like the indices selected in this question**) you can do the **DP** for finding the value (**like the maximum sum in this case**) and do a **DFS** for retracing the steps.

So first of for each index find the subarray sum of length k starting at that index and store it in an array. Then simply do a knapsack DP which is like you can either choose or not choose this sub array. If you include take this sub array, then you can only go to the ```(i+k)```th index because every in between element will have some overlap with the ```i```th sum.
```
int memo[20000][4];
vector<int> ret;
int dp(int i,int n,int k,vector<int>& arr)
{
	if(!n)
		return 0;
	if(i>=arr.size())
	{
		if(n)
			return INT_MIN;
		else return 0;
	}
	else if(memo[i][n]!=-1)
		return memo[i][n];
	else
	{
		int taken=0,not_taken=0;
		not_taken=dp(i+1,n,k,arr);
		taken=arr[i]+dp(k+i,n-1,k,arr);
		return memo[i][n]=max(taken,not_taken);
	}
}
void dfs(int i,int n,int k,vector<int>& arr)
{
	if(!n)
		return;
	else
	{
		int taken=0,not_taken=0;
		taken=arr[i]+dp(i+k,n-1,k,arr);
		not_taken=dp(i+1,n,k,arr);
		if(taken>=not_taken)
		{
			ret.push_back(i);
			dfs(i+k,n-1,k,arr);
		}
		else
			dfs(i+1,n,k,arr);
	}
}
vector<int> maxSumOfThreeSubarrays(vector<int>& nums, int k) 
{
	vector<int> arr(nums.size()-k+1);
	int sum=0,j=0;
	for(int i=0;i<k;++i)
		sum+=nums[i];
	arr[j++]=sum;
	for(int i=k;i<nums.size();++i)
	{
		sum-=nums[i-k];
		sum+=nums[i];
		arr[j++]=sum;
	}
	memset(memo,-1,sizeof(memo));
	dp(0,3,k,arr);  
	dfs(0,3,k,arr);
	return ret;
}
	```