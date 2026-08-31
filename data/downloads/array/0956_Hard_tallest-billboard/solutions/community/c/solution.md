# [C++] Recursion -> Memoziation O(n*n)

**Author:** deathstroke20
**Votes:** 20
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/2184537/](https://leetcode.com/problems/tallest-billboard/solutions/2184537/)

---

[C++]

BRUTE FORCE APPROACH => **TLE** 

In this approach you have three choices first one dont pick any second one is pick and drop it in set1 and third is drop it in set2. By doing this we cover all possible methods to divide nums into 2 sets and when iteration is complete then if both sets sum is same we found ans then get max of it and store it in res.

	class Solution {
	public:
		int f(int i,vector<int>& v, int a, int b){
			if(i==v.size()){
				if(a==b){
					return a;
				}
			  return 0;
			}

			int x = f(i+1,v,a,b);
			int y = f(i+1,v,a+v[i],b);
			int z = f(i+1,v,a,b+v[i]);

			return max({x,y,z});
		}
		int tallestBillboard(vector<int>& rods) {
			return f(0,rods,0,0);

		}
	};

This solution can be memoized using 3D array but it requires lot and space and we'll get **MLE** .


Now Optimized approach 
Instead of taking then seperate sets consider only the difference of the sets and also keeping the sum of set in hand , and difference of set1 and sey2 is stored in the recursive state of the dp.

WITH MEMOZIATION => **AC**

		class Solution {
		public:
			vector<unordered_map<int,int>> dp;
			int f(int i,vector<int>& v, int d){
				if(i==v.size()){
					if(d==0){
						return 0;
					}
				  return INT_MIN;
				}

				if(dp[i].find(d)!=dp[i].end())return dp[i][d];

				int x = f(i+1,v,d);
				int y = v[i] + f(i+1,v,d+v[i]);
				int z = f(i+1,v,d-v[i]);

				return dp[i][d] = max({x,y,z});
			}
			int tallestBillboard(vector<int>& rods) {
				dp.assign(21,{});
				return f(0,rods,0);

			}
		};

