# ✅ BFS CPP (commented)

**Author:** Hopeless_
**Votes:** 5
**Link:** [https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/1710682/](https://leetcode.com/problems/k-highest-ranked-items-within-a-price-range/solutions/1710682/)

---


```
int n,m; 
bool bounds(int x,int y)    // this will check whether we are in bounds or not
{
	if(x>=n || x<0 || y>=m || y<0)
	{
		return false;
	}
	return true;
}
vector<vector<int>> highestRankedKItems(vector<vector<int>>& grid, vector<int>& pricing, vector<int>& start, int k) {
	n = (int)grid.size();
	m = (int)grid[0].size();
	int l = start[0];
	int r = start[1];
	multiset<pair<pair<int,int>,pair<int,int>>>ms;
	/*  {{{Distance,Price},{Row,Column}}}
		1. The states are sorted first by distance
		2. If two states have the same distance then they will be sorted by price
		3. Two states having same distance and same price will be sorted by row
		4.  Two states having same distance, same price and same row will be sorted by column
	*/
	ms.insert({{0,grid[l][r]},{l,r}});

	int dp[n][m];           // using dp to handle subproblems
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<m;j++)
		{
			dp[i][j] = -1;
		}
	}
	dp[l][r] = 1;

	int dir[5] = {1,0,-1,0,1};
	vector<vector<int>>ans;
	//BFS for every level 
	while((int)ms.size()>0)
	{
		int sz = (int)ms.size();
		// exhaust all the states at this level (or distance)
		while(sz>0)
		{
			int d = (*ms.begin()).first.first;
			int p = (*ms.begin()).first.second;
			int x = (*ms.begin()).second.first;
			int y = (*ms.begin()).second.second;
			ms.erase(*ms.begin());
			if(p>=pricing[0] && p<=pricing[1])     // if price is in range then take
			{
				ans.push_back({x,y});
			}
			if((int)ans.size()==k)          // job done return
			{
				return ans;
			}
			for(int i=0;i<4;i++)
			{
				int new_x = x + dir[i];
				int new_y = y + dir[i+1];
				if(bounds(new_x,new_y))
				{
					int new_price = grid[new_x][new_y];
					if(new_price==0)       // since we cant pass through a 0 so dont insert in multiset
					{
						continue;
					}
					if(dp[new_x][new_y]==-1)   // if this node is not visited
					{
						ms.insert({{d+1,new_price},{new_x,new_y}});
						dp[new_x][new_y] = 1;
					}
				}
			}
			sz--;
		}
	}
	return ans;
}
```