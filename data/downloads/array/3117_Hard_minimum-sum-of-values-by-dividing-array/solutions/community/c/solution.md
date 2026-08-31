# C++ || DP || Easy to understand

**Author:** jugnugupta33
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5019590/](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5019590/)

---

**Complexity** 
Time complexity = O(n* m* log(max element))
Space complexity =O(n* m* log(max element))
	
	class Solution {
		public:
		vector<vector<unordered_map<int,int>>> dp;
		int helper(vector<int>& nums, vector<int>& andValues, int cur, int andCur, int And){
			if(cur>=nums.size()){
				if(andCur>=andValues.size()) return 0;
				else return 1e8;
			}
			else if(andCur>=andValues.size()) return 1e8;

			if(dp[cur][andCur].count(And)) return dp[cur][andCur][And];

			int inclu=1e8;
			if((And&nums[cur])==andValues[andCur]){
				inclu = nums[cur] + helper(nums, andValues, cur+1, andCur+1, ((1<<17)-1));
			}
			int exclu = helper(nums, andValues, cur+1, andCur, (And&nums[cur]));

			return dp[cur][andCur][And]=min(inclu, exclu);
		}
		int minimumValueSum(vector<int>& nums, vector<int>& andValues) {
			int n=nums.size(), m=andValues.size();
			dp.resize(n, vector<unordered_map<int,int>> (m));

			int ans = helper(nums, andValues, 0, 0, ((1<<17)-1));
			if(ans==1e8) return -1;
			return ans;
		}
	};