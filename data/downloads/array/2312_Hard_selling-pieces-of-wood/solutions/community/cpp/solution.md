# 📌[Partition DP] Recursion->Memoization->Tabulation->Space Optimization

**Author:** Avi_G10
**Votes:** 150
**Link:** [https://leetcode.com/problems/selling-pieces-of-wood/solutions/2170082/](https://leetcode.com/problems/selling-pieces-of-wood/solutions/2170082/)

---

#####  **Let's Start The Journey of Solving This Beautiful Problem** \uD83D\uDE09


**Step - 1** **(*Understanding what the problem states*)**

We have to `explore all possible ways `
(i.e cut the wood in all possible ways both row wise and column wise)
and `return` the case in which we can earn `maximum money`.

****
	
**Step - 2** **(*How to approach the problem*)**

According to step - 1, we have `explore all possible` ways 
in which wood can be cut both row-wise and column-wise. 
So, we have to `use Recursion`.
	
****

**Step - 3** **(*Writing Recursion / Top-Down Approach*)**	

**Obervation :** 
It is difficult to work with the `Prices` matrix given. So, we have to store the prices into a data structure (like `HashMap`, `2D Vector` etc.) according to the `height` and `width` of the wood. Here, I will use HashMap.

**How To Write Recursion ? :**
1. To Explore all possible ways, we can cut the Rectangular wood both row-wise and column-wise `independently`.
[**Why independently? :** 
According to the question; `To cut a piece of wood, you must make a vertical or horizontal cut across the entire height or width of the piece to split it into two smaller pieces`. This is why we can consider vertical and horizontal cuts independently.] 
	
	I.  If length of `row` is `m`, then we can do partition at `1,2,3,....,m-1`.

	II.  If length of `column` is `n`, then we can do partition at `1,2,3,....,n-1`.

2.  `Return` the `maximum` of all cases.

3. ***Base case -*** The `partitions` for which `price is not given`, we have to `return 0`.

**Code :** 

	class Solution {
	private:
		long long f(int row, int col, map<pair<int,int>,long long> &mp){

			//Base case is tackled in this line
			long long ans = mp[{row,col}]; 

			for(int i = 1;i < row;i++) //Partitions Row-wise
				ans = max(ans,f(i,col,mp) + f(row-i,col,mp));

			for(int j = 1;j < col;j++) //Partitions Column-wise
				ans = max(ans,f(row, j, mp) + f(row, col-j, mp));

			return ans;
		}
	public:
		long long sellingWood(int m, int n, vector<vector<int>>& prices) {
			//Declaring the HashMap
			map<pair<int,int>,long long> mp;

			//Storing Prices in HashMap where {height,width} of wood is key and {Price} is value
			for(int i = 0;i < prices.size();i++)
				mp[{prices[i][0],prices[i][1]}] = prices[i][2];

			return f(m,n,mp);
		}
	};


**Time complexity -** *Exponential*
**Space complexity -** *O(k) + O(m + n)* [ Recursion stack space], k = `Size` of `Prices` Array Given

**Result :** *Time Limit Exceded*

****

**Step - 4** **(*Optimizing Recursion / Top-Down Approach*)**	

**Obervation :** 
Due to symmetry, If we do partitions till (row/2) and (col/2), we will be able to explore all possible ways.
***Example -***
For `i = 3 & row = 7`; 
we will call `f(3,col,mp) + f(7-3,col,mp)` i.e `f(3,col,mp) + f(4,col,mp)`.
No point to call it again for `i = 4 & row = 7` i.e `f(4,col,mp) + f(3,col,mp)`

**Code :**

	class Solution {
	private:
		long long f(int row, int col, map<pair<int,int>,long long> &mp){

			//Base case is tackled in this line
			long long ans = mp[{row,col}]; 

			for(int i = 1;i <= row/2;i++) //Partitions Row-wise
				ans = max(ans,f(i,col,mp) + f(row-i,col,mp));

			for(int j = 1;j <= col/2;j++) //Partitions Column-wise
				ans = max(ans,f(row, j, mp) + f(row, col-j, mp));

			return ans;
		}
	public:
		long long sellingWood(int m, int n, vector<vector<int>>& prices) {
			//Declaring the HashMap
			map<pair<int,int>,long long> mp;

			//Storing Prices in HashMap where {height,width} of wood is key and {Price} is value
			for(int i = 0;i < prices.size();i++)
				mp[{prices[i][0],prices[i][1]}] = prices[i][2];

			return f(m,n,mp);
		}
	};
	
**Time complexity -** *Exponential*
**Space complexity -** *O(k) + O(m + n)* [ Recursion stack space], k = `Size` of `Prices` Array Given

**Result :** *Time Limit Exceded*

****

**Step - 5** **(*Writing Memoization*)**

**Obervation :** 
If you `draw Recursion Tree`, You will `observe` there will be lots of `Overlapping Sub-Problems`.
So, we have to `use Memoization`.

**How To Write Memoization ? :**

1.  See the `range` of `row` and `col` variable.
	 I. `row` - `[1,m]`
	 II. `col` - `[1,n]`
2. Declare a 2D Vector (say, `dp`)	Of length `[max(row)+1][max(col)+1]` and `Intialised` with a value not in the constraints (like `-1` here) i.e v`ector<vector<long long>> dp(m+1,vector<long long>(n+1,-1));`
3. Now before going into recursion call check (i.e `if(dp[row][col] != -1)`) if the value is already computed or not. If computed return it (i.e `return dp[row][col]`), no need to compute it again.
4. Every time returning the value of recursion call store it in `dp[row][col]` so that we can use it again.

**Code :**

	class Solution {
	private:
		long long f(int row, int col, map<pair<int,int>,long long> &mp,vector<vector<long long>> &dp){
			//Check pre-computed previously or not
			if(dp[row][col] != -1) return dp[row][col];

			//Base Case is tackled under this
			long long ans = mp[{row,col}]; 

			for(int i = 1;i <= row/2;i++) //Partitions Row-wise
				ans = max(ans,f(i,col,mp,dp) + f(row-i,col,mp,dp));

			for(int j = 1;j <= col/2;j++) //Partitions Column-wise
				ans = max(ans,f(row, j, mp,dp) + f(row, col-j, mp,dp));

			//store ans in dp array before returning so that we can use it again.
			return dp[row][col] = ans; 
		}
	public:
		long long sellingWood(int m, int n, vector<vector<int>>& prices) {
			//Declaring the HashMap
			map<pair<int,int>,long long> mp;

			//Storing Prices in HashMap where {height,width} of wood is key and {Price} is value
			for(int i = 0;i < prices.size();i++)
				mp[{prices[i][0],prices[i][1]}] = prices[i][2];

			vector<vector<long long>> dp(m+1,vector<long long>(n+1,-1));
			return f(m,n,mp,dp);
		}
	};

**Time complexity -** *O(mn(m+n))*
**Space complexity -** *O(mn) + O(k) + O(m + n)* [ Recursion stack space], k = `Size` of `Prices` Array Given

**Result :** *Accepted*

****

**Step - 6** **(*Writing Tabulation / Bottom-Up Approach*)**	

**Why To Do Tabulation ? :**
To remove the `Recursion stack Space` (i.e `O(m + n)`) we are using.

**How To Write Tabulation? :**

1. `Tabulation` is `Bottom-up` approach i.e `opposite` of `Top-Down / Recursion`. So, here we will run loop in `opposite order` i.e `row - 1,2,3,4....m` and `column - 1,2,3,....n.`
2. `Copy & Paste` the `recursion` inside the loop `i.e`
		
		//Base Case is tackled under this
		long long ans = mp[{row,col}]; 

		for(int i = 1;i <= row/2;i++) //Partitions Row-wise
			ans = max(ans,f(i,col,mp,dp) + f(row-i,col,mp,dp));

		for(int j = 1;j <= col/2;j++) //Partitions Column-wise
			ans = max(ans,f(row, j, mp,dp) + f(row, col-j, mp,dp));

		//store ans in dp array before returning so that we can use it again.
		return dp[row][col] = ans;
	and `change function to dp array` ( like `f(i,col,mp,dp)` to `dp[i][col]`).
3. `Remove return` from `return dp[row][col] = ans;`
4. Atlast change return statement `return f(m,n,mp,dp)` to `return dp[m][n]`.


**Code :**
	 

	class Solution {
	public:
		long long sellingWood(int m, int n, vector<vector<int>>& prices) {
			//Declaring the HashMap
			map<pair<int,int>,long long> mp;

			//Storing Prices in HashMap where {height,width} of wood is key and {Price} is value
			for(int i = 0;i < prices.size();i++)
				mp[{prices[i][0],prices[i][1]}] = prices[i][2];

			vector<vector<long long>> dp(m+1,vector<long long>(n+1,-1));

			for(int row = 1;row <= m;row++){ //loop reversed
				for(int col = 1;col <= n;col++){ //loop reversed

					//Base Case is tackled under this
					long long ans = mp[{row,col}]; 

					for(int i = 1;i <= row/2;i++) //Partitions Row-wise
						ans = max(ans,dp[i][col] + dp[row-i][col]);

					for(int j = 1;j <= col/2;j++) //Partitions Column-wise
						ans = max(ans,dp[row][j] + dp[row][col-j]);

					//store ans in dp array before returning so that we can use it again.
					dp[row][col] = ans;
				}
			}

			return dp[m][n];
		}
	};


**Time complexity -** *O(mn(m+n))*
**Space complexity -** *O(mn) + O(k)*, k = `Size` of `Prices` Array Given

**Result :** *Accepted*

****

**Step - 7** **(*Writing Space Optimization*)**

**Obervation :** 
1. If you can `fill the dp array`,then you will see, we `donot need HashMap` to `store prices`. `We can directly store prices in dp array`.
2. `Previously`, we are `tackling base case` in `long long ans = mp[{row,col}]; ` .` Now`, if we  `initialized dp array by 0`,then base case will be tackled.


**Code :**

	class Solution {
	public:
		long long sellingWood(int m, int n, vector<vector<int>>& prices) {     
			//Base case is tackled in this declaration as we initialized the dp array with 0.
			vector<vector<long long>> dp(m+1,vector<long long>(n+1,0)); 

			//Storing Prices in dp array itself
			for(int i = 0;i < prices.size();i++)
				dp[prices[i][0]][prices[i][1]] = prices[i][2];

			for(int row = 1;row <= m;row++){ //loop reversed
				for(int col = 1;col <= n;col++){ //loop reversed

					//Base Case is tackled under this
					long long ans = dp[row][col]; 

					for(int i = 1;i <= row/2;i++)  //Partitions Row-wise
						ans = max(ans,dp[i][col] + dp[row-i][col]);

					for(int j = 1;j <= col/2;j++) //Partitions Column-wise
						ans = max(ans,dp[row][j] + dp[row][col-j]);

					//store ans in dp array before returning so that we can use it again.
					dp[row][col] = ans;
				}
			}

			return dp[m][n];
		}
	};


**Time complexity -** *O(mn(m+n))*
**Space complexity -** *O(mn)*

**Result :** *Accepted*

****

**JOURNEY ENDS HERE\uD83D\uDE42**

**My Other Articles :**

1. [Number of Distinct Roll Sequences](https://leetcode.com/problems/number-of-distinct-roll-sequences/discuss/2197300/3D-DP-Recursion-greaterMemoization-greaterTabulation-greaterSpace-Optimization) [ 3D DP Pattern ]

**If You Like It, Please Upvote.**











