# ✅ Short & Easy w/ Explanation | O(L*m*n) DP solution (6 lines) similar to knapsack

**Author:** archit91
**Votes:** 306
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/1138589/](https://leetcode.com/problems/ones-and-zeroes/solutions/1138589/)

---

For each string in the set, we have the choice to include it in the subset or leave it. For `Max(strs.length) == 600`, we would have `2^600`, different ways of choosing and we have to find the way which maximizes the subset size. Obviously, this exponential Time complexity brute force approach won't work. 

---

\u2714\uFE0F ***Solution (Dynamic Programming)***

This problem looks a lot like the knapsack just that we have two constraints here `m` and `n` instead of just `W` in the knapsack problem. Here, a set of items(strings) are given and we have to choose a subset satisfying given constraints. We can apply **DP** here. We can maintain a 2d dp array, where `dp[i][j]` will maintain the optimal solution when `zeros_limit = i & ones_limit = j`.

For each string, some number of 0s(lets call *`zeros`*) and 1s (lets call *`ones`*) are required. Obviously, if our balance of zeros and ones is less than what is required by current string, we can't choose it. But in the case where our balance of *zeros* and *ones*  is greater than the required, we have two cases -
* Either take the current string into our subset. The resultant count would be 1 + optimal solution that we had when our balance was `i - zeros` & `j - ones`.
* Or leave the current string meaning the resultant count will remain the same.

For each string in `strs`, we will update the dp matrix as per the above two cases.




```
int findMaxForm(vector<string>& strs, int m, int n) {
	// dp[i][j] will store Max subset size possible with zeros_limit = i, ones_limit = j
	vector<vector<int> > dp(m + 1, vector<int>(n + 1));
	for(auto& str : strs) {
		// count zeros & ones frequency in current string            
		int zeros = count(begin(str), end(str), '0'), ones = size(str) - zeros; 
		// which positions of dp will be updated ?
		// Only those having atleast `zeros` 0s(i >= zeros) and `ones` 1s(j >= ones)
		for(int i = m; i >= zeros; i--)
			for(int j = n; j >= ones; j--)                    
				dp[i][j] = max(dp[i][j], // either leave the current string
							   dp[i - zeros][j - ones] + 1); // or take it by adding 1 to optimal solution of remaining balance
		// at this point each dp[i][j] will store optimal value for items considered till now & having constraints i and j respectively
	}
	return dp[m][n];
}
```

***Time Complexity :*** **`O(L*m*n)`**, where `L` is the length of `strs`
***Space Complexity :*** **`O(m*n)`**


----
----

<br />

\uD83D\uDCDD ***Some Extra Points*** \uD83D\uDCA1



* *Why go from `i = m` and `j = n`, i.e, bottom right of our dp to the top left ?*
**Ans :** For every string, we are updating the values of dp where it is possible to choose the current string. Now, we could do something like - 

	```
	// wrong way
	for(int i = 0; i <= m; i++)
		for(int j = 0; j <= n; j++)
			if(i >= zeros && j >= ones) 
				dp[i][j] = max(dp[i][j], dp[i - zeros][j - ones] + 1); 
	```

	What this does is, it will update some values in the **top left of dp** and then we would be using these updated values in **updating some `dp[i][j]` in the bottom right**. But this would be wrong, since it would be like choosing the same string twice.

	We could most certainly do it from bottom left as well...it's just a bit less efficient -

	```
	int findMaxForm(vector<string>& strs, int m, int n) {        
		vector<vector<int> > dp(m + 1, vector<int>(n + 1));
		for(auto& str : strs) {		
			int zeros = count(begin(str), end(str), '0'), ones = size(str) - zeros; 
			vector<vector<int> > dp2 = dp;
			for(int i = 0; i <= m; i++)
				for(int j = 0; j <= n; j++)                    
					if(i - zeros >= 0 && j - ones >= 0) // use this check or directly start from i=zeros & j=ones
						dp2[i][j] = max(dp[i][j], dp[i - zeros][j - ones] + 1); // ensures we don't count a string multiple times
			dp = dp2;
		}
		return dp[m][n];
	}
	```	
	----

* *Recursive solution ?* 
**Ans** : Here's the Top-down recursive approach -
	```
	vector<vector<vector<int> > >dp;
	int findMaxForm(vector<string>& strs, int m, int n) {        
		dp.resize(size(strs), vector<vector<int> >(m + 1, vector<int>(n + 1)));
		return helper(strs, m, n, 0);
	}
	int helper(vector<string>& strs, int m, int n, int idx){
		// base condition - all items covered, then stop further recusion
		if(idx == size(strs)) return 0; 
		// if the current case is already memoised - return it
		if(dp[idx][m][n]) return dp[idx][m][n];
		// count freqeuncy of zeros and ones in current string
		int zeros = count(begin(strs[idx]), end(strs[idx]), '0'), ones = size(strs[idx]) - zeros;
		dp[idx][m][n] = helper(strs, m, n, idx + 1); // case where current string is not chosen & move to next string
		// if current string can be chosen, find optimal between choosing it and leaving it
		if(m - zeros >= 0 && n - ones >= 0) 
			dp[idx][m][n] = max(dp[idx][m][n], 1 + helper(strs, m - zeros, n - ones, idx + 1));
		return dp[idx][m][n]; // finally the optimal answer will be returned
	}
	```
	The above solution gave runtime which was about 5x slower and space usage which was around 10x more than the iterative version. Also, the above solution is a **3d dp** solution and I wasn't able to form a **2d recursive solution**. If anyone is able to do it, **please comment below.**
	
	----

* *How to know this is a DP problem?*
**Ans** : You wont get that it's a dp problem right away. For me, I first thought it may be a greedy solution where I could sort the `strs` based on length of string and greedily choose starting from the smallest strings that satisfied the constraints. This didn't work because one constraint could be smaller than other and greedily choosing smallest string may end up using all of that contraint's balance at once. Tried some other ways of sorting based on m/n & using greedy approach but to no avail.

	Finally decided to go back and see if there's a brute force way of solving it. I could observe that for each string, we had choice to select or leave it but this gave exponential TC. After making this observation, the problem seemed kind of similar to some other dp problems like coin change or knapsack problem where we have to make choice about each item - whether to take it or leave it. But this problem had 2 constrains `m` and `n`

	Now, for 1-contraint dp problem like knapsack, we would do something like -

	```
	for item in items_list:
		for w in range(0, MAX_W+1): // build optimal answers for w from [0, max_W]
			// take it or leave to get optimal answer
		// now dp will have optimal answers for items considered till now
	```

	In this case, we would have to deal with both the constraints instead of one - 
	```
	for _string in strs:
		for i in range(0, m+1):
			for j in range(0, n+1): // build optimal answers for both constraints - for each j in [0,n] & do this for each i in [o,m]
				// again take it or leave choice will be evaluated for _string
		// now dp will have optimal answers for strings considered till now
	```

	Now, the solution I presented above is analogous to optimized 1d approach in knapsack. In this, the non-optimized space appraoch would be to use 3d dp where `dp[i][j][k]` would denote optimal solution for first `i` items when constraints `m` and `n` are `j` and `k` respectively. This is shown in the recursive solution given above
	
	----

I don't know if a did a good job of explaining my approach but I hope this would help others in understanding the problem and improving the approach of building up to a dp solution.

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---